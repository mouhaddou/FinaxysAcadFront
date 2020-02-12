import { Component, OnInit } from '@angular/core';
import { ClientService } from '../client.service';  
import { Client } from '../client';  
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {FormControl,FormGroup,Validators} from '@angular/forms';  
@Component({
  selector: 'add-empl',
  templateUrl: './add-empl.component.html',
  styleUrls: ['./add-empl.component.css']
})
export class AddEmplComponent implements OnInit {

  constructor(private clientservice:ClientService) { }
  client : Client  = new Client();
  submitted = false; 

  ngOnInit() {
    this.submitted=false;  
  }
    clientsaveform=new FormGroup({  
    fullName:new FormControl('' , [Validators.required , Validators.minLength(15) ] ),  
    dateOfBirth:new FormControl('',[Validators.required,Validators.nullValidator]),  
    
  }); 
 saveClient(saveClient){  
    this.client=new Client();     
    this.client.fullName=this.fullName.value;  
    this.client.dateOfBirth=this.dateOfBirth.value;  
   
    this.submitted = true;  
    this.save();  
  }  
  
    
  
  save() {  
    this.clientservice.createClient(this.client)  
      .subscribe(data => console.log(data), error => console.log(error));  
    this.client = new Client();  
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
