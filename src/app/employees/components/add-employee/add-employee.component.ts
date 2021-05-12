import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styles: [
  ]
})
export class AddEmployeeComponent implements OnInit {

  isSaved = false;

  // Step 1: have the form tag equivalent on the TS side
  addEmployeeForm = new FormGroup({
    // Step 2: have the form element equivalents on the TS side
    name: new FormControl('arun', Validators.required), // Step 5: Let's work on Validation
    phone: new FormControl('12312', Validators.required), // TODO: min length & max length
    email: new FormControl('a@b.com', [Validators.required, Validators.email])
    // Refer HTML for Step 3
  });

  constructor(private employeeService: EmployeeService) { // 1. connect with employee Service using Dep injection
  }

  ngOnInit(): void {
  }

  handleAddEmployee(): void {
    console.log('Submitted');
    console.log(this.addEmployeeForm); // will give you the whole form state
    console.log(this.addEmployeeForm.value); // submittable form data

    // 2. send the above form data to the service
    this.employeeService.createEmployee(this.addEmployeeForm.value)
      .subscribe((res: any) => {  // 3. get the res from the service
        console.log(res);

        if (res && res.id) {
          this.isSaved = true;
        }
      });
  }

}
