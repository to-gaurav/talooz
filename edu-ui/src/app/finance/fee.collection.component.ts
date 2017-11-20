import { Component } from '@angular/core';
import { FeeCategory, FeeCollection } from './fee.model'
import { Batch,PaymentFrequency } from '../common/common.model'
import { CommonService } from '../common/common.service'
import { FeeService } from './fee.service'
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
    selector: 'fee-collection-app',
    templateUrl: './fee.collection.view.html'
})

export class FeeCollectionComponent {
    model = new FeeCollection();
    feeCategories: FeeCategory[];
    paymentFrequencies: PaymentFrequency[];
    submitted = false;
    
    constructor(private commonService: CommonService, private feeService: FeeService) { }

    ngOnInit(): void {
        this.getAllFeeCategories();
        this.getAllPaymentFrequencies();
        this.model.feeCategoryId="0";
        this.model.paymentFrequencyId="0";
    }

    getAllPaymentFrequencies() {
        this.commonService.getPaymentFrequencies().subscribe((data: Array<PaymentFrequency>) => {
        this.paymentFrequencies = data;
        });
    }

    getAllFeeCategories() {
        this.feeService.getFeeCategories().subscribe((data: Array<FeeCategory>) => {
        this.feeCategories = data;
        });
    }

    async onSubmit() {
        this.submitted = true;
        console.log(JSON.stringify(this.model));
        await this.feeService.createFeeCollection(this.model).then(result => this.model=result); 
        
        //this.reset();
    }
}