import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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
    RouterModule
  ],
  exports: [
    NavbarComponent, 
    ForbiddenComponent,
    KeysPipe
  ],
  providers: []
})
export class SharedModule { }
