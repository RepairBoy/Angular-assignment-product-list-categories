import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../interface/appInterfaces';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  items:Product | undefined;
  public id: string | null = '';
  constructor(private route: ActivatedRoute) {}
  async ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    await this.fetchAPI(this.id);
 }

 async fetchAPI(id:string | null){
  const url = `https://dummyjson.com/products/${id}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    this.items = await response.json();
    console.log(this.items)
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
};
}
