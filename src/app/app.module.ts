import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsListComponent } from './components/contacts-list/contacts-list.component';
import { ContactComponent } from './components/contact/contact.component';
import { AddFormComponent } from './components/add-form/add-form.component';

import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { HomeviewComponent } from './components/homeview/homeview.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const appRoutes:Routes = [
  {path:'', component:HomeviewComponent},
  {path:'contacts', component:ContactsListComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ContactComponent,
    AddFormComponent,
    FilterPipePipe,
    HomeviewComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
