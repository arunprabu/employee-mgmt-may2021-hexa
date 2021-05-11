import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-ceb',
  templateUrl: './ceb.component.html',
  styles: [
  ]
})
export class CebComponent implements OnInit {

  data = 'Arun';

  // Step 1: Create an Obj for EventEmitter Class
  @Output() profileLoaded = new EventEmitter();  // Step 2: @Output() Makes the obj as custom event to the selector 'app-ceb'

  constructor() { }

  ngOnInit(): void {
  }

  handleSendData(): void {
    console.log('Will send data to parent comp soon');
    // Step 3: Let's emit that custom event
    this.profileLoaded.emit(this.data); // Step 4: Let's send the data to the parent comp
  }
}
