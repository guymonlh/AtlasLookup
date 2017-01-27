import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DictionaryListingComponent } from './dictionary-listing/dictionary-listing.component';
import { DataDictionaryComponent } from './data-dictionary.component';

const routes: Routes = [
   {
    path: '',
    component: DataDictionaryComponent,
    children: [
      {
        path: ':id',
        component: DictionaryListingComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [  ]
})
export class DataDictionaryRoutingModule { }

export const routedComponents = [ DictionaryListingComponent, DataDictionaryComponent ];