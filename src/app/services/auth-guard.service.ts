import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private firebaseAuth: AngularFireAuth,
    private router: Router
  ) { }

  public canActivate(): Observable<boolean> {
    return this.firebaseAuth.authState.pipe(
      map((user) => {
        if (user) {
          return true;
        } else {
          this.router.navigate(['login']);
          return false;
        }
      },
      ),
      first(),
    );
  }

}
