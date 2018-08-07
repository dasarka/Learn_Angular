import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {


  constructor(private route: ActivatedRoute, private router:  Router) { }

  ngOnInit() {
    this.route.paramMap
      .subscribe(params=>{
        let userid= params.get('userid');
        console.log(userid);
      });
  }

  submit(){
    this.router.navigate(['/followers']);
  }

}
