import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-new-post-get',
  templateUrl: './new-post-get.component.html',
  styleUrls: ['./new-post-get.component.css']
})
export class NewPostGetComponent implements OnInit {
  
  //GETTING DATA
  posts : any;
 
  constructor(private service: PostService) {}
  ngOnInit() {
    this.service.getAll()
      .subscribe(data => this.posts=data);
  }
}
