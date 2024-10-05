import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,NgIf,NgFor,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DataBinding';
  IsDisabled: boolean = true;
  isActive:boolean = false;
  message: string = "";
  isHighlighted: boolean = false;
  imageUrl: string = 'https://via.placeholder.com/150';
  username: string ="";

  OnClick()
  {
    this.message="button clicked";
    alert(" button clicked");
  }








  isActive1: boolean = false;
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  color: string = 'red';
  
}
