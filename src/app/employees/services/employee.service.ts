import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

// Decorator
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  // 1. get the employee form data from the comp
  createEmployee(formData: any): any {
    console.log(formData);

    // 2. send the same data to the REST API
    // 2.1 What's the REST API URL or Endpoint? http://jsonplaceholder.typicode.com/users/
    // 2.2 What's the HTTP Method? POST
    // 2.3 What's the REST API Client Tool? HttpClient
    return this.http.post('http://jsonplaceholder.typicode.com/users/', formData)
      .pipe(map((res: any) => { // 3. get the res from the REST API
        console.log(res);
        return res; // 4. send the res to the comp
      }));
  }

  getEmployees(): any { // 1. get the req from the comp
    console.log('Inside Service');

    // 2. send the req to the REST API
    // 2.1 What's the REST API URL?  http://jsonplaceholder.typicode.com/users/
    // 2.2 What's the Http Method? GET
    // 2.3 What's the REST API Client Tool? HttpClient
    return this.http.get('http://jsonplaceholder.typicode.com/users/')
      .pipe(map((res: any) => { // 3. get the res from the REST API
        console.log(res);
        // sort, filter, removal, convert
        return res; // 4. send the res to the comp
      }));
  }

  getEmployeeById(empId: string | null ): any {
    console.log(empId);
    const employeeDetailsAPI = 'http://jsonplaceholder.typicode.com/users/' + empId;
    return this.http.get(employeeDetailsAPI)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  updateEmployee( updateableEmployeeData: any ): any {
    console.log(updateableEmployeeData);
    const employeeDetailsAPI = 'http://jsonplaceholder.typicode.com/users/' + updateableEmployeeData.id;
    return this.http.put(employeeDetailsAPI, updateableEmployeeData)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));

  }

}
