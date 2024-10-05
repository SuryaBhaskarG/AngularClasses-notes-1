import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  @ViewChild(ChildComponent) child!: ChildComponent;

  childData: string = '';
  test() {
   this.childData=this.child.passToParrent()
    }
      

}
