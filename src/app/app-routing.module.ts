import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { SportsComponent } from './sports/sports.component';
import { AllComponent } from './all/all.component';
import { DetailsComponent } from './details/details.component';
import { TechnologyComponent } from './technology/technology.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: '', component: AllComponent},
  { path: 'business', component: BusinessComponent},
  { path: 'sports', component: SportsComponent},
  { path: 'details/:publishedAt', component: DetailsComponent},
  { path: 'technology', component: TechnologyComponent},
  { path: 'contact', component: ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
