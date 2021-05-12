import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { AddEmployeeComponent } from './employees/components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employees/components/employee-details/employee-details.component';
import { EmployeesComponent } from './employees/components/employees.component';
import { HomeComponent } from './home/home.component';

// Config the routes
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concepts', component: ConceptsComponent },
  { path: 'employees', component: EmployeesComponent },
  { path: 'employees/new', component: AddEmployeeComponent },
  { path: 'employees/:empId', component: EmployeeDetailsComponent }, // URL Param is empId
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Registering the routes
  exports: [RouterModule]
})
export class AppRoutingModule { }
