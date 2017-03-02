export class Vendor {
   constructor(   ) {}
   VendorKey: number; 
   VendorNumber: string; 
   VendorType: string;
   VendorName: string;
   Expanded:  number;
   Status: string;
   VendorSites: any;
};


export class VendorSite {
   constructor(   ) {}
   VendorKey: number; 
   VendorSiteId: number; 
   VendorSite: string;
   VendorSiteLine1: string;
   VendorSiteLine2: string;
   VendorSiteLine3: string;
   VendorSiteCity: string;
   VendorSiteState: string;
   VendorSiteProvince: string;
   VendorSiteZipcode: string;
   VendorSiteCountry: string;   
};