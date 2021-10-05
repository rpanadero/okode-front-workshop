import { Component, OnInit } from '@angular/core';
import { UserContextService } from 'src/app/core/services/helpers/user-context.service';

@Component({
  selector: 'home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  userName?: string;

  constructor(
    private userContext: UserContextService
  ) { }

  ngOnInit() {
    this.userName = this.userContext.getProfile()?.name;
  }

}
