import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { LikeChnagedEvents } from './like/like.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  post ={
    title: 'Angular App',
    isFavorite  : true
  }
  tweet ={
    body  : 'Here is the body of a tweet...',
    isLiked: false,
    likeCount: 0
  }
  onFavoriteChange(eventArgs  : FavoriteChangedEventArgs){
    console.log("Favorite item has changed ",eventArgs);
  }

  
}
