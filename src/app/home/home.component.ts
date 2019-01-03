import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPresent, AuthService, IPresentInput, IPresentID } from '../services/auth.service';
import { PresentService } from '../services/present.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  presents: Observable<IPresent[]>;
  user;
  isLoggedIn: boolean;
  // displayName: string;

  constructor(
    private authService: AuthService,
    private presentService: PresentService
  ) { 
    this.user = this.authService.user;
    this.presents = this.authService.presents;
    this.isLoggedIn = this.authService.isLoggedIn;
    // this.displayName = this.authService.user.displayName;
  }

  logout() {
    this.authService.logout();
  }

  addData(data: IPresentInput) {
    this.presentService.addData(data)
      .then(() => console.log(data + " added to firebase"))
      .catch((error) => console.log("There was an error adding to firebase: " + error));
  }

  deletePresent(docID: string) {
    this.presentService.deletePresent(docID);
  }

  showHideUpdateForm(present: IPresentID) {
    this.presentService.showHideUpdateForm(present.id, present.hideEdit)
      .then(() => console.log("Update form successfully shown/hidden"))
      .catch((error) => console.log("There was an error showing/hiding the update form: " + error));
  }
  
  updateData(data: IPresentInput, present: IPresentID) {
    this.presentService.updateData(data, present.id)
      .then(() => this.presentService.showHideUpdateForm(present.id, present.hideEdit))
      .catch((error) => console.log("There was an error updating the present: " + error));
  }

  ngOnInit() {
  }

}
