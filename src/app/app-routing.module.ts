import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { BaseComponent } from './HeptoComponent/base/base.component';

import { FormComponent } from './HeptoComponent/form/form.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: BaseComponent
  },
  {
    path: 'signUp',
    component: FormComponent
  },
  {
    path: 'Account',
    component: FormComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'chat-box',
    component: ChatBoxComponent
  },

  {path: 'forget-password',
  component: ForgetPasswordComponent
  },
  {
    path: '', redirectTo: 'Account', pathMatch: 'full'
  },
  {
    path :'admin',
    canActivate: [AuthGuard],
    loadChildren: () => import('./modules/admin/admin.module').then((m) => m.AdminModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
