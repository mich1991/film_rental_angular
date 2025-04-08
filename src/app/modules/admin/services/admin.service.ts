import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CreateForm } from '../models/create-form';
import { BASE_URL, NET_API, Route } from 'src/app/config/config';
import { Customer } from 'src/app/models/Customer';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  http = inject(HttpClient);

  constructor() {}

  createNewUser(form: CreateForm): Observable<any> {
    return this.http.post(environment.api + '/customers', form);
  }

  getActorFilmsInCategory(params: {
    actorId: number;
    categoryId: number;
  }): Observable<any> {
    return this.http.get(
      BASE_URL +
        Route.Actors +
        `/actor-film-in-category/${params.actorId}/${params.categoryId}`
    );
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(NET_API.customers.getAll);
  }
}
