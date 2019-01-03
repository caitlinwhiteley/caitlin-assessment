import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

export interface IPresentInput {
  picture: string,
  rating: number,  
  whatItWas: string,
  whoFrom: string,
  whoTo: string
}

export interface IPresent extends IPresentInput {
  dateOpened: Date,
  hideEdit: boolean,
  thanked: boolean,
  userID: string
}

export interface IPresentID extends IPresent {
  id: string
}

@Injectable({
  providedIn: 'root'
})
export class PresentService {

  constructor(private authService: AuthService) { }

  addData(data: IPresentInput) {
    const newPresent: IPresent = {
      dateOpened: new Date(),
      picture: data.picture,
      rating: data.rating,
      hideEdit: true,
      thanked: false,
      userID: this.authService.user.uid,
      whatItWas: data.whatItWas,
      whoFrom: data.whoFrom,
      whoTo: data.whoTo
    }
    return this.authService.presentsCollection.add(newPresent);
  }

  deletePresent(docID: string) {
    this.authService.presentsCollection.doc(docID).delete();
  }

  showHideUpdateForm(docID: string, hideEdit: boolean) {
    hideEdit = !hideEdit;
    return this.authService.presentsCollection.doc(docID).update({
      hideEdit: hideEdit
    });
  }

  updateData(data: IPresentInput, docID: string) {
    const editPresent: IPresentInput = {
      picture: data.picture,
      rating: data.rating,
      whatItWas: data.whatItWas,
      whoFrom: data.whoFrom,
      whoTo: data.whoTo
    }
    return this.authService.presentsCollection.doc(docID).update(editPresent);
  }

  updateThanked(thanked: boolean, docID: string) {
    return this.authService.presentsCollection.doc(docID).update({
      thanked: thanked
    });
  }

}
