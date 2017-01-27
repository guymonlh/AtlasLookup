import 'rxjs/add/operator/switchMap';
import { Component, OnInit, ViewChild }      from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/subscription';


import { Dataset, DatasetField } from '../../models/dictionary.model';
import { DictionaryService } from '../../models/dictionary.service';
import { FilterTextComponent } from '../../shared/filter-text/filter-text.component';
import { FilterTextService } from '../../shared/filter-text/filter-text.service';

declare var componentHandler: any; 
@Component({
  moduleId: module.id,
  selector: 'app-dictionary-listing',
  templateUrl: 'dictionary-listing.component.html',
  styleUrls: ['dictionary-listing.component.css']
})
export class DictionaryListingComponent implements OnInit {
  datasetFields: DatasetField[] = [];
  dataset: Dataset;
  filteredDatasetFields = this.datasetFields;
  @ViewChild(FilterTextComponent) filterComponent: FilterTextComponent;

  constructor(
    private dictionaryService: DictionaryService,
    private filterService: FilterTextService,
    private route: ActivatedRoute) {     }

  filterChanged(searchText: string) {
    console.log('receiving change..', searchText);
    this.filteredDatasetFields = this.filterService.filter(searchText, ['BusinessName'], this.datasetFields);
  }

  getDatasetFields() {
      this.route.params
      .switchMap((params: Params) => this.dictionaryService.getDatasetFields(params['id']))
      .subscribe( (datasetFields) => {  
        this.datasetFields = this.filteredDatasetFields = datasetFields;
        console.log('datasetfields are:', this.datasetFields);
      }      );
  }

  getDataset() {
      this.route.params
      .switchMap((params: Params) => this.dictionaryService.getDataset(params['id']))
      .subscribe( (dataset) => {  
        this.dataset = dataset;
        console.log('dataset is', this.dataset);
      }      );
  }

  ngOnInit() {
   // componentHandler.upgradeDom();
    this.getDatasetFields();
    this.getDataset();
  }

 // trackByCharacters(index: number, datasetField: DatasetField) {
 //   return datasetField.id;
 // }

}
