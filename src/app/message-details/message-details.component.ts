import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-details',
  standalone: false,
  
  templateUrl: './message-details.component.html',
  styleUrl: './message-details.component.css'
})
export class MessageDetailsComponent {

  @Input()
  message : any = {};

}
