import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers()
      .subscribe( data => {
        this.users = data;
        this.users.forEach(s => {
          s.boolEnabled = (s.enabled === '1');
        })
      });
  } 

  deleteUser(user: User){
    this.userService.deleteUser(user)
      .subscribe( data=> {
        this.users = this.users.filter( u => u!=user );
      });
  }

  eventDisable(user: User){
    user.enabled = user.boolEnabled? "1": "0";
    this.changeEnabling(user);
  }

  changeEnabling(user: User){
    this.userService.changeEnabling(user);
    /*this.userService.getUsers()
      .subscribe( data => {
        this.users = data;
      });*/
  }

}
