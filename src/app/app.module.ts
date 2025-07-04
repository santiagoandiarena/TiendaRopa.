import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShirtsListComponent } from './shirts-list/shirts-list.component';

import { FormsModule } from '@angular/forms';
import { ShirtsAboutComponent } from './shirts-about/shirts-about.component';
import { ShirtsCartComponent } from './shirts-cart/shirts-cart.component';
import { ShirtsBuyComponent } from './shirts-buy/shirts-buy.component';

@NgModule({
  declarations: [
    AppComponent,
    ShirtsListComponent,
    ShirtsAboutComponent,
    ShirtsCartComponent,
    ShirtsBuyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
