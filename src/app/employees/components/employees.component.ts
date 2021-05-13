import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IEmployee } from '../models/iemployee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: [
  ]
})
export class EmployeesComponent implements OnInit, OnDestroy {

  employeeList: IEmployee[] = [];
  employeeSubscription: Subscription | any;

  constructor(private employeeService: EmployeeService) { // 1. connect with the service using dep inj
    console.log('Inside Constructor');
  }

  // Lifecycle hook
  ngOnInit(): void {
    // whenever this comp comes into the view ngOnInit would be called
    // ideal place for us to send any ajax calls
    console.log('Inside ngOnInit');

    // 2. send the req to the service
    this.employeeSubscription = this.employeeService.getEmployees()
      .subscribe((res: IEmployee[]) => { // 3. get the res from the service
        console.log(res);
        this.employeeList = res;
      });
  }

  ngOnDestroy(): void{
    // whenever this comp is going out of the view, ngOnDestroy would be called
    // ideal lifecycle hook for us to unsubscribe, clear interval, clear timeout, clear the data
    console.log('ngOnDestroy');
    this.employeeSubscription.unsubscribe();
    if( this.employeeList && this.employeeList.length > 0){
      this.employeeList.length = 0;
    }
  }

}
