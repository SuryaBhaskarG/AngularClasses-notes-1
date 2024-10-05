import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {


  



  childMessage: string="Message from child"
  // @Output decorator allows this event to be listened to in the parent
  @Output() messageEvent = new EventEmitter<string>();
  sendMessage() {
    // Emitting the event and passing the message to the parent component
    this.messageEvent.emit(this.childMessage);
  }








}
