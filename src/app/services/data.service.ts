import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Store } from "@ngrx/store";

import * as DataActions from "../actions/data.actions";
// import { AppState, getAllUsers, getDataState } from "../reducers/data.reducers";
import { getAllUsers, getDataState } from "../reducers/data.reducers";

@Injectable({
  providedIn: "root"
})
export class DataService {
  constructor(private store: Store<AppState>, private http: HttpClient) {}

  loadData() {
    return this.http.get("/assets/test-data.json");
  }

  load() {
    this.store.dispatch(new DataActions.LoadDataBegin());
  }

  getData() {
    return this.store.select(getDataState);
  }

  getUsers() {
    return this.store.select(getAllUsers);
  }
}
