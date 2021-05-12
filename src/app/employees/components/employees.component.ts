import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styles: [
  ]
})
export class EmployeesComponent implements OnInit {

  employeeList: any[] = [];

  constructor(private employeeService: EmployeeService) { // 1. connect with the service using dep inj
    console.log('Inside Constructor');
  }

  // Lifecycle hook
  ngOnInit(): void {
    // whenever this comp comes into the view ngOnInit would be called
    // ideal place for us to send any ajax calls
    console.log('Inside ngOnInit');

    // 2. send the req to the service
    this.employeeService.getEmployees()
      .subscribe((res: any) => { // 3. get the res from the service
        console.log(res);
        this.employeeList = res;
      });
  }

}
