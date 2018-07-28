import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector    :  'courses' ,
    //in CSS,if i want to reference an element like <course> , use selector like "course",
    //if use element like <div class="course">, selector ".class"
    //if use element like <div id="course">, selector "#class"
    template    :   `
        <h2>Title: {{title}}</h2>
        <h3>Course Title: {{CourseTitle}}</h3>
        <h4 style="text-align:left">Courses List from Component</h4>
        <ul style="text-align:left">
            <li *ngFor="let course of courses">
                {{course}}
            </li>
        </ul>
        <h4 style="text-align:left">Courses List from service</h4>
        <ul style="text-align:left">
            <li *ngFor="let course of courses1">
                {{course}}
            </li>
        </ul>
        `
})
export class CoursesComponent{   
    title = "List of courses";
    private _courseTitle = "First Course";
    courses=["Course 1","Course 2","Course 3"];
    courses1;
    constructor(service :CoursesService){
        this.courses1=service.getCourses();
    }

    get CourseTitle(){
        return this._courseTitle;
    }
}