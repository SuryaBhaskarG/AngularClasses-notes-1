import { Component } from '@angular/core';
import { AppComponent } from "../app.component";

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {


  data:string="some data from the child component";


  passToParrent()
  {
    return this.data;
  }

}
