import { Component } from '@angular/core';
import { FeeCategory, FeeBatchMapping } from './fee.model'
import { LABELS } from './labels'
import { Batch } from '../common/common.model'
import { CommonService } from '../common/common.service'
import { FeeService } from './fee.service'
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
    selector: 'fee-app',
    templateUrl: './feeCategory.view.html'
})

export class FeeCategoryComponent {
    model = new FeeCategory();
    batches: Batch[];
    batchMapping:Array<FeeBatchMapping>=[];
    submitted = false;
    feeCategory:FeeCategory;

    constructor(private commonService: CommonService, private feeService: FeeService, private router: Router) { }

    ngOnInit(): void {
        this.getAllBatches();
    }

    //Fetch all batches
    getAllBatches() {
        this.commonService.getBatches().subscribe((data: Array<Batch>) => {
        this.batches = data;
        });
    }

    async onSubmit() {
        this.submitted = true; 
        this.model.feeBatchMapping=this.batchMapping;
        console.log(JSON.stringify(this.model));
        await this.feeService.createFeeCategory(this.model).then(result => this.model=result); 
        this.router.navigate(['/feeParticular',this.model.feeCategoryId]);
    }
    

    checkedBatches(val:any) {
        if ((<HTMLInputElement>document.getElementById(val)).checked === true) {
            var feeBatchMapping = new FeeBatchMapping();
            feeBatchMapping.batchId=val;
            feeBatchMapping.batchName=(<HTMLInputElement>document.getElementById(val)).value;
            this.batchMapping.push(feeBatchMapping);
        }
        else if ((<HTMLInputElement>document.getElementById(val)).checked === false) {
            let indexx = this.batchMapping.indexOf(val);
            this.batchMapping.splice(indexx,1)
        }
    }
}