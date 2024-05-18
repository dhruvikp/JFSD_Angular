import { Component, OnDestroy, OnInit } from '@angular/core';
import { ServersService } from '../servers.service';

@Component({
  selector: 'app-servers-list',
  templateUrl: './servers-list.component.html',
  styleUrl: './servers-list.component.css'
})
export class ServersListComponent implements OnInit {

  

  constructor(private serversService: ServersService) { }

  ngOnInit(): void {
    this.servers = this.serversService.getServers()
  }

  getColor(status: string) {
    return status === 'Online' ? 'green': 'red'
  }

  public servers: { id: number, name: string, status: string }[] = []

}
