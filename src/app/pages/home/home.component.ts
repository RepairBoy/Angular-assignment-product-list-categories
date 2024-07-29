import { Component } from '@angular/core';
import { Product } from '../../interface/appInterfaces';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../ui/navbar/navbar.component';
import { CardsComponent } from '../../ui/cards/cards.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, CardsComponent, NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(public http: HttpClient) {}
  items:Product[] = [];
  sectionCategory:string[] = [];
  sectionTitle:string[] = [];
  ngOnInit(){
  //  await this.fetchAPI()
  const url = 'https://dummyjson.com/products';
   this.http.get(url).subscribe((data:any) =>{
    this.items = data.products;
    if(this.items){
      this.sectionCategory = this.getUniqueCategories(this.items);
      this.sectionTitle = this.capitalizeFirstLetter(this.sectionCategory)
      // console.log(this.sectionCategory)
    }
   })
  }

  // async fetchAPI(){
  //   const url = 'https://dummyjson.com/products';
  //   try {
  //     const response = await fetch(url);
  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }
  //     const data = await response.json();
  //     this.items = data.products;
  //   } catch (error) {
  //     console.error('There was a problem with the fetch operation:', error);
  //   }
  // };
  getUniqueCategories(items: Product[]): string[] {
    const categories = items.map(item => item.category);
    return Array.from(new Set(categories));
  }
  capitalizeFirstLetter(myString: string[]): string[] {
    if (!myString) return myString;
    let output:string[] = [];
    myString.forEach(item =>{
      output.push(item.charAt(0).toUpperCase() + item.slice(1))
    })
    return output;
  }
}
