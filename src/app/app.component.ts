import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  width!: string;
  height!: string;

  constructor() {
    this.width = '240';
    this.height = '160';
  }
}
