import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-from',
  templateUrl: './contact-from.component.html',
  styleUrls: ['./contact-from.component.css']
})
export class ContactFromComponent {
  contactMethods=[
    {id:'email', name:'Email'},
    {id:'phone', name:'TelePhone'},
    {id:'direct', name:'By Post'}
  ];
  log(x){
    console.log(x);
  }
  submit(formData){
    console.log(formData);
    console.log("Form Value: ",formData.value);
  }
}
