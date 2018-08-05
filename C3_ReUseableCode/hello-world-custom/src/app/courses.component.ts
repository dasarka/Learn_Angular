import {Component} from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
    selector    :  'courses' ,
    //in CSS,if i want to reference an element like <course> , use selector like "course",
    //if use element like <div class="course">, selector ".class"
    //if use element like <div id="course">, selector "#class"
    templateUrl    :   `./courses.component.html`
})
export class CoursesComponent{ 
    //property binding  
   
}