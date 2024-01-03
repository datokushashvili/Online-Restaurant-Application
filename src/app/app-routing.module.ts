import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrderComponent } from './pages/order/order.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, title:'Home page | Japanese cuisine at its finest'},
  {path: 'contact', component: ContactComponent, title:'Contact page | Japanese cuisine at its finest'},
  {path: 'order', component: OrderComponent, title:'Order page | Japanese cuisine at its finest'},
  {path: 'cart', component: CartComponent, title:'My cart | Japanese cuisine at its finest'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
