import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';

import { AppError } from '../common/app.error';
import { NotFoundError } from '../common/not-found.error';
import { BadRequestError } from '../common/bad-request.error';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private url: string,private http  : Http) { }
  getAll(){
    return this.http.get(this.url)
      .pipe(
        map(response => response.json()),
        catchError(this.handleError)
      );
  }
  create(resource : any){
    return this.http.post(this.url,JSON.stringify(resource))
      .pipe(
        map(response => response.json()),
        catchError(this.handleError)
      );
  }
  delete(id : string){
    return this.http.delete(this.url +'/'+ id)
      .pipe(
        map(response => response.json()),
        catchError(this.handleError)
      );
  }
  update(id : string,resource  : any){
    return  this.http.patch(this.url +'/'+ id,JSON.stringify(resource))
      .pipe(
        map(response => response.json()),
        catchError(this.handleError)
      );
  }

  private handleError(error:Response){
    switch (error.status) {
      case 400:
        return throwError(new BadRequestError(error.json()));
      case 404: 
        return throwError(new NotFoundError());
      default:  
        return throwError(new AppError(error));
    }
  
  }
}
