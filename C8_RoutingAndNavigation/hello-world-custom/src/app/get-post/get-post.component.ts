import { Component } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';

@Component({
  selector: 'app-get-post',
  templateUrl: './get-post.component.html',
  styleUrls: ['./get-post.component.css']
})
export class GetPostComponent {
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

}
