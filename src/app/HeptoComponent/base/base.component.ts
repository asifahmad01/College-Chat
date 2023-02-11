import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'form-field-appearance-',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  url="./assets/logo2.png";
url1="./assets/group1.jpg";
url2="./assets/grup2.jpg";
url3="./assets/group3.jpg";

  gotoSignup(ui: string) {
    this.route.navigate(['signUp'], { state: {type: ui}});
  }
  gotoAccount(ui: string)
  {
    this.route.navigate(['Account'], { state: {type: ui}});
  }

}
