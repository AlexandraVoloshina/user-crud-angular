import { Component, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent {

  @Input() user: User; 

  constructor() { }

  today: number = Date.now();
  public hide: boolean = false;



}