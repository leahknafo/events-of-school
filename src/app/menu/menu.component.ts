import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menuItems: MenuModel[] = [
    {
      name: 'home'
    },
    {
      name: 'about'
    },
    {
      name: 'contact'
    },
];

  constructor() { }

  ngOnInit() {
   
  }

}
export class MenuModel {
  name: string;
}

