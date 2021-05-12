import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MenuComponent } from './shared/components/menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ConceptsComponent } from './concepts/components/concepts.component';
import { EmployeesComponent } from './employees/components/employees.component';
import { AboutComponent } from './about/about.component';
import { CpbComponent } from './concepts/components/cpb/cpb.component';
import { CebComponent } from './concepts/components/ceb/ceb.component';
import { ColorizerDirective } from './concepts/directives/colorizer.directive';
import { AddEmployeeComponent } from './employees/components/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './employees/components/employee-details/employee-details.component';


// Main Switching Box
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    ConceptsComponent,
    EmployeesComponent,
    AboutComponent,
    CpbComponent,
    CebComponent,
    ColorizerDirective,
    AddEmployeeComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // needed for two way binding
    ReactiveFormsModule, // needed for reactive forms
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // Step 3: App Module should be bootstrapped with AppComp
})
export class AppModule { }
