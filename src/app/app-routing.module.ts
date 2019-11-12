import { UserComponent } from './user/user.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginAppComponent} from './login-app/login-app.component';

const routes: Routes = [

  { path: '', redirectTo: '/user', pathMatch: 'full' },
  {path: 'admin', component: AdminComponent},

  //{path: '', loadChildren: 'app/layout/layout.module#LayoutModule'},
  //{path: 'admin', loadChildren: 'app/admin/layout-admin/layoutAdmin.module#layoutAdminModule'},

  //{path: 'demarche', component: DemarcheComponent},
  //{path: 'actualite', component: ActualiteComponent},
  //{path: 'contact', component: ContactComponent},
  //{path: "", component: AppComponent},
  // { path: '', redirectTo: '/', pathMatch: 'full' },
  // {path: "login", component: LoginAppComponent},
  // {path: 'admin', component: AdminComponent}
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
