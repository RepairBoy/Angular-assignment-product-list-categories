import { Routes } from '@angular/router';
// import { HomeComponent } from './pages/home/home.component';
// import { ContactComponent } from './pages/contact/contact.component';
// import { LoginComponent } from './pages/login/login.component';
// import { ProductComponent } from './pages/product/product.component';  dont need cus of lazy loading

export const routes: Routes = [
    {path:"home", loadComponent:()=>import('./pages/home/home.component').then((m)=> m.HomeComponent)},
    {path:"contacts", loadComponent:()=>import('./pages/contact/contact.component').then((m)=> m.ContactComponent) },
    {path:"login", loadComponent:()=>import('./pages/login/login.component').then((m)=> m.LoginComponent)},
    {path:"product/:id", loadComponent:()=>import('./pages/product/product.component').then((m)=> m.ProductComponent)},
    {path:"todo", loadComponent:()=>import('./pages/todo/todo.component').then((m)=> m.TodoComponent)}
];
