import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

// Layout 
import { NavbarComponent } from './layout/navbar/navbar.component';

// Pages
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';


import { KeysPipe } from './pipes/keyvalue.pipe';


@NgModule({
  declarations: [
    NavbarComponent,
    ForbiddenComponent,
    KeysPipe
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent, 
    ForbiddenComponent,
    KeysPipe
  ],
  providers: []
})
export class SharedModule { }
