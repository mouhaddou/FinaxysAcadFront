import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';  


@Injectable()
export class ClientService {
private baseUrl = 'http://localhost:8080/';  
  constructor(private http:HttpClient) { }

getClientList(): Observable<any> {  
    return this.http.get(`${this.baseUrl}`+'list');  
  }
    createClient(client: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'createEmpl', client);  
  }   
  deleteClient(id: number): Observable<any> {  
    return this.http.delete(`${this.baseUrl}/deleteEmpl/${id}`, { responseType: 'text' });  
  }
}
