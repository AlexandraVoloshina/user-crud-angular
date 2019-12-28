import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from './user';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  users: User[]; 
  selectedUser: User;
  subscription: Subscription;
  hide: boolean = true;

  name: string = ''
  surname: string = ''
  dateBirthday: Date
  phone: number
  eMail: string = ""

  constructor (private userService: UserService) { 

  }

  getUsers(): void {
  
    this.subscription = this.userService.getUsers()
      .subscribe(result => {
        this.users = result;
        //console.log(this.users); 
      });
    //console.log(this.users); 
  }


  selectUser(user: User): void { 
    this.selectedUser = user;
    this.hide = !this.hide;
  }
  //delete user
  removeUser(user: User): void{
    this.users = this.users.filter(t => t !== user);
  }

  
  addUser() {
    const user: User = {
        id: Date.now(),
        name: this.name,
        surname: this.surname,
        dateBirthday: this.dateBirthday,
        phone: this.phone,
        eMail: this.eMail,
        date: new Date()
    }
    this.users.push(user);
    this.name = ''
    this.surname = ''
    this.eMail = ''
    this.dateBirthday = undefined
    this.phone = undefined
}

  ngOnInit() {
    this.getUsers();
  }

}