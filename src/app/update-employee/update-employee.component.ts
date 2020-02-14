import { Component, OnInit } from '@angular/core';
import { Client } from 'app/Client';
import { ActivatedRoute, Router } from '@angular/router';
import {ClientService} from '../client.service'

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  id: number;
  client: Client;

  constructor(private route: ActivatedRoute,private router: Router, private clienService :ClientService) { }

  ngOnInit() {
  }

  updateEmployee() {}

  onSubmit() {
    this.updateEmployee();    
  }

  gotoList() {
    this.router.navigate(['/list']);
  }

}
