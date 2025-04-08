import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomerFormComponent } from './create-customer-form.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminService } from '../services/admin.service';

describe('CreateCustomerFormComponent', () => {
  let component: CreateCustomerFormComponent;
  let fixture: ComponentFixture<CreateCustomerFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CreateCustomerFormComponent,
        MatSnackBarModule,
        MatFormFieldModule,
        BrowserAnimationsModule,
      ],
      providers: [
        {
          provide: AdminService,
          useValue: {
            createNewUser: () => {},
          },
        },
      ],
    });
    fixture = TestBed.createComponent(CreateCustomerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate form', () => {
    const comp = fixture.nativeElement as HTMLElement;
    const store_idInput: HTMLInputElement = comp.querySelector(
      '[formControlName="store_id"]'
    )!;
    component.createForm.controls.store_id.markAsDirty();
    component.createForm.controls.store_id.markAsTouched();
    fixture.detectChanges();
    store_idInput.value = '';
    store_idInput.dispatchEvent(new Event('input'));
    expect(store_idInput.value).toBe('');
    expect(component.createForm.controls.store_id.valid).toBeFalse();

    store_idInput.value = '2';
    store_idInput.dispatchEvent(new Event('input'));
    expect(store_idInput.value).toBe('2');
    expect(component.createForm.controls.store_id.valid).toBeTrue();
    expect(component.createForm.controls.store_id.valid).toBeTrue();
  });

  it('should validate whole form', () => {
    const comp = fixture.nativeElement as HTMLElement;
    spyOn(component.adminService, 'createNewUser');

    const firstNameInput: HTMLInputElement = comp.querySelector(
      '[formControlName="first_name"]'
    )!;
    const lastNameInput: HTMLInputElement = comp.querySelector(
      '[formControlName="last_name"]'
    )!;
    const emailInput: HTMLInputElement = comp.querySelector(
      '[formControlName="email"]'
    )!;
    const addressInput: HTMLInputElement = comp.querySelector(
      '[formControlName="address"]'
    )!;
    const address2Input: HTMLInputElement = comp.querySelector(
      '[formControlName="address2"]'
    )!;
    const districtInput: HTMLInputElement = comp.querySelector(
      '[formControlName="district"]'
    )!;
    const postalCodeInput: HTMLInputElement = comp.querySelector(
      '[formControlName="postal_code"]'
    )!;
    const cityInput: HTMLInputElement = comp.querySelector(
      '[formControlName="city"]'
    )!;
    const phoneInput: HTMLInputElement = comp.querySelector(
      '[formControlName="phone"]'
    )!;
    const countryInput: HTMLInputElement = comp.querySelector(
      '[formControlName="country"]'
    )!;

    const submitButton: HTMLButtonElement = comp.querySelector(
      'button[type="submit"]'
    )!;

    // Set invalid values for all form fields
    firstNameInput.value = '';
    lastNameInput.value = '';
    emailInput.value = '';
    addressInput.value = '';
    address2Input.value = '';
    districtInput.value = '';
    postalCodeInput.value = '';
    cityInput.value = '';
    phoneInput.value = '';
    countryInput.value = '';

    // Trigger input events for all form fields
    firstNameInput.dispatchEvent(new Event('input'));
    lastNameInput.dispatchEvent(new Event('input'));
    emailInput.dispatchEvent(new Event('input'));
    addressInput.dispatchEvent(new Event('input'));
    address2Input.dispatchEvent(new Event('input'));
    districtInput.dispatchEvent(new Event('input'));
    postalCodeInput.dispatchEvent(new Event('input'));
    cityInput.dispatchEvent(new Event('input'));
    phoneInput.dispatchEvent(new Event('input'));
    countryInput.dispatchEvent(new Event('input'));

    // Expect all form fields to be invalid
    expect(component.createForm.controls.first_name.valid).toBeFalse();
    expect(component.createForm.controls.last_name.valid).toBeFalse();
    expect(component.createForm.controls.email.valid).toBeFalse();
    expect(
      component.createForm.controls.address.get('address')!.valid
    ).toBeFalse();
    expect(
      component.createForm.controls.address.get('address2')!.valid
    ).toBeFalse();
    expect(
      component.createForm.controls.address.get('district')!.valid
    ).toBeFalse();
    expect(
      component.createForm.controls.address.get('postal_code')!.valid
    ).toBeFalse();
    expect(
      component.createForm.controls.address.get('city')!.valid
    ).toBeFalse();
    expect(
      component.createForm.controls.address.get('phone')!.valid
    ).toBeFalse();
    expect(
      component.createForm.controls.address.get('country')!.valid
    ).toBeFalse();

    expect(submitButton.disabled).toBeTrue();

    // Set valid values for all form fields
    firstNameInput.value = 'John';
    lastNameInput.value = 'Doe';
    emailInput.value = 'john.doe@example.com';
    addressInput.value = '123 Main St';
    address2Input.value = 'Apt 4B';
    districtInput.value = 'Central';
    postalCodeInput.value = '12345';
    cityInput.value = 'New York';
    phoneInput.value = '555-1234';
    countryInput.value = 'USA';

    // Trigger input events for all form fields
    firstNameInput.dispatchEvent(new Event('input'));
    lastNameInput.dispatchEvent(new Event('input'));
    emailInput.dispatchEvent(new Event('input'));
    addressInput.dispatchEvent(new Event('input'));
    address2Input.dispatchEvent(new Event('input'));
    districtInput.dispatchEvent(new Event('input'));
    postalCodeInput.dispatchEvent(new Event('input'));
    cityInput.dispatchEvent(new Event('input'));
    phoneInput.dispatchEvent(new Event('input'));
    countryInput.dispatchEvent(new Event('input'));

    // Expect all form fields to be valid
    expect(component.createForm.controls.first_name.valid).toBeTrue();
    expect(component.createForm.controls.last_name.valid).toBeTrue();
    expect(component.createForm.controls.email.valid).toBeTrue();
    expect(
      component.createForm.controls.address.get('address')!.valid
    ).toBeTrue();
    expect(
      component.createForm.controls.address.get('address2')!.valid
    ).toBeTrue();
    expect(
      component.createForm.controls.address.get('district')!.valid
    ).toBeTrue();
    expect(
      component.createForm.controls.address.get('postal_code')!.valid
    ).toBeTrue();
    expect(component.createForm.controls.address.get('city')!.valid).toBeTrue();
    expect(
      component.createForm.controls.address.get('phone')!.valid
    ).toBeTrue();
    expect(
      component.createForm.controls.address.get('country')!.valid
    ).toBeTrue();
    fixture.detectChanges();
    expect(submitButton.disabled).toBeFalse();
    submitButton.click();

    expect(component.adminService.createNewUser).toHaveBeenCalledWith({
      store_id: 0,
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      activebool: false,
      address: {
        address: '123 Main St',
        address2: 'Apt 4B',
        district: 'Central',
        postal_code: '12345',
        city: 'New York',
        phone: '555-1234',
        country: 'USA',
      },
    });
  });
});
