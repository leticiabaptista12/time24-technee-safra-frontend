import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/services/user.service.interfaces';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: IUser[] = [
    {
      name: 'Usuário 1',
      description: 'Usuário sem cadastro no Safra e sem cadastro no Pix'
    },
    {
      name: 'Usuário 2',
      description: 'Usuário sem cadastro no Safra mas possui cadastro no Pix'
    },
    {
      name: 'Usuário 3',
      description: 'Usuário cadastrado no Safra mas não possui cadastro no Pix'
    },
    {
      name: 'Usuário 4',
      description: 'Usuário cadastrado no Safra e no Pix'
    },
  ];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  chooseUser(user: IUser): void {
    this.userService.selectedUser = user;
    this.router.navigate(['product']);
  }

}
