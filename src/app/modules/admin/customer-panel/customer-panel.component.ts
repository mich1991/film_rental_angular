import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCustomerFormComponent } from '../create-customer-form/create-customer-form.component';
import { MatListModule } from '@angular/material/list';
import { AdminService } from '../services/admin.service';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/Customer';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-customer-panel',
  standalone: true,
  imports: [
    CommonModule,
    CreateCustomerFormComponent,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './customer-panel.component.html',
  styleUrls: ['./customer-panel.component.scss'],
})
export class CustomerPanelComponent {
  adminService = inject(AdminService);
  customers$: Observable<Customer[]> = this.adminService.getCustomers();

  editHandler(id: number) {
    console.log('Edit', id);
  }
}
