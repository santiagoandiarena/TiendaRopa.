import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShirtsBuyComponent } from './shirts-buy/shirts-buy.component';
import { ShirtsAboutComponent } from './shirts-about/shirts-about.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
