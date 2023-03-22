import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  firstSeeAll: boolean = false;
  secondSeeAll: boolean = false;
  numbers = [
    {
      isSelected: false,
    },
    {
      isSelected: false,
    },
    {
      isSelected: false,
    },
    {
      isSelected: false,
    },
    {
      isSelected: true,
    },
  ];
  title = 'GPI';
}
