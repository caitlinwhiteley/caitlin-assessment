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

  register(details: {name: string, email: string, password: string, confirmPassword: string}) {
    console.log("hi");
    this.authService.register(details.email, details.password)
      .then(() => {
        this.authService.setName(details.name);
        this.router.navigate(['']);
      })
      .catch((error) => console.log("There was an error registering: " + error));
  }

  ngOnInit() {
  }

}
