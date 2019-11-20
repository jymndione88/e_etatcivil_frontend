import { ContactComponent } from './user/sections/contact/contact.component';
import { UserComponent } from './user/user.component';
import { SectionsComponent } from './user/sections/sections.component';
import { ActualiteComponent } from './user/sections/actualite/actualite.component';
import { DemarcheComponent } from './user/sections/demarche/demarche.component';
import { HomeComponent } from './user/sections/home/home.component';
import { FooterComponent } from './user/layouts/footer/footer.component';
import { HeaderComponent } from './user/layouts/header/header.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginAppComponent } from './login-app/login-app.component';

//import { AdminModule } from './admin/admin.module';
//import { UserModule } from './user/user.module';

@NgModule({
  declarations: [

    AppComponent,
    LoginAppComponent,

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
    BrowserModule,
    AppRoutingModule,

    //UserModule,
    //AdminModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
