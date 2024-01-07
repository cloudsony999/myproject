import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products=[
    {
      name:'Iphone',
      price:60000,
      stock:20
    },
    {
      name:'Iq',
      price:50000,
      stock:200
   
    },
    {  
    name:'Samsung',
    price:20000,
    stock:123
 },
    {
      name:'Redmi',
      price:30000,
      stock:208
   
    },
    {
      name:'Nokia',
      price:10000,
      stock:500
   
    }
  ]

}
