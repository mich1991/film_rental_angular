import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPanelComponent } from './customer-panel.component';
import { CreateCustomerFormComponent } from '../create-customer-form/create-customer-form.component';
import { AdminService } from '../services/admin.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable, of } from 'rxjs';
import { Customer } from 'src/app/models/Customer';

fdescribe('CustomerPanelComponent', () => {
  let component: CustomerPanelComponent;
  let fixture: ComponentFixture<CustomerPanelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CustomerPanelComponent,
        CreateCustomerFormComponent,
        MatSnackBarModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {
          provide: AdminService,
          useValue: {
            getCustomers: () =>
              of([
                {
                  customerId: 11,
                  storeId: 2,
                  firstName: 'Lisa',
                  lastName: 'Anderson',
                  email: 'lisa.anderson@sakilacustomer.org',
                  addressId: 15,
                  activebool: true,
                  createDate: '2006-02-14',
                  lastUpdate: '2013-05-26T14:49:45.738',
                  active: 1,
                  address: null,
                  payments: [],
                  rentals: [],
                },
              ]),
            getActorFilmsInCategory: () => of([]),
          },
        },
      ],
    });
    fixture = TestBed.createComponent(CustomerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 2 columns', () => {
    const comp: HTMLElement = fixture.nativeElement;
    const div = comp.querySelector('.d-grid.grid-cols-2');
    expect(div).toBeTruthy();
  });

  it('should have a CreateCustomerFormComponent', () => {
    const comp: HTMLElement = fixture.nativeElement;
    const form = comp.querySelector('app-create-customer-form');
    expect(form).toBeTruthy();
  });

  it('should have a mat-list', () => {
    const comp: HTMLElement = fixture.nativeElement;
    const list = comp.querySelector('mat-list');
    fixture.detectChanges();
    expect(list).toBeTruthy();
  });
});
