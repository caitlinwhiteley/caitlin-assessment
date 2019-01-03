import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IPresent, AuthService, IPresentInput } from '../services/auth.service';
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
    this.authService.logout;
  }

  addData(data: IPresentInput) {
    this.presentService.addData(data)
      .then(() => console.log(data + " added to firebase"))
      .catch((error) => console.log("There was an error adding to firebase: " + error));
  }

  deletePresent(docID: string) {
    this.presentService.deletePresent(docID);
  }

  showHideUpdateForm(data) {
    this.presentService.showHideUpdateForm(data.id, data.hideEdit);
  }
  
  updateData(data: IPresentInput, docID: string) {
    this.presentService.updateData(data, docID);
  }

  ngOnInit() {
  }

}
