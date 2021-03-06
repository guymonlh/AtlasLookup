export class Dictionary {
    constructor(subjectArea: string) {
        this.SubjectArea = subjectArea;
        this.Expanded = 0;
        this.Datasets = [];
    }
    SubjectArea: string;
    Expanded: number;
    Datasets: Dataset[];
}

export class Dataset {
   constructor(   ) {}
   DatasetKey: number; 
   DatsetNameKey: string; 
   DatasetLocation: string;
   DatsetTechnicalName: string; 
   DatasetBusinessName: string;
   Project: string;
   SubjectArea: string;
   BusinessDescription: string;
   FilterDescription: string
};


export class DatasetField {
   constructor(   ) {}
   DatasetNameKey: string; 
   SourceOwnerLocation: string; 
   SourceOwnerDatasetName: string;
   FieldType: string; 
   BusinessGroup: string;
   TechnicalName: string;
   BusinessName: string;
   BusinessDescriptoin: string;
   Example: string
};