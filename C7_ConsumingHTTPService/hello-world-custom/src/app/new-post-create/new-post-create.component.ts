import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app.error';
import { BadRequestError } from '../common/bad-request.error';

@Component({
  selector: 'app-new-post-create',
  templateUrl: './new-post-create.component.html',
  styleUrls: ['./new-post-create.component.css']
})
export class NewPostCreateComponent implements OnInit {
  //GETTING DATA
  posts : any;
 
  constructor(private service: PostService) { }
  ngOnInit() {
    this.service.getAll()
    .subscribe(data => this.posts=data);
  }
   //to create data
  createPost(input :  HTMLInputElement){
    let postObj={title  : input.value};
    this.posts.splice(0,0,postObj); 

    input.value='';
    
    this.service.create(postObj)
      .subscribe(
        data=>{
          postObj['id']=data.id;
          //to add in posts1 list use PUSH if want to add at last position 
          //or use splice if want to add at anyother position
          
        },
        (error  : AppError) =>{
          this.posts.splice(0,1);

          if(error instanceof BadRequestError)
            alert('Provide valid data '+error.originalError);
          else throw error;
        }
      );
  }
}
