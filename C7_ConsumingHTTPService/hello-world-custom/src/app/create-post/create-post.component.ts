import { Component } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent{
  private url='http://jsonplaceholder.typicode.com/posts';
  //GETTING DATA
  posts : any;
 
  constructor(private http: Http) {
    http.get(this.url)
      .subscribe(response => {
       //Getting data
        this.posts=response.json();
        
      });
   }

   //to create data
   createPost(input :  HTMLInputElement){
    let postObj={title  : input.value};
    input.value='';
    this.http.post(this.url,JSON.stringify(postObj))
      .subscribe(response=>{
        postObj['id']=response.json().id;
        //to add in posts1 list use PUSH if want to add at last position 
        //or use splice if want to add at anyother position
        this.posts.splice(0,0,postObj); 
      });
 }
}
