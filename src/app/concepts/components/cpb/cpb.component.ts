import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  // Step 1: Make age as custom property
  @Input() age = 10; // @Input() makes the variable as custom property to the selector 'app-cpb'

  constructor() { }

  ngOnInit(): void {
  }

}
