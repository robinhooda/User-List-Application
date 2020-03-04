import { Component } from '@angular/core';
import userList from './userList.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'User-List-App';
  public userDataList:{firstName:string, lastName:string, employeeID:number, role:string}[] = userList;
}
