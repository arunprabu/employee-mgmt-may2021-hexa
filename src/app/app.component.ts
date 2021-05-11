import { Component } from '@angular/core';

// Decorator -- ties all the files together
@Component({
  selector: 'app-root', // exposes the comp in a selector -- element selector -- mandatory
  templateUrl: './app.component.html', // html -- mandatory -- only one
  styleUrls: ['./app.component.css'] // css -- optional -- can be multiple
})
export class AppComponent {
  // ts
  title = 'employee-mgmt-may2021-hexa';
}
