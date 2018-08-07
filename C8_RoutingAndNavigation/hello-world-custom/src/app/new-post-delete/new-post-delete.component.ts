import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app.error';
import { NotFoundError } from '../common/not-found.error';

@Component({
  selector: 'app-new-post-delete',
  templateUrl: './new-post-delete.component.html',
  styleUrls: ['./new-post-delete.component.css']
})
export class NewPostDeleteComponent implements OnInit {
  //GETTING DATA
  posts : any;
 
  constructor(private service: PostService) {}
   ngOnInit() {
    this.service.getAll()
    .subscribe(data => this.posts=data);
  }
   //to delete data
  deletePost(postObj){
    let index=this.posts.indexOf(postObj)
    this.posts.splice(index,1);

    this.service.delete('345') 
    .subscribe(
      null,
      (error  : AppError) =>{
        this.posts.splice(index,1,postObj);

        if(error instanceof NotFoundError)
          alert('This post has already been deleted');
        else throw error;
      }
    );
  }
  

}
