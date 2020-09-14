import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAccepted, IChosseOption, IGetOption, IOptions, ITerms } from './financing.service.interfaces';

@Injectable({
  providedIn: 'root'
})
export class FinancingService {

  private accpetedPixSafra = false;

  constructor(private http: HttpClient) {
  }

  set accpetedPix(accpetedPix: boolean) {
    localStorage.setItem('accpeted_pix', JSON.stringify(accpetedPix));
    this.accpetedPixSafra = accpetedPix;
  }

  get accpetedPix(): boolean {
    return this.accpetedPixSafra || JSON.parse(localStorage.getItem('accpeted_pix'));
  }

  getOptions(getOptions: IGetOption): Observable<IOptions> {
    return this.post('safratsv/opc', getOptions);
  }

  getTerms(option: IChosseOption): Observable<ITerms> {
    return this.post('safratsv/terms', option);
  }

  sendAccept(option: IAccepted): Observable<any> {
    return this.post('safratsv/acp', option);
  }

  private post(route: string, entity: any): Observable<any> {
    return this.http.post<any>(`localhost:8080/${route}`, entity);
  }
}
