import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyFirstService {

  messages:Array<any> = []

  constructor() { 
    this.init()
  }

  init():void{
    this.insert({
      name : "ali",
      email:"ali@j",
      message:"welomce"
    });

    this.insert({
      name : "abdi",
      email:"ali@j",
      message:"hee"
    });

    this.insert({
      name : "jak",
      email:"jacki@j",
      message:"welomce"
    }
  
  );
  }

  insert(message:{name: string; email: string; message: string;}){
    this.messages.push(message)
  }

  getAll():Array<any>{
    return this.messages
  }

  delete(index:number):void{
    this.messages.splice(index,1)
  }

}
