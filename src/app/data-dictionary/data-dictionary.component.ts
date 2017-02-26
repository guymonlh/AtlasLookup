import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Dictionary } from '../models/dictionary.model';
import { Dataset } from '../models/dictionary.model';
import { DictionaryService } from '../models/dictionary.service';

@Component({
  selector: 'app-data-dictionary',
  templateUrl: './data-dictionary.component.html',
  styleUrls: ['./data-dictionary.component.css']
})
export class DataDictionaryComponent implements OnInit {
dictionaries: Dictionary[];
//datasets: Dataset[];
selectedDataset: Dataset;
itisok : boolean = false;

  constructor(
    private dictionaryService: DictionaryService
  ) { }

  ngOnInit() {
    //this.getDatasets();
    console.log("hello");
    this.getDictionaries();
  }

  //  getDatasets() {
  //     this.dictionaryService.getDatasets()
  //       .then( (datasets) => {  
  //       this.datasets = datasets;
  //       console.log('datasets are done',this.datasets);
  //       });
  // }

  getDictionaries() {
      this.dictionaryService.getDictionaries()
        .then( (dictionaries) => {  
        this.dictionaries = dictionaries;
        console.log('dictionaries are done',this.dictionaries);
     //   console.log("dictionary:",dictionaries[0].Datasets);
        this.itisok=true;
        });       
  }

  onClick(dataset: Dataset) {
    this.selectedDataset = dataset;
  }

}
