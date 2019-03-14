import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessComponent } from './business/business.component';
import { SportsComponent } from './sports/sports.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AllComponent } from './all/all.component';
import { DetailsComponent } from './details/details.component';
import { TechnologyComponent } from './technology/technology.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    BusinessComponent,
    SportsComponent,
    SidebarComponent,
    AllComponent,
    DetailsComponent,
    TechnologyComponent,
    NavComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
