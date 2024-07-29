import { Component, Input } from '@angular/core';
import { ButtonComponent } from "../button/button.component";
import { Router } from '@angular/router';

import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [ButtonComponent, NgOptimizedImage],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  @Input() products:any;

  constructor(private router: Router) {}

  btnEvent(id:number) {
    this.router.navigate([`/product/${id}`]);
  }
}
