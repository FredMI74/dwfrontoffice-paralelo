import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import {AuthService } from '@app/share/api.services';

@Component({
  selector: 'dw-page-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
 
  loginForm: FormGroup;
  submitted = false;

  constructor(private router: Router,
              private authService: AuthService ) {
      this.loginForm = new FormGroup({
        email: new FormControl(''),
        password: new FormControl(''),
      });
      
     }

  ngOnInit() : void {
    
   }

  onSubmit() {
    this.authService.login(this.loginForm.get('email')?.value, this.loginForm.get('password')?.value)
    .subscribe( (response) => {
            console.log(response);
            this.router.navigateByUrl('/');
        }
    );
  }
  
}
