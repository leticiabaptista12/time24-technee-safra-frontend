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
      amount: '300.000,00',
      partialAmount: '8.000,00',
      installmentAmount: 48,
      interest : 5
    },
    {
      amount: '310.000,00',
      partialAmount: '3.500,00',
      installmentAmount: 120,
      interest: 5
    },
    {
      amount: '290.000,00',
      partialAmount: '2.000,00',
      installmentAmount: 300,
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

