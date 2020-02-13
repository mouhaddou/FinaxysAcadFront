import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';  
import { Client } from '../client';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
@Component({
  selector: 'add-empl',
  templateUrl: './add-empl.component.html',
  styleUrls: ['./add-empl.component.css']
})
export class AddEmplComponent implements OnInit {

  constructor(private clientservice:ClientService,
              private formBuilder: FormBuilder) {
                this.clientsaveform = this.formBuilder.group({
      fullName: '',
      dateOfBirth: ''
    });
               }
  client : Client  = new Client();
  submitted = false; 

  ngOnInit() {
    this.submitted=false;  
  }
    clientsaveform=new FormGroup({  
    fullName:new FormControl(''),  
    dateOfBirth:new FormControl(''),  
    
  }); 
 saveCli(clientsaveform){  
    this.client=new Client();   

    this.client.fullName=clientsaveform.fullName;  
    this.client.dateOfBirth=clientsaveform.dateOfBirth;  
    console.log("save is here", clientsaveform);
    this.submitted = true;  
    this.save(this.client);  
  }  
  
    
  
  save(client) {  
    this.clientservice.createClient(client)  
      .subscribe(data => console.log(data), error => console.log(error));  
   // this.client = new Client();  
  }  
  
  get fullName(){  
    return this.fullName.get('fullName');  
  }  
  
  get dateOfBirth(){  
    return this.dateOfBirth.get('dateOfBirth');  
  }  
  
 
  
  addClientForm(){  
    this.submitted=false;  
    this.clientsaveform.reset();  
  }  
}
