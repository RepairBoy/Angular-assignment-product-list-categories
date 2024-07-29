import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Output() myEvent = new EventEmitter<string>;

  newEvent(){
    this.myEvent.emit()
  }

  performFunction() {
    console.log('Button clicked in CheckboxComponent, performing function in ListComponent');
    // Add your custom logic here
  }
}
