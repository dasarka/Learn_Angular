import { Component} from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent{
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
//to update data
updatePost(postObj){
  this.http.patch(this.url +'/'+ postObj.id,JSON.stringify({isRead : true}))
   .subscribe(response => {
     console.log(response.json());
   });
}
}
