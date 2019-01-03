import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { IPresent } from '../services/present.service';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.css']
})
export class LettersComponent implements OnInit {
  presents: Observable<IPresent[]>;

  constructor(private authService: AuthService) {
    this.presents = this.authService.presents;
  }

  ngOnInit() {
  }

}
