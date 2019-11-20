import { ContactComponent } from './user/sections/contact/contact.component';
import { ActualiteComponent } from './user/sections/actualite/actualite.component';
import { UserComponent } from './user/user.component';

import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { LoginAppComponent} from './login-app/login-app.component';
import { DemarcheComponent } from './user/sections/demarche/demarche.component';
import { SectionsComponent } from './user/sections/sections.component';

const routes: Routes = [

 // { path: '', redirectTo: '/app', pathMatch: 'full'},
 //{path: 'admin', component: AdminComponent},

  {path: 'user', component: UserComponent,
  children : [
    
    {path: 'section', component: SectionsComponent,
  children : [
    {path: 'demarche', component: DemarcheComponent },
    {path: 'actualite', component: ActualiteComponent },
    {path: 'contact', component: ContactComponent },
  ],
 },

  ],
},

    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
