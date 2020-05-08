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

import { HttpClientModule } from '@angular/common/http'; 

import {  FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin/admin-routing.module';
import { UserRoutingModule } from './user/user-routing.module';
import { LoginAdminRoutingModule } from './admin/layouts-admin/login-admin/login-admin-routing.module';

import { AdminComponent } from './admin/admin.component';
import { FooterAdminComponent } from './admin/layouts-admin/footer-admin/footer-admin.component';
import { HeaderAdminComponent } from './admin/layouts-admin/header-admin/header-admin.component';
import { HomeAdminComponent } from './admin/layouts-admin/home-admin/home-admin.component';
import { SidebarAdminComponent } from './admin/layouts-admin/sidebar-admin/sidebar-admin.component';
import { ComposantsComponent } from './admin/composants/composants.component';
import { TypeDeclarationComponent } from './admin/composants/type-declaration/type-declaration.component';
import { TdeclarationAddComponent } from './admin/composants/type-declaration/tdeclaration-add/tdeclaration-add.component';
import { TdeclarationListComponent } from './admin/composants/type-declaration/tdeclaration-list/tdeclaration-list.component';
import { LayoutsAdminComponent } from './admin/layouts-admin/layouts-admin.component';
import { SettingsAdminComponent } from './admin/layouts-admin/settings-admin/settings-admin.component';
import { LoginAdminComponent } from './admin/layouts-admin/login-admin/login-admin.component';
import { LayoutsAdminRoutingModule } from './admin/layouts-admin/layouts-admin-routing.module';


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

    AdminComponent,
    FooterAdminComponent,
    HeaderAdminComponent,
    HomeAdminComponent,
    SidebarAdminComponent,
    ComposantsComponent,
    TypeDeclarationComponent,
    TdeclarationAddComponent,
    TdeclarationListComponent,
    LayoutsAdminComponent,
    SettingsAdminComponent,
    LoginAdminComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    FormsModule,

    AdminRoutingModule,
    UserRoutingModule,
    LoginAdminRoutingModule,
    LayoutsAdminRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
