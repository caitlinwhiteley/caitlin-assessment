import { Injectable } from '@angular/core';
import { AuthService, IPresent, IPresentInput } from './auth.service';

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
    console.log("hi")
    const editPresent = {
      picture: data.picture,
      rating: data.rating,
      hideEdit: true,
      whatItWas: data.whatItWas,
      whoFrom: data.whoFrom,
      whoTo: data.whoTo
    }
    return this.authService.presentsCollection.doc(docID).update(editPresent);
  }

}
