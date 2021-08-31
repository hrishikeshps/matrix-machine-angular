import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { NgxSpinnerModule } from "ngx-spinner";

import { AppComponent } from './app.component';
import { WelcomeComponent } from './views/welcome/welcome.component';
import { ProtectedComponent } from './views/protected/protected.component';
import { UsersComponent } from './views/users/users.component';
import { ObjectsComponent } from './views/objects/objects.component';
import { SortableComponent } from './views/sortable/sortable.component';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProtectedComponent,
    UsersComponent,
    ObjectsComponent,
    SortableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SortableModule.forRoot(),
    NgxSpinnerModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
