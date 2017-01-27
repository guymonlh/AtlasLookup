import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: PageNotFoundComponent  },
    { path: 'data-dictionary', loadChildren: 'app/data-dictionary/data-dictionary.module#DataDictionaryModule' },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
