import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'practise';
  counter:number=0;
  
  increment() {
    this.counter=this.counter+1;
    }

    decrement() {
      this.counter-=1;
      }

      onClick() {
        console.log('Button clicked');
      }
    
      onKeydown(event: KeyboardEvent) {
        console.log('Key pressed: ', event.key);
      }
    
      onMouseOver() {
        console.log('Mouse is over the element');
      }

      onCopy() {
        alert('Text copied!');
      }
    
      onMouseMove(event: MouseEvent) {
        console.log(`Mouse at: X=${event.clientX}, Y=${event.clientY}`);
      }
    
      onDoubleClick() {
        alert('Button was double-clicked!');
      }

      onClick1(f:any)
      {
        console.log(f);
      }

}
