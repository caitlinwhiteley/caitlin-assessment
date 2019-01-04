import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-forgotten-password',
  templateUrl: './forgotten-password.component.html',
  styleUrls: ['./forgotten-password.component.css']
})
export class ForgottenPasswordComponent implements OnInit {
  hideMessage: boolean = true;

  constructor(private authService: AuthService) {}

  resetPassword(data: {email: string}) {
    console.log(data.email)
    this.authService.resetPassword(data.email)
      .then(() => {
        this.hideMessage = false;
        console.log("Email reset sent");
      })
      .catch((error) => console.log("Error resetting password: " + error));
  }

  ngOnInit() {
  }

}
