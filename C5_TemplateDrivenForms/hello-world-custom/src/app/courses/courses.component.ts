import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  //ngIf
  coursesList=[1,2];
  coursesList1=[];
  
  

  //ngSwitchCase
  viewTab='map';

  //ngFor
  coursesList2=[
    {id:1,value:'Course 1'},
    {id:2,value:'Course 2'},
    {id:3,value:'Course 3'},
  ];

  idCount=this.coursesList2.length;
  onAdd(){
    this.coursesList2.push({id:(++this.idCount),value:'Course '+this.idCount});
  }
  onRemoveLast(){
    if(this.idCount>0){
      this.coursesList2.pop();
      this.idCount--;
    }
  }

  onRemove(course){
    let index=this.coursesList2.indexOf(course);
    this.coursesList2.splice(index,1);
  }

  //ngFor on Track by
  coursesList3;

  loadCourses(){
   this.coursesList3=[ 
     {id:4,value:'Course 101'},
     {id:5,value:'Course 102'},
     {id:6,value:'Course 103'}];

  }

  trackCourse(index,course){
    return course ? course.id : undefined;
  }
  constructor(service : CoursesService) { 
    this.coursesList3=service.getCourses();
    console.log(this.coursesList3)
  }

  ngOnInit() {
  }

  //ngClass
  isSelected = false;
  onClick(){
    this.isSelected = !this.isSelected;
  }

  //Safe Traversal Operator
  task={
    title: 'Review application',
    asignee:{
      name: 'John Smith'
    }
  }
  task1={
    title: 'Review application',
    asignee:null
  }

}
