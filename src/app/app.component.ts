import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { IUser } from './services/user.service.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  user: IUser;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.userEmiter.subscribe(user => this.user = user);
  }

}
