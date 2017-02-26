import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';
//import { FilterTextComponent } from './shared/filter-text/filter-text.component';

//import { VendorService } from './models/vendor.service';
//import { FilterTextService } from './shared/filter-text/filter-text.service';

const routes: Routes = [
    { path: '', pathMatch: 'full', component: PageNotFoundComponent   },
    { path: 'data-dictionary', loadChildren: 'app/data-dictionary/data-dictionary.module#DataDictionaryModule' },
    { path: 'vendor-lookup', pathMatch: 'full', loadChildren: 'app/vendor-listing/vendor-listing.module#VendorListingModule'},
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }


