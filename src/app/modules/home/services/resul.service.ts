import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FinancialData } from 'src/app/core/models/financial-data.model';

@Injectable({
  providedIn: 'root'
})
export class ResulService {
  [x: string]: any;
  private apiUrl = 'http://localhost:3000/api/result/generate';

  constructor(private http: HttpClient) {}

  getFinancialData(): Observable<FinancialData> {
    return this.http.get<FinancialData>(this.apiUrl);
  }
}
