import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  register(details: {email: string, password: string}) {
    this.authService.register(details.email, details.password)
      .then(() => this.router.navigate(['']))
      .catch((error) => console.log("There was an error registering: " + error));
  }

  ngOnInit() {
  }

}
