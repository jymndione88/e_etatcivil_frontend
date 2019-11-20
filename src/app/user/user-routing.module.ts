import { SectionsComponent } from './sections/sections.component';
import { HomeComponent } from './sections/home/home.component';
import { ContactComponent } from './sections/contact/contact.component';
import { ActualiteComponent } from './sections/actualite/actualite.component';
import { UserComponent } from './user.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemarcheComponent } from './sections/demarche/demarche.component';

const routes: Routes = [
 
  {path: 'user', component: UserComponent,
  children : [
    
    {path: 'section', component: SectionsComponent,
  children : [
   // {path: '', component: HomeComponent },
    {path: 'demarche', component: DemarcheComponent },
  ],
 },
   // {path: '', component: HomeComponent },
  //  {path: 'accueil', component: HomeComponent },
   // {path: 'demarche', component: DemarcheComponent },
  //  {path: 'actualite', component: ActualiteComponent },
  // {path: 'contact', component: ContactComponent },
  ],
},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
