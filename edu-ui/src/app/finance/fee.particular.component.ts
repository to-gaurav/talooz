import { Component, Input } from '@angular/core';
import { FeeCategory, FeeBatchMapping, FeeParticular, ParticularBatchMapping } from './fee.model'
import { Batch } from '../common/common.model'
import { CommonService } from '../common/common.service'
import { FeeService } from './fee.service'
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'fee-particular-app',
    templateUrl: './fee.particular.view.html',
})

export class FeeParticularComponent {
    @Input('feeCategoryId') feeCategoryId: string;
    model = new FeeParticular();
    feeCategories:FeeCategory[];
    batchMappings:FeeBatchMapping[];
    particularBatchMappings:Array<ParticularBatchMapping>=[];
    submitted = false;

    constructor(
        private commonService: CommonService, 
        private feeService: FeeService, 
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.getAllFeeCategories();
        let id = this.route.snapshot.paramMap.get('id');
        this.model.feeCategoryId=id;
        this.getBatchesByFeeCategoryId(this.model.feeCategoryId);
    }

    //Fetch all fee category
    getAllFeeCategories() {
        this.feeService.getFeeCategories().subscribe((data: Array<FeeCategory>) => {
            this.feeCategories = data;
        });
    }
    
    getBatchesByFeeCategoryId(paymentId: string){
        if(paymentId==null){
            this.model.feeCategoryId=(<HTMLInputElement>document.getElementById('feeCategoryId')).value
        }
        this.feeService.getBatchesByFeeCategoryId(this.model.feeCategoryId).subscribe((data: Array<FeeBatchMapping>) => {
            this.batchMappings = data;
        });
    }
    
    checkedBatches(val:any) {
        if ((<HTMLInputElement>document.getElementById(val)).checked === true) {
            var particularBatchMapping = new ParticularBatchMapping();
            particularBatchMapping.batchId=val;
            particularBatchMapping.batchName=(<HTMLInputElement>document.getElementById(val)).value;
            particularBatchMapping.feeCategoryId=this.model.feeCategoryId;
            this.particularBatchMappings.push(particularBatchMapping);
        }
        else if ((<HTMLInputElement>document.getElementById(val)).checked === false) {
            let indexx = this.particularBatchMappings.indexOf(val);
            this.particularBatchMappings.splice(indexx,1)
        }
    }

    onSubmit() {
        this.submitted = true;
        this.model.particularBatchMapping=this.particularBatchMappings;
        console.log(JSON.stringify(this.model));
        this.feeService.createFeeParticular(this.model);
        this.reset();
    }

    redirectToFeeCollection() {
        this.router.navigate(['/feeCollection']);
    }

    private reset() {
       this.model.name = null;
       this.model.description = null;
       this.model.amount = null;
   }
}