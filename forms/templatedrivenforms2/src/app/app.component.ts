import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,NgStyle,NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  color = 'black';  // Default color
  isHighlighted = false;  // Default state
submit(f: NgForm) {
console.log('Form submitted', f.value);
}


getValue(username:any)

{
 console.log(username.value)
}
  title = 'templatedrivenforms2';
}
