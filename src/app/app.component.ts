import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import userList from './userList.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  store: any;
  title = 'User-List-App';
  userDataList: any;
  //   public userDataList:{firstName:string, lastName:string, employeeID:number, role:string}[] = userList;
  ngOnInit() {
    this.userDataList = this.store.users;
  }
//   ngOnDestroy(){
//   this.userDataList = "";
//   }userDataList
}
