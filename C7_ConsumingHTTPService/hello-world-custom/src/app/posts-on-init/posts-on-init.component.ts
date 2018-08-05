import { Component, OnInit } from '@angular/core';
import { Http } from '../../../node_modules/@angular/http';

@Component({
  selector: 'app-posts-on-init',
  templateUrl: './posts-on-init.component.html',
  styleUrls: ['./posts-on-init.component.css']
})
export class PostsOnInitComponent implements OnInit {
  posts : any;
  private url='http://jsonplaceholder.typicode.com/posts';

  constructor(private http  : Http) { }

  ngOnInit() {
    this.http.get(this.url)
    .subscribe(response => {
     //Getting data
      this.posts=response.json();
    });
  }

}
