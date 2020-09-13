import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {

  options = [
    {
      amount: '60.000,00',
      partialAmount: '1.500,00',
      installmentAmount: 48,
      interest : 5
    },
    {
      amount: '65.000,00',
      partialAmount: '1.200,00',
      installmentAmount: 60,
      interest: 5
    },
    {
      amount: '70.000,00',
      partialAmount: '1.200,00',
      installmentAmount: 72,
      interest: 5
    }
  ];

  selectedOption = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  chooseOption(option): void {
    this.selectedOption = option;
  }

  next(): void {
    this.router.navigate(['/accept']);
  }
}

