import { Component } from '@angular/core';
import {min} from 'rxjs/operators';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html'
})
export class ServerComponent {
  // generate some random server numbers
  min = Math.ceil(100);
  max = Math.floor(500);
  serverId: number = Math.floor(Math.random() * (this.max - this.min)) + this.min;
  serverStatus: string = 'offline';

  constructor() {
    // randomly set server status for now
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline'
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';

  }
}
