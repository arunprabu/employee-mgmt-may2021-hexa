import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEmployee } from '../../models/iemployee';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: [
  ]
})
export class EmployeeDetailsComponent implements OnInit {

  employeeData: IEmployee = {};
  duplicateEmployeeData: IEmployee = {};
  isUpdated = false;

  constructor(private employeeService: EmployeeService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    // Read URL Param in angular
    const empId = this.route.snapshot.paramMap.get('empId');
    this.employeeService.getEmployeeById(empId)
      .subscribe((res: IEmployee) => {
        console.log(res);
        this.employeeData = res;
      });
  }

  handleEditModalOpen(): void {
    this.duplicateEmployeeData = { ...this.employeeData };
  }

  handleUpdateEmployee(): void {
    console.log(this.duplicateEmployeeData);

    this.employeeService.updateEmployee(this.duplicateEmployeeData)
      .subscribe((res: any) => {
        console.log(res);

        if (res && res.id) {
          this.isUpdated = true;
          this.employeeData = res;
        }
      });
  }

}
