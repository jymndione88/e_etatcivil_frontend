import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { ActualiteComponent } from './components/actualite/actualite.component';
import { DemarcheComponent } from './components/demarche/demarche.component';
import { UserComponent } from './user.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {path: 'user', component: UserComponent,
  children : [
    {path: '', component: HomeComponent },
    {path: 'accueil', component: HomeComponent },
    {path: 'demarche', component: DemarcheComponent },
    {path: 'actualite', component: ActualiteComponent },
    {path: 'contact', component: ContactComponent },
  ],
},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
