import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
dbMessage() {
  console.log('dbMessage');
}


copyMessage() {
  console.log('copyMessage');
}
mousehoverMessage() {
console.log('mousehoverMessage');
}

sendMessage() {
console.log(' click button.');
}



title = 'TemplateDrivenForms';
name: string='';




parrentMessage:string=' i am parent';

  onSubmit(f: NgForm) {
    console.log(f.value);
    }











  submit(e:any)
  {
    console.log(e.value);
  }
}
