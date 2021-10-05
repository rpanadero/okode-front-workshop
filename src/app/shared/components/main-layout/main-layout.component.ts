import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  @Input()
  sectionTitle?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
