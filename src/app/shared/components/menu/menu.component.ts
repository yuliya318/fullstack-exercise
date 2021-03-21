import { Component, Input } from '@angular/core';

@Component({
  selector: 'fe-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() menuName: string;

  constructor() { }
}
