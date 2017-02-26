import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { Vendor, VendorSite } from '../models/vendor.model';
import { CONFIG } from '../core/config';
import { environment } from '../../environments/environment';

@Injectable()
export class VendorService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private vendorsUrl = environment.apiDomain + CONFIG.basePaths.vendors;  // URL to web api
  private vendorSitesUrl = environment.apiDomain + CONFIG.basePaths.vendorSites;

  constructor(private http: Http) { }

  getVendors(searchText: string): Promise<Vendor[]> {
    searchText = searchText.toUpperCase();
    console.log('searchtext:',searchText);
    //const url =  `${this.vendorsUrl}?$filter=substringof('${searchText}',VendorName)&$expand=VendorSites`;
    const url =  `${this.vendorsUrl}?$filter=substringof('${searchText}',VendorName) or VendorNumber eq '${searchText}'&$orderby=VendorName&$expand=VendorSites`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().d.results as Vendor[])
               .catch(this.handleError);
  }

  getVendorSites(id: string): Promise<VendorSite[]> {
        //const url =  `${this.datasetsUrl}('${id}')?$expand=DatasetFields($orderby=FieldType,BusinessName)`;
        //const url =  `${this.datasetFieldUrl}?filter=DatasetNameKey eq '${id}'?$orderby=FieldType,BusinessName`;
        const url =  `${this.vendorsUrl}('${id}')?$expand=VendorSites`;
        return this.http.get(url)
               .toPromise()
               .then(response => response.json().d.VendorSites.results as VendorSite[])
               .catch(this.handleError);
  }

  //todo:  Don't go out twice for this!
  getVendor(id: string): Promise<Vendor> {
       // const url =  `${this.datasetsUrl}('${id}')?$expand=DatasetFields&$select=DatasetBusinessName,BusinessDescription,FilterDescription,DatasetFields`;
       const url =  `${this.vendorsUrl}('${id}')`;
       return this.http.get(url)
               .toPromise()
               .then(response => response.json().d as Vendor)
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}