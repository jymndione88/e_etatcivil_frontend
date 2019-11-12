
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';

const routes: Routes = [

  {path: 'admin', component: AdminComponent,
  children : [
    {path: '', component: AdminComponent },
    {path: 'accueil', component: AdminComponent },

  ],
},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
