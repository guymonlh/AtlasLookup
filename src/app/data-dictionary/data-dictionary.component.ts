import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';


import { Dataset } from '../models/dictionary.model';
import { DictionaryService } from '../models/dictionary.service';

@Component({
  selector: 'app-data-dictionary',
  templateUrl: './data-dictionary.component.html',
  styleUrls: ['./data-dictionary.component.css']
})
export class DataDictionaryComponent implements OnInit {
datasets: Dataset[];
selectedDataset: Dataset;

  constructor(
    private dictionaryService: DictionaryService
  ) { }

  ngOnInit() {
    this.getDatasets();
  }

   getDatasets() {
      this.dictionaryService.getDatasets()
        .then( (datasets) => {  
        this.datasets = datasets;
        console.log('datasets are done',this.datasets);
        });
  }

  onClick(dataset: Dataset) {
    this.selectedDataset = dataset;
  }

}
