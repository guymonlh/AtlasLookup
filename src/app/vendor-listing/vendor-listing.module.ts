import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { VendorService} from '../models/vendor.service';

import { VendorListingComponent } from './vendor-listing.component';

//Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';

// in dashboard module
const routes: Routes = [
  { path: '',  component: VendorListingComponent }
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),

      // Register the modules
      BrowserAnimationsModule,
      ButtonsModule
  ],
  declarations: [ VendorListingComponent ],
  providers: [VendorService]
})
export class VendorListingModule { }