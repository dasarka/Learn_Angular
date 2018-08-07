import { Component } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';

@Component({
  selector: 'app-delete-post',
  templateUrl: './delete-post.component.html',
  styleUrls: ['./delete-post.component.css']
})
export class DeletePostComponent {
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
   //to delete data
   deletePost(postObj){
    this.http.delete(this.url +'/'+ postObj.id)
    .subscribe(response => {
      let index=this.posts.indexOf(postObj)
      this.posts.splice(index,1);
      console.log(response.json());
    });
  }
}
