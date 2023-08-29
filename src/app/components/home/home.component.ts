import {Component, inject, OnInit, ViewChild} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatCardModule} from "@angular/material/card";
import {HomeService} from "../../services/home.service";
import {HttpClientModule} from "@angular/common/http";
import {MatListModule} from "@angular/material/list";
import {ChartComponent, NgApexchartsModule} from "ng-apexcharts";
import {ChartOptions} from "../../models/charts";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatCardModule, HttpClientModule, MatListModule, NgApexchartsModule],
  providers: [HomeService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @ViewChild("chart") chart!: ChartComponent;
  homeService = inject(HomeService);
  actors$ = this.homeService.getActors()
  totalMoviesByCategory$ = this.homeService.getTotalMoviesByCategory()
    .pipe(
      map(res => ({
        series: [{
          name: 'Amount',
          data: res.data.map(item => item.count)
        }],
        xaxis: {categories: res.data.map(item => item.category_name)}
      })),
    );
  top3RentedMovies$ = this.homeService.getTop3RentedMovies()
    .pipe(map(res => ({
      series: [{
        name: 'Rented',
        data: res.data.map(item => item.count)
      }],
      xaxis: {categories: res.data.map(item => item.title)}
    })))

  options: any = {
    series: [
      {
        name: "Funnel Series",
        data: [1380, 1100, 990, 880, 740, 548, 330, 200],
      },
    ],
    chart: {
      type: 'bar',
      height: 350,
    },
    plotOptions: {
      bar: {
        borderRadius: 0,
        horizontal: true,
        barHeight: '80%',
        isFunnel: true,
      },
    },
    dataLabels: {
      enabled: true,
      formatter: function (val: any, opt: any) {
        return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val
      },
      dropShadow: {
        enabled: true,
      },
    },
    title: {
      text: 'Recruitment Funnel',
      align: 'middle',
    },
    xaxis: {
      categories: [
        'Sourced',
        'Screened',
        'Assessed',
        'HR Interview',
        'Technical',
        'Verify',
        'Offered',
        'Hired',
      ],
    },
    legend: {
      show: true,
    },
    tooltip: {
      enabled: false
    }
  };

  ngOnInit() {
  }
}
