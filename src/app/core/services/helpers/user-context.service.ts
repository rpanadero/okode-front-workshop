import { Injectable } from '@angular/core';
import { UserProfile } from '../../models/user-profile.model';

@Injectable({
  providedIn: 'root'
})
export class UserContextService {

  private profile?: UserProfile;

  constructor() { }

  getProfile() { return this.profile; };
  setProfile(profile: UserProfile) { this.profile = profile; }

}
