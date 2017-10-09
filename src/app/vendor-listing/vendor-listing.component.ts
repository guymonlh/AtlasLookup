import { Component, OnInit, ViewChild } from '@angular/core';
import 'rxjs/add/operator/switchMap';

import { Vendor, VendorSite }   from '../models/vendor.model';
import { VendorService }        from '../models/vendor.service';
import { FilterTextComponent }  from '../shared/filter-text/filter-text.component';
import { FilterTextService }    from '../shared/filter-text/filter-text.service';

// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';

declare var componentHandler: any; 

@Component({
  selector: 'app-vendor-listing',
  templateUrl: './vendor-listing.component.html',
  styleUrls: [ './vendor-listing.component.css']
})
export class VendorListingComponent implements OnInit {
  vendors: Vendor[] = [];
  hasFirstSearch : boolean = false;
  filteredVendors = this.vendors;
  @ViewChild(FilterTextComponent) filterComponent: FilterTextComponent;

  constructor(  
    private vendorService: VendorService,
    private filterService: FilterTextService
    ) { }

  filterChanged(searchText: string) {
    console.log('receiving search text...', searchText);
    //this.filteredVendors = this.filterService.filter(searchText, ['VendorName'], this.vendors);
    this.getVendors(searchText);
    this.hasFirstSearch = true;
  }

  getVendors(searchText: string) {
      this.vendorService.getVendors(searchText)
        .then( (vendors) => {  
        this.vendors = this.filteredVendors = vendors;
        console.log('vendors are done',this.vendors);
        });
  }

  onButtonClick() {
    console.log('button clicked');
}

  ngOnInit() {
      //componentHandler.upgradeDom();    
  }

}
