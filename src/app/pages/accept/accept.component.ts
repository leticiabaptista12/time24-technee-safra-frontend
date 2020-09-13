import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/services/user.service.interfaces';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.scss']
})
export class AcceptComponent implements OnInit {

  user: IUser;
  accpetedTerms = false;
  acceptedPix = false;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.user = this.userService.selectedUser;
  }

  accept(): void {
    this.router.navigate(['/success']);
  }

}
