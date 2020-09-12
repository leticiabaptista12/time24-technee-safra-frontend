import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';
import { IUser } from './services/user.service.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  user: IUser;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.userService.selectedUser;
    this.userService.userEmiter.subscribe(user => this.user = user);
  }

  changeUser(): void {
    this.userService.selectedUser = null;
    this.router.navigate(['']);
  }

}
