import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OrderComponent } from './pages/order/order.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './pages/cart/cart.component';
import { BarMenuComponent } from './header/bar-menu/bar-menu.component';
import { NutsFilterPipe } from './pipes/nuts-filter.pipe';
import { vegetarianFilterPipe } from './pipes/vegetarian-filter.pipe';
import { SpicinessFilterPipe } from './pipes/spiciness-filter.pipe';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    OrderComponent,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    BarMenuComponent,
    NutsFilterPipe,
    vegetarianFilterPipe,
    SpicinessFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
