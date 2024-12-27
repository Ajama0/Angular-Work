import { Component } from '@angular/core';

@Component({
  selector: 'app-my-first-comp',
  standalone: false,
  
  templateUrl: './my-first-comp.component.html',
  styleUrl: './my-first-comp.component.css'
})
export class MyFirstCompComponent {

  name : string = "";
  email : string  = "";
  message : string = "";
  isSubmitted: boolean = false;
  //define an iterable that allows you to iterate over based on a condition
  //whenever a user submits a form, is submitted is true, and if so we create a new record based on 
  //the values created by the user
  //remember the input from the user is binded to the instance variables-data binding
  messages: Array<any> = []


  OnSubmit():void {
    this.isSubmitted = true
    this.messages.push(
      {
        "name" : this.name,
        "email" : this.email,
        "message": this.message
      }
    )


    }

}
