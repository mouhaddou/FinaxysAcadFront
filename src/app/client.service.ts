import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  



@Injectable()
export class ClientService {
private baseUrl = 'http://localhost:8080/';  
s: string = "Hello2";
  constructor(private http:HttpClient) { }

getClientList(): Observable<Object> {  
  console.log(this.s) ;
    return this.http.get(`${this.baseUrl}`+'list');  
    
  }
    createClient(client: object): Observable<object> {  
      console.log("createClient is here",client);
    return this.http.post(`${this.baseUrl}`+'createEmpl', client);  
  }   
  deleteClient(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}'deleteEmpl/${id}`, { responseType: 'text' });  
  }
}
