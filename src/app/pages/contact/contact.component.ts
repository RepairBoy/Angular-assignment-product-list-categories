import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { BgColorandHoverDirective } from '../../bg-colorand-hover.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [DatePipe,BgColorandHoverDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
 timenow: number = Date.now();


}
