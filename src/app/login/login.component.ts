import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginError: Error;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  login(details: {email: string, password: string}) {
    this.authService.login(details.email, details.password)
      .then(() => this.router.navigate(['']))
      .catch((error) => {
        console.log('There was an error logging in: ' + error);
        this.loginError = error;
      });
  }

  ngOnInit() {
  }

}
