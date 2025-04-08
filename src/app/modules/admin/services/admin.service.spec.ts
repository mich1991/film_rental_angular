import { TestBed } from '@angular/core/testing';

import { AdminService } from './admin.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CreateForm } from '../models/create-form';
import { BASE_URL, Route } from 'src/app/config/config';

describe('AdminService', () => {
  let service: AdminService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(AdminService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  describe('Name of the group', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
    it('should get correct POST Structure', () => {
      const form: CreateForm = {
        store_id: 1,
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@doe.com',
        activebool: true,
        address: {
          address: '123 Main St',
          address2: 'Apt 1',
          district: 'District 1',
          postal_code: '12345',
          city: 'City',
          phone: '1234567890',
          country: 'Country',
        },
      };
      service.createNewUser(form).subscribe((data) => {
        expect(data).toBeTruthy();
      });
    });
  });

  describe('getActorFilmsInCategory', () => {
    it('should return actor', () => {
      let response;
      const params = {
        actorId: 1,
        categoryId: 2,
      };
      service.getActorFilmsInCategory(params).subscribe((data) => {
        response = data;
      });
      httpMock
        .expectOne(
          `${BASE_URL}${Route.Actors}/actor-film-in-category/${params.actorId}/${params.categoryId}`
        )
        .flush({ data: 'test' });
      expect(response).toBeTruthy();
    });
    it('should fail without params', () => {
      let response = '';
      service.getActorFilmsInCategory({} as any).subscribe({
        next: (data) => {
          response = data;
        },
        error: () => {
          response = 'fail';
        },
      });
      httpMock
        .expectOne(
          `${BASE_URL}${Route.Actors}/actor-film-in-category/undefined/undefined`
        )
        .error(new ErrorEvent('error'));
      expect(response).toBe('fail');
    });
  });
});
