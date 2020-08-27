import { Component, OnInit } from '@angular/core';
import { StatisticsService } from "src/app/services/adminServices/statistics.service";
import { StatisticsDate } from "src/app/models/statistics-date";
import { Statistics } from "src/app/models/statistics";
@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  statisticsDate= new StatisticsDate();
  statistics= new Statistics();
  selected="30";
  invalidInputs="";
  valueReterieved=false;
  showSpinner=false;
  constructor(private statisticsService: StatisticsService) { }
 
  ngOnInit(): void {
  }

  calculateStatistics(){
    this.showSpinner=true;
    if(this.selected!="custom"){
      this.statisticsDate.to=new Date();
      this.statisticsDate.from= new Date();
      this.statisticsDate.from.setDate(this.statisticsDate.from.getDate()-parseInt(this.selected));
    }
    else{
      if(this.statisticsDate.from > this.statisticsDate.to){
        this.invalidInputs="Invalid Dates Choosen";
        this.valueReterieved=false;
        return 0;
      }
    }
    this.invalidInputs="";
     this.statisticsService.calculateStatistics(this.statisticsDate).subscribe(
       data=>{
         this.statistics= data;
         this.valueReterieved=true;
         this.showSpinner=false;
       }
     )
  }

}
