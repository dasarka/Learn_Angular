import { Component, OnInit,Input,Output, EventEmitter, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class FavoriteComponent implements OnInit {
  @Input('is-favorite') isSelected: boolean;
  @Output('change') onChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onClick(){
    this.isSelected = !this.isSelected;
    //emit event
    this.onChange.emit({'newValue' : this.isSelected});
  }
}

export interface FavoriteChangedEventArgs{
  newValue  : boolean;
}
