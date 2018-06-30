import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from '../user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  user: User = new User();
  defaultDate: string;

  constructor(private router: ActivatedRoute, private userService:UserService) { 
    this.defaultDate = this.toDateString(new Date());

    this.router.params.subscribe( params => {
      if( params.id ){
        this.user.id = params.id;        
      }

    });
    console.log(this.user.id);
  }

  ngOnInit() {
    if( this.user.id ){
      this.userService.getUser(this.user.id)
      .subscribe(
        data => {
          this.user = data;
          console.log(this.user.datetime);
          this.defaultDate = this.toDateString(new Date(this.user.datetime.replace(' ','T')));
          //this.defaultDate = moment("06/06/2015 11:11:11").format('DD-MMM-YYYY');
        }
      );
    }
    
  }

  createUser(): void{
    this.user.datetime = this.formatDateString(this.defaultDate);
    this.userService.createUser(this.user)
      .subscribe( data => {
        alert("User create successfully.");
      } );
  }

  private toDateString(date: Date): string {
    var strdate = (date.getFullYear().toString() + '-' 
    + ("0" + (date.getMonth() + 1)).slice(-2) + '-' 
    + ("0" + (date.getDate())).slice(-2))
    + 'T' + date.toTimeString().slice(0,5);
 
    return strdate;
  }

  private formatDateString(firstDate: string): string{
    var str = firstDate.replace('T', ' ');
    var d = new Date(str);

    str = [ d.getFullYear(),
            ("0" + (d.getMonth() + 1)).slice(-2),
            ("0" + d.getDate()).slice(-2)            
    ].join('-')+
      ' ' +
    [ ("0" + d.getHours()).slice(-2),
      ("0" + d.getMinutes()).slice(-2),
      ("0" + d.getSeconds()).slice(-2)].join(':');

    return str;
  }

  private onDateChange(value: string): void {
    console.log(value);  
    
  }

}
