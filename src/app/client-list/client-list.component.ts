import { Component, OnInit } from '@angular/core';
import {Client} from '../Client';
import {ClientService} from '../client.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  constructor(private clientService : ClientService) { }
  public clients : any;

  ngOnInit() {
    console.log("HIII") ;
    this.clientService.getClientList().subscribe(data => {this.clients = data});
    console.log(this.clients);
  }

}
