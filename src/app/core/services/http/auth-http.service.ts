import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { UserProfile } from "../../models/user-profile.model";

@Injectable({
  providedIn: "root",
})
export class AuthHttpService {
  constructor() {}

  login$(email: string, password: string) {
    return of<UserProfile>({
      email,
      name: 'Okode',
      lastname: 'Developers',
      birthdate: '1992-09-03'
    });
  }
}
