import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses(){
    return [
      {id:1,value:'Course 1'},
      {id:2,value:'Course 2'},
      {id:3,value:'Course 3'},
    ];
  }
}
