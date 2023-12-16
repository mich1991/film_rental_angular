import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminModule} from "../admin.module";

@Component({
  selector: 'app-customer-panel',
  standalone: true,
  imports: [CommonModule, AdminModule],
  templateUrl: './customer-panel.component.html',
  styleUrls: ['./customer-panel.component.scss']
})
export class CustomerPanelComponent {

}
