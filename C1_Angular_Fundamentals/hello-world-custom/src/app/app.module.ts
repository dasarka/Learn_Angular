import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { NewcourseComponent } from './newcourse/newcourse.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';


@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    NewcourseComponent,
    AuthorsComponent,


  ],
  imports: [
    BrowserModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
