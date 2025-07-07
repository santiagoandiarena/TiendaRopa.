import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShirtsListComponent } from './shirts-list/shirts-list.component';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShirtsAboutComponent } from './shirts-about/shirts-about.component';
import { ShirtsCartComponent } from './shirts-cart/shirts-cart.component';
import { ShirtsBuyComponent } from './shirts-buy/shirts-buy.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { provideHttpClient } from '@angular/common/http';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    ShirtsListComponent,
    ShirtsAboutComponent,
    ShirtsCartComponent,
    ShirtsBuyComponent,
    InputNumberComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
