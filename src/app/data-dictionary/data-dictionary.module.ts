import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataDictionaryRoutingModule, routedComponents } from './data-dictionary-routing.module';

import { SharedModule } from '../shared/shared.module';
import { DictionaryService} from '../models/dictionary.service'

@NgModule({
  imports: [
    CommonModule,
    DataDictionaryRoutingModule,
    SharedModule
  ],
  declarations: [routedComponents],
  providers: [ DictionaryService ]
})
export class DataDictionaryModule { }
