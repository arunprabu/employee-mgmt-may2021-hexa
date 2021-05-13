import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { EmployeesComponent } from './components/employees.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

// Feature routing module
// Config the feature routes
const routes: Routes = [
  {
    path: 'employees', children: [
      { path: '', component: EmployeesComponent },
      { path: 'new', component: AddEmployeeComponent },
      { path: ':empId', component: EmployeeDetailsComponent } // URL Param is empId
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // Registering feature routes
  ],
  exports: [
    RouterModule
  ]
})
export class EmployeesRoutingModule { }
