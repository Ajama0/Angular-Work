import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-message-details',
  standalone: false,
  
  templateUrl: './message-details.component.html',
  styleUrl: './message-details.component.css'
})
export class MessageDetailsComponent {
  @Input()
  message : any = {};

  @Output()
  index:Number = -1

  @Output()
  delete : EventEmitter<any> = new EventEmitter<any>

  onDelete() {
    this.delete.emit(this.index)
    }

}
