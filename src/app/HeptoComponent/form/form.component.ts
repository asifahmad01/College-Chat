import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });
  formType = '';
  form: FormGroup = new FormGroup({});

  newText = 'No text add yet';

 onAddText() {
  this.newText = 'Added text';
 }


  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation()?.extras.state?.type);
    this.formType = this.router.getCurrentNavigation()?.extras.state?.type;

    if(this.formType=='already') {
      this.loginForm = new FormGroup({
        email: new FormControl(),
        password: new FormControl()
      })
    } else {
      this.loginForm = new FormGroup({
        username: new FormControl(),
        email: new FormControl(),
        password: new FormControl(),
        confpass: new FormControl()
      })
    }



  }

  ngOnInit(): void {
  }

  submitForm(type: string) {
    console.log(type);
    console.log(this.loginForm.value);

  }

  onSubmit(): void{

    console.log(this.loginForm.value);

  }

}
