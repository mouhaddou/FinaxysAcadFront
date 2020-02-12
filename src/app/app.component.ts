import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {ClientService} from './client.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ClientService]
 
})
export class AppComponent {
  title = 'app works!';
}
