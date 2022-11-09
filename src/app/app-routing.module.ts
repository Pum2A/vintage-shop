import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ManComponent } from './man/man.component';
import { ShopCardComponent } from './shop-card/shop-card.component';
import { WomenComponent } from './women/women.component';

const routes: Routes = [

  {path: 'home', component:HomeComponent},
  {path: 'women', component:WomenComponent},
  {path: 'man', component:ManComponent},
  {path: 'login', component:LoginComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'shop-card', component:ShopCardComponent},
  {path: '**', redirectTo:'home', pathMatch:'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
