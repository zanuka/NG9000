import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent {
  userId: number = 1;
  userStatus: string = 'logged in';

  getUserStatus() {
    return this.userStatus;
  }
}
