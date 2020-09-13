import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FinancingService {

  private accpetedPixSafra = false;

  constructor() {
  }

  set accpetedPix(accpetedPix: boolean) {
    localStorage.setItem('accpeted_pix', JSON.stringify(accpetedPix));
    this.accpetedPixSafra = accpetedPix;
  }

  get accpetedPix(): boolean {
    return this.accpetedPixSafra || JSON.parse(localStorage.getItem('accpeted_pix'));
  }
}
