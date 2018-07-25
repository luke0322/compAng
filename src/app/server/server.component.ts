import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No Server was created';
  serverName = 'Testserver';
  username = ''
  serverCreated = false;
  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000); // after 2 seconds this will change to enabled
   }

  ngOnInit() {
  }
  onReset(){
    this.username = ''
  }
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getServerStatus() {
    return this.serverStatus;
  }
}
