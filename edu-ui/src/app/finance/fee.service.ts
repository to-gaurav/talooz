import { Injectable } from '@angular/core';

import { RequestOptions, Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { FeeCategory, FeeBatchMapping, FeeParticular, FeeCollection } from './fee.model';


@Injectable()
export class FeeService {

    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }
      
    getFeeCategories():Observable<Array<FeeCategory>> {
        return this.http.get('http://localhost:9002/fee').map(res => res.json()).map((data: Array<FeeCategory>) => {
        console.log(data);
        return data as FeeCategory[];
      });
    }

    createFeeCategory(feeCategory: FeeCategory): Promise<FeeCategory> {
        return this.http
          .post("http://localhost:9002/fee", JSON.stringify(feeCategory), { headers: this.headers })
          .toPromise()
          .then(res => res.json() as FeeCategory)
          .catch(this.handleError);
    }

    getBatchesByFeeCategoryId(paymentId:string):Observable<Array<FeeBatchMapping>> {
        return this.http.get('http://localhost:9002/fee/batches/'+paymentId).
            map(res => res.json()).map((data: Array<FeeBatchMapping>) => {
            console.log(data);
            return data as FeeBatchMapping[];
        });
    }

    createFeeParticular(feeParticular: FeeParticular): Promise<any> {
        return this.http
          .post("http://localhost:9002/fee/particular", JSON.stringify(feeParticular), { headers: this.headers })
          .toPromise()
          .then(res => res.json())
          .catch(this.handleError);
    }

    createFeeCollection(feeCollection: FeeCollection): Promise<any> {
        return this.http
          .post("http://localhost:9002/feeCollections", JSON.stringify(feeCollection), { headers: this.headers })
          .toPromise()
          .then(res => res.json())
          .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}