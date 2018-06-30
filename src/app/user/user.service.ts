import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private userUrl = '/api';

  public getUsers(){
    return this.http.get<User[]>(this.userUrl);
  }

  public getUser(userId){
    return this.http.get<User>(this.userUrl + '/' + userId);
  }

  public deleteUser(user){
    return this.http.delete(this.userUrl + '/' + user.id);
  }

  public createUser(user){
    return this.http.post<User>(this.userUrl + '/', user);
  }

  public changeEnabling(user){
    
    var resp = this.http.put<User>(this.userUrl + "/enabling", user);

    resp.subscribe(
      d => {
        console.log("After id " + d.id + ", " + "enabled s: "  + d.enabled);
      }
    );
    
    return resp;
  }

}
