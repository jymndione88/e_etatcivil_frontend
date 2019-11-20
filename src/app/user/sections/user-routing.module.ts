
import { SectionsComponent } from './sections.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { UserComponent } from '../user.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemarcheComponent } from './demarche/demarche.component';

const routes: Routes = [

  {path: 'user', component: UserComponent,
  children : [
   // {path: '', component: HomeComponent },
  //  {path: 'accueil', component: HomeComponent },
   // {path: 'demarche', component: DemarcheComponent },
 
   {
    path: 'section',
    component: SectionsComponent,
    children: [     
      {
       path: 'demarche',
       component:  DemarcheComponent,
      },
    ]
    },
  //  {path: 'actualite', component: ActualiteComponent },
  // {path: 'contact', component: ContactComponent },
  ],
},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64]
  } )],
  exports: [RouterModule]
})

export class UserRoutingModule { }
