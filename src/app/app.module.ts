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
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LoginAppComponent } from './login-app/login-app.component';

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; 
import {  FormsModule } from '@angular/forms';
import { ToastrModule } from "ng6-toastr-notifications";
import { ConfirmationPopoverModule } from "angular-confirmation-popover";
import { DataTablesModule } from "angular-datatables";

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
import { TypeEtatcivilComponent } from './admin/composants/type-etatcivil/type-etatcivil.component';
import { TetatcivilAddComponent } from './admin/composants/type-etatcivil/tetatcivil-add/tetatcivil-add.component';
import { TetatcivilListComponent } from './admin/composants/type-etatcivil/tetatcivil-list/tetatcivil-list.component';
import { TypeCommuneComponent } from './admin/composants/type-commune/type-commune.component';
import { TcommuneAddComponent } from './admin/composants/type-commune/tcommune-add/tcommune-add.component';
import { TcommuneListComponent } from './admin/composants/type-commune/tcommune-list/tcommune-list.component';
import { DeclarationNaissanceComponent } from './admin/composants/declaration-naissance/declaration-naissance.component';
import { DeclarationDecesComponent } from './admin/composants/declaration-deces/declaration-deces.component';
import { DemandeNaissanceComponent } from './admin/composants/demande-naissance/demande-naissance.component';
import { DemandeMariageComponent } from './admin/composants/demande-mariage/demande-mariage.component';
import { DemandeDecesComponent } from './admin/composants/demande-deces/demande-deces.component';

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
    TypeEtatcivilComponent,
    TetatcivilAddComponent,
    TetatcivilListComponent,
    TypeCommuneComponent,
    TcommuneAddComponent,
    TcommuneListComponent,
    DeclarationNaissanceComponent,
    DeclarationDecesComponent,
    DemandeNaissanceComponent,
    DemandeMariageComponent,
    DemandeDecesComponent,

  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,

    AdminRoutingModule,
    UserRoutingModule,
    LoginAdminRoutingModule,
    LayoutsAdminRoutingModule,

    ToastrModule.forRoot(),
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: "danger",
      cancelText: "Annuler",
      confirmText: "Supprimer"
    }),
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
