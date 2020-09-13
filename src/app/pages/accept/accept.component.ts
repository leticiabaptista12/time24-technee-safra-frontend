import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinancingService } from 'src/app/services/financing-service/financing.service';
import { UserService } from 'src/app/services/user-service/user.service';
import { IUser } from 'src/app/services/user-service/user.service.interfaces';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.scss']
})
export class AcceptComponent implements OnInit {

  user: IUser;
  accpetedTerms = false;
  acceptedPix = false;

  constructor(private router: Router, private userService: UserService, private financingService: FinancingService) { }

  ngOnInit(): void {
    this.user = this.userService.selectedUser;
  }

  accept(): void {
    this.financingService.accpetedPix = this.acceptedPix;
    this.router.navigate(['/success']);
  }
}
