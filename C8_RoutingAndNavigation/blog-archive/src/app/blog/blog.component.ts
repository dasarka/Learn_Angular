import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  year;
  month;
  constructor(private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let params= this.route.snapshot.paramMap;
    this.year=params.get('year');
    this.month=params.get('month');
  }

  backToPrevious(){
    this.router.navigate(['']);
  }
}
