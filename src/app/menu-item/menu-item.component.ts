import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input()   menuItems: MenuModel[] = [
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




