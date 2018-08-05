import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, FormArray } from '../../../node_modules/@angular/forms';

@Component({
  selector: 'app-newcourse-form',
  templateUrl: './newcourse-form.component.html',
  styleUrls: ['./newcourse-form.component.css']
})
export class NewcourseFormComponent  {
  newCourseForm = new FormGroup({
    topics  : new FormArray([])
  });
  addTopic(topic  : HTMLInputElement){
    this.topics.push(new FormControl(topic.value));
    topic.value='';
  }

  removeTopic(topic: FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){
    return this.newCourseForm.get('topics') as FormArray;
  }
}
