import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allowNewUser = false;
  userCreationStatus = '';

  // now two-way bound via ngModel
  userName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewUser = true;
    }, 2000);
  }

  ngOnInit() {
  }

  userNameIsEmpty() {
    return this.userName.length === 0;
  }

  clearUserName() {
    this.userName = '';
    this.userCreationStatus = '';
  }

  onCreateUser() {
    this.userCreationStatus = 'User ' + this.userName + ' was created';
  }

  onUpdateUserName(event: any) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

}
