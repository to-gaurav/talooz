import { Injectable } from '@angular/core';


import { RequestOptions, Headers, Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Batch, PaymentFrequency } from './common.model';


@Injectable()
export class CommonService {

    constructor(private http: Http) { }
    
    getBatches():Observable<Array<Batch>> {
        return this.http.get('http://localhost:9003/batch').map(res => res.json()).map((data: Array<Batch>) => {
        return data["_embedded"].batch as Batch[];
      });
    }
    
    getPaymentFrequencies():Observable<Array<PaymentFrequency>> {
        return this.http.get('http://localhost:9002/frequencies').map(res => res.json()).map((data: Array<PaymentFrequency>) => {
        return data["_embedded"].frequencies as PaymentFrequency[];
      });
    }

    private handleError(error: Response | any) {
        console.error(error.message || error);
        return Observable.throw(error.status);
    }
}