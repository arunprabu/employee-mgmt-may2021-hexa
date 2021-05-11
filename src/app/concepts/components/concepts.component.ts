import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
  ]
})
export class ConceptsComponent implements OnInit {

  // ideal place for your public, private variables
  appName = 'Employee Management App';

  companyName = 'Hexaware USA';

  course = 'Angular';

  myAge = 100;

  dataReceivedFromChildComp = '';

  isLoggedIn = false;

  skillList: string[] = [
    'html', 'css', 'js', 'ng'
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // ideal place for methods
  handleClickMe(event: any): void{
    alert('Clicked');
    console.log(event);
    // TODO: disable the button
    // TODO: change the label of the button to 'clicked'
  }

  // Step 6 of CEB: work on receiving the data with event handler
  handleProfileLoaded(event: any): void{
    console.log(event);
    this.dataReceivedFromChildComp = event;
  }
}
