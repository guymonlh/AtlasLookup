import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { VendorService} from '../models/vendor.service';

import { VendorListingComponent } from './vendor-listing.component';

// in dashboard module
const routes: Routes = [
  { path: '',  component: VendorListingComponent }
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [ VendorListingComponent ],
  providers: [VendorService]
})
export class VendorListingModule { }