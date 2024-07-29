import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.css'
})

export class CheckboxComponent {
  @Input() todoItem:string = '';

  toggleClass(checkbox: HTMLInputElement, itemLable:HTMLElement) {
    if (checkbox.checked) {
      itemLable.classList.add('checked-class');
    } else {
      itemLable.classList.remove('checked-class');
    }
  }

  // remove(checklist:HTMLElement){
  //   checklist.remove;
  // }

}
