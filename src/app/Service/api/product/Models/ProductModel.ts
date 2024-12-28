import { AnyCatcher } from "rxjs/internal/AnyCatcher";
import { RatingRepresentation } from "./RatingRepresentation";

export interface ProductModel{
    id?: number,
    title?:string,
    description?:string,
    cateogory?:string,
    image?:string,
    price?:number,
    rating:RatingRepresentation
    

}