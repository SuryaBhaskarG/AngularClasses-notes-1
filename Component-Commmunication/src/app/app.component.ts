import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {



  parrentMessage:string="message from parent"



  receivedMessage: string = '';

  // This method receives the data emitted by the child
  receiveMessage(message: string) {
    this.receivedMessage = message;
  }


}
