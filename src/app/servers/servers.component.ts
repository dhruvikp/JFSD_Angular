import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';

@Component({
  // selector: 'app-servers', // select by HTML element
  //  selector: '[app-servers]' , // selected by Div
  selector: '.app-servers' , // selected by Div
   templateUrl: './servers.component.html',
 // template: '<h1> Hello simplilearn!  This is from servers<h1>',
  styleUrl: './servers.component.css'
  // styles: [`
  // `]
})
export class ServersComponent implements OnInit {

  serverId = ''
  serverStatus = ''
  serverName = ''
  serverCreated = false
  allowNewServer = false;

  public servers: {id: number, name:string, status:string}[] = [];

  constructor(private serversService: ServersService) {
    setTimeout(() => {this.allowNewServer=true}, 2000);
  }

  ngOnInit(): void {
      this.servers = this.serversService.getServers()
  }

  onCreateServer() {
    this.serverCreated = true

    this.serversService.getServers().push(
      {
        id: Number(this.serverId),
        name: this.serverName,
        status: this.serverStatus
      }
    )

    
  }


  



}
