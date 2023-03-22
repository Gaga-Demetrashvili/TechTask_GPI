import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', './app.component.scss'],
})
export class AppComponent implements OnInit {
  numbers = [
    {
      isSelected: true,
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
      isSelected: false,
    },
  ];
  meOrOther: 'forMe' | 'forOther' = 'forMe';
  data = [
    {
      isSelected: false,
      name: 'ბიძინა თაბაგარი',
      policyNum: 'OPPMED 5023234123',
    },
    {
      isSelected: false,
      name: 'ლექსო ნიჟარაძე',
      policyNum: 'OPPMED 5023234123',
    },
    {
      isSelected: false,
      name: 'უჩა ზერაგია',
      policyNum: 'OPPMED 5023234123',
    },
  ];
  title = 'GPI';
  changeStyles(index: number) {
    this.data.map((obj: any) => (obj.isSelected = false));
    this.data[index].isSelected = true;
  }

  ngOnInit(): void {
    this.meOrOther = 'forMe';
  }
}
