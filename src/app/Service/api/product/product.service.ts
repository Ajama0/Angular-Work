import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from './Models/ProductModel';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {}
   base_url:string = 'https://fakestoreapi.com/';

   getAllProductsAtLimit(limit:number):Observable<ProductModel[]> {
   const productsUrl:string = `${this.base_url}product?limit=${limit}`;
   return this.http.get<Array<ProductModel>>(productsUrl)
    
   }
    
   

   }  

