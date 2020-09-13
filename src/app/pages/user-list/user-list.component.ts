import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user-service/user.service';
import { IUser } from 'src/app/services/user-service/user.service.interfaces';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: IUser[] = [
    {
      name: 'Usuário 1',
      description: 'Usuário sem cadastro no Safra e sem cadastro no Pix',
      clientSafra: false,
      clientSafraPix: false,
      clientPix: false
    },
    {
      name: 'Usuário 2',
      description: 'Usuário sem cadastro no Safra mas possui cadastro no Pix',
      clientSafra: false,
      clientSafraPix: false,
      clientPix: true
    },
    {
      name: 'Usuário 3',
      description: 'Usuário cadastrado no Safra mas não possui cadastro no Pix',
      clientSafra: true,
      clientSafraPix: false,
      clientPix: false
    },
    {
      name: 'Usuário 4',
      description: 'Usuário cadastrado no Safra e cadastrado no Pix de outro banco',
      clientSafra: true,
      clientSafraPix: false,
      clientPix: true
    },
    {
      name: 'Usuário 5',
      description: 'Usuário cadastrado no Safra e no Pix',
      clientSafra: true,
      clientSafraPix: true,
      clientPix: true
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
