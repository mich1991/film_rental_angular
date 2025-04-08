import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import {
  ApexTheme,
  ChartComponent,
  ChartType,
  NgApexchartsModule,
} from 'ng-apexcharts';
import { map } from 'rxjs/operators';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule,
    MatListModule,
    NgApexchartsModule,
  ],
  providers: [HomeService],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('chart') chart!: ChartComponent;
  homeService = inject(HomeService);

  storesPerCountry$ = this.homeService.getStoresPerCountry().pipe(
    map((res) => ({
      series: res.data.map((item) => item.count),
      labels: res.data.map((item) => item.country),
      dataLabels: {
        enabled: false,
      },
      theme: {
        mode: 'dark',
      } as ApexTheme,
      xaxis: { categories: res.data.map((item) => item.country) },
      chart: {
        width: 380,
        type: 'polarArea' as ChartType,
      },
    }))
  );

  totalMoviesByCategory$ = this.homeService.getTotalMoviesByCategory().pipe(
    map((res) => ({
      series: [
        {
          name: 'Amount',
          data: res.data.map((item) => item.count),
        },
      ],
      theme: {
        mode: 'dark',
      } as ApexTheme,
      xaxis: { categories: res.data.map((item) => item.category_name) },
    }))
  );

  top3RentedMovies$ = this.homeService.getTop3RentedMovies().pipe(
    map((res) => ({
      series: [
        {
          name: 'Rented',
          data: res.data.map((item) => item.count),
        },
      ],
      theme: {
        mode: 'dark',
      } as ApexTheme,
      xaxis: { categories: res.data.map((item) => item.title) },
    }))
  );

  customersPerShop$ = this.homeService.getTotalCustomersPerShop().pipe(
    map((res) => ({
      series: res.data.map((item) => item.count),
      xaxis: { categories: res.data.map((item) => item.address) },
      chart: {
        width: 380,
        type: 'donut' as ChartType,
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270,
        },
      },
      labels: res.data.map((item) => item.address),
      dataLabels: {
        enabled: false,
      },
      fill: {
        type: 'gradient',
      },
      legend: {
        show: true,
        formatter: function (val: any, opts: any) {
          return val + ' - ' + opts.w.globals.series[opts.seriesIndex];
        },
      },
      theme: {
        mode: 'dark',
      } as ApexTheme,
    }))
  );

  chartOptions: any = {
    series: [
      {
        name: '',
        data: [],
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
        return opt.w.globals.labels[opt.dataPointIndex] + ':  ' + val;
      },
      dropShadow: {
        enabled: true,
      },
    },
    title: {
      text: '',
      align: 'middle',
    },
    xaxis: {
      categories: [],
    },
    legend: {
      show: true,
    },
    tooltip: {
      enabled: false,
    },
  };
}
