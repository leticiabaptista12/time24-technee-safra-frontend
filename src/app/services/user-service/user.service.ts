import { EventEmitter, Injectable } from '@angular/core';
import { IUser } from './user.service.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private activeUser: IUser;
  userEmiter: EventEmitter<IUser> = new EventEmitter();

  constructor() { }

  set selectedUser(user: IUser) {
    localStorage.setItem('selected_user', JSON.stringify(user));
    this.activeUser = user;
    this.userEmiter.emit(user);
  }

  get selectedUser(): IUser {
    return this.activeUser || JSON.parse(localStorage.getItem('selected_user'));
  }
}
