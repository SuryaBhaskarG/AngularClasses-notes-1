
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';



export const routes: Routes = [

    {
        path:'',component: HomeComponent
    },
    { path: '', redirectTo: 'contact', pathMatch: 'full' },
    {
        path:'products',component: ProductsComponent
    },
    {
        path:'contact',component: ContactComponent
    }
   

];
