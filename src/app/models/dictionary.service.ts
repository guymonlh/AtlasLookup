import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Dataset, DatasetField } from '../models/dictionary.model';
import { CONFIG } from '../core/config'

@Injectable()
export class DictionaryService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private datasetsUrl = CONFIG.baseUrls.datasets;  // URL to web api
  private datasetFieldUrl = CONFIG.baseUrls.datasetFields;

  constructor(private http: Http) { }

  getDatasets(): Promise<Dataset[]> {
    const url =  `${this.datasetsUrl}?$orderby=DatasetBusinessName`;
    return this.http.get(this.datasetsUrl)
               .toPromise()
               .then(response => response.json().d.results as Dataset[])
               .catch(this.handleError);
  }


   getDatasetFields(id: string): Promise<DatasetField[]> {
    //   const url =  `${this.datasetsUrl}('${id}')?$expand=DatasetFields($orderby=FieldType,BusinessName)`;
    //    const url =  `${this.datasetFieldUrl}?filter=DatasetNameKey eq '${id}'?$orderby=FieldType,BusinessName`;
        const url =  `${this.datasetsUrl}('${id}')?$expand=DatasetFields`;
        return this.http.get(url)
               .toPromise()
               .then(response => response.json().d.DatasetFields.results as DatasetField[])
               .catch(this.handleError);
  }

  //todo:  Don't go out twice for this!
  getDataset(id: string): Promise<Dataset> {
       // const url =  `${this.datasetsUrl}('${id}')?$expand=DatasetFields&$select=DatasetBusinessName,BusinessDescription,FilterDescription,DatasetFields`;
       const url =  `${this.datasetsUrl}('${id}')`;
       return this.http.get(url)
               .toPromise()
               .then(response => response.json().d as Dataset)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}