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
      name: 'Anthony Luz',
      description: 'Não é cliente e não é cadastrado no PIX',
      clientSafra: false,
      clientSafraPix: false,
      clientPix: false
    },
    {
      name: 'Leticia Baptista',
      description: 'Não é cliente mas é cadastrado no PIX',
      clientSafra: false,
      clientSafraPix: false,
      clientPix: true
    },
    {
      name: 'Lucas Calzavara',
      description: 'Cliente Safra não cadastrado no PIX',
      clientSafra: true,
      clientSafraPix: false,
      clientPix: false
    },
    {
      name: 'Vitor Meireles',
      description: 'Cliente Safra cadastro no PIX por outro banco',
      clientSafra: true,
      clientSafraPix: false,
      clientPix: true
    },
    {
      name: 'Wesley de Abreu',
      description: 'Cliente Safra cadastrado no PIX',
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
