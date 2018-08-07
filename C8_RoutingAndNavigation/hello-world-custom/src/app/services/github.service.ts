import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { Http } from '../../../node_modules/@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GithubService extends DataService {

  constructor(http: Http) { 
    super('https://api.github.com/users/mosh-hamedani/followers',http);
  }
}
