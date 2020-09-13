import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  images = [
    { url: '/assets/product/imagem (1).jpg' },
    { url: '/assets/product/imagem (2).jpg' },
    { url: '/assets/product/imagem (3).jpg' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
