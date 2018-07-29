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
    title = "List of courses";
    imageUrl="http://lorempixel.com/400/200";
    colSpan=2;
    isActive=true;
    isEnable=false;
    emailNew="me@example.com";
    onSave(){
        console.log("Button was clicked!!!");
    }
    onSaveEvent($event){
        $event.stopPropagation();
        console.log("Button was clicked!!!",$event);
    }
    onDivClick(){
        console.log("Div was clicked!!!")
    }
    onKeyUp($event){
        if($event.keyCode === 13)
            console.log("ENTER was pressed: keyup");
    }
    onKeyUp1(){
        console.log("ENTER was pressed: keyup1");
    }
    onKeyUp2($event){
        console.log($event.target.value);
    }
    onKeyUp3(email){
        console.log(email);
    }
    onSubmit(){
        console.log("New Email: "+this.emailNew);
    }

    //PIPES
    course={
        title   :   "The Complete Angular Course",
        subtitle    :   "Course Subtitle",
        developer   :   "Developer Name",
        rating  :   4.1975,
        students    :   30123,
        price   :700.70,
        releaseDate :   new Date(2016,3,1)
    }
    //custom pipes
    text=`jhgadskjh a hcl hfohkljhfkjhsfhljhlkjhkhffhlkfzhjhkjfhjsgkhfkjgsiyufgodj;p dhjfdigidyhohfeohfaiugidj dlhiagiuafhgjkhuoagriuyhros hewajlshriueyojldfb fhkzjb dihgsiuhfsoifeh reouiyjeiarj kjfsdbhkfd ihdlkszjdoiun98aewauewou yb98youfshoishiufyuiofsh ugfhuihfiuuhn kjgncz kjcsoif9eauy9y9hy iafghdoi hfuhiojdoihuidfhoi`;

    //Assignment1
    isActiveStar: boolean;
    onChange(){
        this.isActiveStar=!this.isActiveStar;

    }
    //Assignmnet2
    movieTitle  :  string;
}