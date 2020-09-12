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
    this.activeUser = user;
    this.userEmiter.emit(user);
  }

  get selectedUser(): IUser {
    return this.activeUser;
  }
}
