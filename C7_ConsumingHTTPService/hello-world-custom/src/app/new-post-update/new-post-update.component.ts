import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-new-post-update',
  templateUrl: './new-post-update.component.html',
  styleUrls: ['./new-post-update.component.css']
})
export class NewPostUpdateComponent implements OnInit {
  //GETTING DATA
  posts : any;
 
  constructor(private service: PostService) { }
   ngOnInit() {
    this.service.getAll()
      .subscribe(data => this.posts=data);
  }
//to update data
updatePost(postObj){
 this.service.update(postObj.id,{isRead : true})
  .subscribe(data => this.posts=data);
  }
}
