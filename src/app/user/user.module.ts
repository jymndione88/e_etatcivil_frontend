
import { NgModule } from '@angular/core';

import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomeComponent } from './sections/home/home.component';

import { DemarcheComponent } from './sections/demarche/demarche.component';
import { ActualiteComponent } from './sections/actualite/actualite.component';
import { ContactComponent } from './sections/contact/contact.component';

 import { UserComponent } from './user.component';
import { UserRoutingModule } from './sections/user-routing.module';
import { SectionsComponent } from './sections/sections.component';

@NgModule({
  declarations: [

    HeaderComponent,
    FooterComponent,
    HomeComponent,
    DemarcheComponent,
    ActualiteComponent,
    ContactComponent,
    UserComponent,
    SectionsComponent,

  ],
  imports: [
    UserRoutingModule,
  ],
 
})
export class UserModule { }
