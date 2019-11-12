
import { NgModule } from '@angular/core';

import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MenuComponent } from './layouts/menu/menu.component';
import { HomeComponent } from './components/home/home.component';

import { DemarcheComponent } from './components/demarche/demarche.component';
import { ActualiteComponent } from './components/actualite/actualite.component';
import { ContactComponent } from './components/contact/contact.component';

 import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [

    HeaderComponent,
    FooterComponent,
    MenuComponent,
    HomeComponent,
    DemarcheComponent,
    ActualiteComponent,
    ContactComponent,

    UserComponent,

  ],
  imports: [
    UserRoutingModule,
  ],
 
})
export class UserModule { }
