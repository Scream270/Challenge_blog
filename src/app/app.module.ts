import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { VoitureComponent } from './voiture/voiture.component';
import { FormuComponent } from './formu/formu.component';

import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';


export const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: VoitureComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    VoitureComponent,
    FormuComponent,
    HeaderComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(
      ROUTES
    ),
  ],
  providers: [
  // provide (LocationStrategy, { useClass: HashLocationStrategy })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
