import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminService } from '../services/admin.service';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateForm } from '../models/create-form';

@Component({
  selector: 'app-create-customer-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
  ],
  templateUrl: './create-customer-form.component.html',
  styleUrls: ['./create-customer-form.component.scss'],
})
export class CreateCustomerFormComponent implements OnInit {
  fb = inject(FormBuilder);
  adminService = inject(AdminService);
  snackbar = inject(MatSnackBar);

  createForm = this.fb.nonNullable.group({
    store_id: [0, Validators.required],
    first_name: ['', Validators.required],
    last_name: ['', Validators.required],
    email: ['', Validators.required],
    activebool: [false, Validators.required],
    address: this.fb.group({
      address: ['', Validators.required],
      address2: ['', Validators.required],
      district: ['', Validators.required],
      postal_code: ['', Validators.required],
      city: ['', Validators.required],
      phone: ['', Validators.required],
      country: ['', Validators.required],
    }),
  });

  ngOnInit(): void {
    this.adminService
      .getActorFilmsInCategory({ actorId: 1, categoryId: 5 })
      .subscribe((data) => {
        console.log(data);
      });

    this.adminService.getCustomers().subscribe((data) => {
      console.log(data);
    });
  }

  showToastr() {
    console.log('trigger');
    // this.toastr.success('is it?')
  }

  onSubmit() {
    this.adminService
      .createNewUser(this.createForm.value as CreateForm)
      .subscribe((data) => {
        console.log(data);
        // this.snackbar.open(`Successfully added ${this.createForm.value.first_name} ${this.createForm.value.last_name} `, {
        //
        // });
        this.createForm.reset();
      });
  }
}
