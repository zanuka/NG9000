import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = '';
  serverCreated = false;
  servers = ['JohnnyFive Server', 'TimmyTampton Server'];

  // now two-way bound via ngModel
  serverName = '';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server ' + this.serverName + ' was created';
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
