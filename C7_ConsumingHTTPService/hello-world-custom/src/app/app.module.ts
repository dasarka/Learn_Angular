import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule, ErrorHandler } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { NewcourseFormComponent } from './newcourse-form/newcourse-form.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { PostsComponent } from './posts/posts.component';
import { PostsOnInitComponent } from './posts-on-init/posts-on-init.component';
import { GetPostComponent } from './get-post/get-post.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';
import { DeletePostComponent } from './delete-post/delete-post.component';
import { ExtractServiceComponent } from './extract-service/extract-service.component';
import { NewPostGetComponent } from './new-post-get/new-post-get.component';
import { NewPostDeleteComponent } from './new-post-delete/new-post-delete.component';
import { NewPostUpdateComponent } from './new-post-update/new-post-update.component';
import { NewPostCreateComponent } from './new-post-create/new-post-create.component';
import { PostService } from './services/post.service';
import { AppErrorHandler } from './common/app-error-handler.error';
import { GithubFollowersComponent } from './github-followers/github-followers.component';
import { GithubService } from './services/github.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupFormComponent,
    NewcourseFormComponent,
    UpdatePasswordComponent,
    PostsComponent,
    PostsOnInitComponent,
    GetPostComponent,
    CreatePostComponent,
    UpdatePostComponent,
    DeletePostComponent,
    ExtractServiceComponent,
    NewPostGetComponent,
    NewPostDeleteComponent,
    NewPostUpdateComponent,
    NewPostCreateComponent,
    GithubFollowersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    PostService,
    GithubService,
    {provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
