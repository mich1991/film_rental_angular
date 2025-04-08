import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { ApiResponse } from '../models/ApiResponse';

interface IActor {
  first_name: string;
  last_name: string;
  last_update: Date;
}

interface ITotalMoviesByCategory {
  category_name: string;
  count: number;
}

interface ITopRented {
  title: string;
  count: number;
}

interface ITotalCustomersPerShop {
  count: number;
  address: string;
}

interface IStoresPerCountry {
  count: number;
  country: string;
}

@Injectable({
  providedIn: 'root',
  useFactory: HttpClient,
})
export class HomeService {
  private readonly http: HttpClient = inject(HttpClient);

  getActors(): Observable<ApiResponse<IActor[]>> {
    return this.http.get<ApiResponse<IActor[]>>(environment.api + '/actors');
  }

  getTotalMoviesByCategory(): Observable<
    ApiResponse<ITotalMoviesByCategory[]>
  > {
    return this.http.get<ApiResponse<ITotalMoviesByCategory[]>>(
      environment.api + '/movies/total_by_category'
    );
  }

  getTop3RentedMovies(): Observable<ApiResponse<ITopRented[]>> {
    return this.http.get<ApiResponse<ITopRented[]>>(
      environment.api + '/movies/top_3_rented'
    );
  }

  getStoresPerCountry(): Observable<ApiResponse<IStoresPerCountry[]>> {
    return this.http.get<ApiResponse<IStoresPerCountry[]>>(
      environment.api + '/stores/stores_per_country'
    );
  }

  getTotalCustomersPerShop(): Observable<
    ApiResponse<ITotalCustomersPerShop[]>
  > {
    return this.http.get<ApiResponse<ITotalCustomersPerShop[]>>(
      environment.api + '/customers/total_per_shop'
    );
  }

  getActorsById(id: number): Observable<ApiResponse<IActor>> {
    return this.http.get<ApiResponse<IActor>>(
      environment.api + '/actors/' + id
    );
  }
}
