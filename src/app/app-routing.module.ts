import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './views/welcome/welcome.component';
import { ProtectedComponent } from './views/protected/protected.component';
import { UsersComponent } from './views/users/users.component';
import { ObjectsComponent } from './views/objects/objects.component';
import { SortableComponent } from './views/sortable/sortable.component';
import { ForbiddenComponent } from './shared/pages/forbidden/forbidden.component';

import { AuthGuardAdmin } from './shared/services/auth-guard-admin.service';

const routes: Routes =[
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'protected', component: ProtectedComponent, canActivate: [AuthGuardAdmin] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuardAdmin] },
  { path: 'objects', component: ObjectsComponent, canActivate: [AuthGuardAdmin] },
  { path: 'sortable', component: SortableComponent, canActivate: [AuthGuardAdmin] },
  { path: '403', component: ForbiddenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
