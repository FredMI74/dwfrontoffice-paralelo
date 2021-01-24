import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'dw-page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 
  loginForm: FormGroup;
  submitted = false;

  constructor(private router: Router) {
      this.loginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
      });
      
     }

  ngOnInit() : void {
    
   }

  onSubmit() {
    this.router.navigate(['/']);
  }

}
