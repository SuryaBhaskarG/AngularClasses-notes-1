import { CommonModule, CurrencyPipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ArrayDataService } from './array-data.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,UpperCasePipe,LowerCasePipe,CurrencyPipe,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  postServiceData: any[] = [];  //

  constructor(private arrayDataService:ArrayDataService) { 
    
  }
  ngOnInit(): void {
    this.postServiceData = this.arrayDataService.postService;
  }
  title = 'Angular-Routing-Ex';
  name:string="surya"
  price:number=1800234589
}
