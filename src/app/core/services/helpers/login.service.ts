import { Injectable } from '@angular/core';
import { AuthHttpService } from '../http/auth-http.service';
import { tap } from 'rxjs/operators';
import { UserContextService } from './user-context.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private authHttp: AuthHttpService,
    private userContext: UserContextService
  ) { }

  login$(email: string, password: string) {
    return this.authHttp.login$(email, password).pipe(
      tap(profile => {
        this.userContext.setProfile(profile);
      })
    );
  }

}
