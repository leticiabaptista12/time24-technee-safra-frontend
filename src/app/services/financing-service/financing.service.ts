import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHelper } from '../http.helper';

@Injectable({
  providedIn: 'root'
})
export class FinancingService {

  constructor(private http: HttpClient) {
  }
}
