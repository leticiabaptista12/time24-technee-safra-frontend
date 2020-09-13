import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FinancingService } from 'src/app/services/financing-service/financing.service';
import { UserService } from 'src/app/services/user-service/user.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.scss']
})
export class SuccessComponent implements OnInit {

  acceptedPix = false;

  constructor(private financingService: FinancingService, private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.acceptedPix = this.financingService.accpetedPix;
  }

  backToHome(): void {
    this.userService.selectedUser = null;
    this.router.navigate(['/']);
  }

}
