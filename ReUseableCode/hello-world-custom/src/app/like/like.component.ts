import { Component, OnInit,Input,Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {
  @Input('isLiked') isLiked: boolean;
  @Input('likesCount') totalLike: number;
  @Output('change') onChange = new EventEmitter();


  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.isLiked = !this.isLiked;
    this.totalLike += (this.isLiked) ? 1 : -1;
    this.onChange.emit();
  }
}
export interface LikeChnagedEvents{
  isLikedValue  : boolean;
  totalLikeCount  : number
}
