//import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp } from '../../../node_modules/angular2-jwt';
//import {Observable} from 'rxjs/Observable';
//import {map} from 'rxjs/operator';

@Injectable()
export class OrderService {

  constructor(private authHttp: AuthHttp) {
  }

  getOrders() { 
    return this.authHttp.get('/api/orders')
    .map(response => response.json());
  }

  
}
