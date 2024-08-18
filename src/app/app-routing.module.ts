import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CarrersComponent } from './carrers/carrers.component';
import { OfferComponent } from './offer/offer.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
{path:'', component:HomeComponent},
{path:'carrers', component:CarrersComponent},
{path:'offer', component:OfferComponent},
{path:'blog', component:BlogComponent},
{path:'contact', component:ContactComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
