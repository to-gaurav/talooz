export class FeeCategory {
    public feeCategoryId: string;
    public feeName: string;
    public feeDescription: string;
    public feeBatchMapping: FeeBatchMapping[];
}

export class FeeBatchMapping {
    public batchId: string;
    public feeCategoryId: string;
    public batchName: string;
}

export class FeeParticular{
    public particularId:string;
    public feeCategoryId:string;
    public name:string;
    public description:string;
    public amount:string;
    public particularBatchMapping: ParticularBatchMapping[];
}

export class ParticularBatchMapping{
    public feeCategoryId:string;
    public particularId:string;
    public batchId:string;
    public batchName:string;
}

export class FeeCollection{
    public feeCategoryId: string;
    public feeCollectionName: string;
    public startDate: string;
    public endDate: string;
    public paymentFrequencyId: string;
    public dueDate: string;
}