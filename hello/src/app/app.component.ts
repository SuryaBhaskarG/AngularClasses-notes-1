import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello';

  age:number=3;



  arr:number[]=[1,2,3,4,5,6,7,8,9,10];

     isAdmin:string="admin"






  name:string="Surya"







  onSubmit123(f:any)
  {
      console.log("the value user entered in text field: ",f.value)
  }

}
