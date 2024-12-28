import { NgClass } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { ProductService } from '../Service/api/product/product.service';
import { ProductModel } from '../Service/api/product/Models/ProductModel';

@Component({
  selector: 'app-about',
  standalone: false,
  
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

 constructor(private productService:ProductService){
 }

 

  ngOnInit(): void {
    this.productService.getAllProductsAtLimit(5).subscribe({
      next: (data) => {
        console.log(data)
      }

    });

  }












}
