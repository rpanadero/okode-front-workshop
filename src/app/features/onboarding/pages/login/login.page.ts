import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/core/services/helpers/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {

  email?: string;
  password?: string;

  private redirect?: string;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.redirect = params.redirect;
    });
  }

  onLogin() {
    if (!this.email || !this.password) { return; }
    this.loginService.login$(this.email, this.password).subscribe(() => {
      this.navToPrivateArea();
    }, err => {
      // TODO: show alert
    });
  }

  private navToPrivateArea() {
    if (this.redirect) {
      this.router.navigateByUrl(this.redirect).catch(() => {
        this.navToHome();
      });
    } else {
      this.navToHome();
    }
  }

  private navToHome() {
    this.router.navigateByUrl('/home');
  }

}
