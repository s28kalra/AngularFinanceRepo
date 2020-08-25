import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivateEmiCardService {

  constructor(private http: HttpClient) { }

  activateEmiCard(customerId): Observable<any> {
    var url = "http://localhost:8080/activateEmiCard";
    return this.http.post(url, customerId);
  }
}
