import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header', // to moge wyswietlic uzywajac <app-header></app-header>
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'Task tracker'; // to moge wyswietlic uzywajac     <h1>{{ title }}</h1>

  constructor() { }

  ngOnInit(): void {
  }

}
