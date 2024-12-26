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

}
