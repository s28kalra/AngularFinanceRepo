import { Injectable } from '@angular/core';
import { StatisticsDate } from "../../models/statistics-date";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http: HttpClient) { }

  calculateStatistics(statisticsDate:StatisticsDate):Observable<any>{
    var url="http://localhost:8080/calculateStatistics";
    return this.http.post(url,statisticsDate);
  }
}
