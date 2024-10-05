import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'NgOnInit';
  
 
  data:string = "Hello World";
  ngOnInit(): void {
    this.data="Surya Bhaskar"
    alert("OnInit Called");
  }
 
  constructor()
  {
    alert("Constructor Called");
  }

  num:number =3;
  arr:number[] = [1,2,3,4,5,6,7,8,9,10];


  
  
}
