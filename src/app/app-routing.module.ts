import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShirtsBuyComponent } from './shirts-buy/shirts-buy.component';
import { ShirtsAboutComponent } from './shirts-about/shirts-about.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shirts',
    pathMatch: 'full',
  },
  {
    path: 'shirts',
    component: ShirtsBuyComponent,
  },
  {
    path: 'about',
    component: ShirtsAboutComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
