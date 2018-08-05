import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  @Input('title') title: string;
  hasOpen=false;

  constructor() { }

  ngOnInit() {
  }
  clickToOpen(){
    this.hasOpen = !this.hasOpen;
  }

}
