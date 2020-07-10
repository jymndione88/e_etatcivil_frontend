
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutsAdminComponent} from './layouts-admin.component';

import { ComposantsComponent } from '../composants/composants.component';
import { TypeDeclarationComponent } from '../composants/type-declaration/type-declaration.component';
import { TdeclarationAddComponent } from '../composants/type-declaration/tdeclaration-add/tdeclaration-add.component';
import { TdeclarationListComponent } from '../composants/type-declaration/tdeclaration-list/tdeclaration-list.component';

import { FooterAdminComponent } from '../layouts-admin/footer-admin/footer-admin.component';
import { HeaderAdminComponent } from '../layouts-admin/header-admin/header-admin.component';
import { HomeAdminComponent } from '../layouts-admin/home-admin/home-admin.component';
import { SidebarAdminComponent } from '../layouts-admin/sidebar-admin/sidebar-admin.component';
import { SettingsAdminComponent } from '../layouts-admin/settings-admin/settings-admin.component';
import { LoginAdminComponent } from '../layouts-admin/login-admin/login-admin.component';
import { TypeEtatcivilComponent } from '../composants/type-etatcivil/type-etatcivil.component';
import { TetatcivilAddComponent } from '../composants/type-etatcivil/tetatcivil-add/tetatcivil-add.component';
import { TetatcivilListComponent } from '../composants/type-etatcivil/tetatcivil-list/tetatcivil-list.component';
import { DeclarationNaissanceComponent } from '../composants/declaration-naissance/declaration-naissance.component';
import { DeclarationDecesComponent } from '../composants/declaration-deces/declaration-deces.component';
import { DemandeNaissanceComponent } from '../composants/demande-naissance/demande-naissance.component';
import { DemandeMariageComponent } from '../composants/demande-mariage/demande-mariage.component';
import { DemandeDecesComponent } from '../composants/demande-deces/demande-deces.component';
import { GestionCommuneComponent } from '../composants/gestion-commune/gestion-commune.component';
import { GcommuneAddComponent } from '../composants/gestion-commune/gcommune-add/gcommune-add.component';
import { GcommuneListComponent } from '../composants/gestion-commune/gcommune-list/gcommune-list.component';
import { GestionEtatComponent } from '../composants/gestion-etat/gestion-etat.component';
import { GetatAddComponent } from '../composants/gestion-etat/getat-add/getat-add.component';
import { GetatListComponent } from '../composants/gestion-etat/getat-list/getat-list.component';
import { GestionLieuComponent } from '../composants/gestion-lieu/gestion-lieu.component';
import { GlieuAddComponent } from '../composants/gestion-lieu/glieu-add/glieu-add.component';
import { GlieuListComponent } from '../composants/gestion-lieu/glieu-list/glieu-list.component';
import { GestionLivraisonComponent } from '../composants/gestion-livraison/gestion-livraison.component';
import { GlivraisonAddComponent } from '../composants/gestion-livraison/glivraison-add/glivraison-add.component';
import { GlivraisonListComponent } from '../composants/gestion-livraison/glivraison-list/glivraison-list.component';
import { GestionPaiementComponent } from '../composants/gestion-paiement/gestion-paiement.component';
import { GpaiementAddComponent } from '../composants/gestion-paiement/gpaiement-add/gpaiement-add.component';
import { GpaiementListComponent } from '../composants/gestion-paiement/gpaiement-list/gpaiement-list.component';
import { GestionRoleComponent } from '../composants/gestion-role/gestion-role.component';
import { GroleAddComponent } from '../composants/gestion-role/grole-add/grole-add.component';
import { GroleListComponent } from '../composants/gestion-role/grole-list/grole-list.component';
import { GestionUtilisateurComponent } from '../composants/gestion-utilisateur/gestion-utilisateur.component';
import { GutilisateurAddComponent } from '../composants/gestion-utilisateur/gutilisateur-add/gutilisateur-add.component';
import { GutilisateurListComponent } from '../composants/gestion-utilisateur/gutilisateur-list/gutilisateur-list.component';
import { NaissanceComponent } from '../composants/declaration-naissance/naissance/naissance.component';
import { DecesComponent } from '../composants/declaration-deces/deces/deces.component';
import { DemNaissanceComponent } from '../composants/demande-naissance/dem-naissance/dem-naissance.component';
import { DemMariageComponent } from '../composants/demande-mariage/dem-mariage/dem-mariage.component';
import { DemDecesComponent } from '../composants/demande-deces/dem-deces/dem-deces.component';

const routes: Routes = [ 
 // { path: '', redirectTo: '/homeadmin', pathMatch: 'full' },
 // {path: 'homeadmin', component: HomeAdminComponent},

 {path: 'layoutadmin', component: LayoutsAdminComponent,
   children : [
    {path: 'headeradmin', component: HeaderAdminComponent},
    {path: 'sidebaradmin', component: SidebarAdminComponent},
    {path: 'settingsadmin', component: SettingsAdminComponent},
    {path: 'homeadmin', component: HomeAdminComponent},
    {path: 'footeradmin', component: FooterAdminComponent},
    {path: 'loginadmin', component: LoginAdminComponent},

  ],
  },

  {path: 'composant', component: ComposantsComponent,
   children : [
    {path: 'typedeclaration', component: TypeDeclarationComponent,
    children : [
      {path: 'tdeclarationadd', component: TdeclarationAddComponent},
      {path: 'tdeclarationlist', component: TdeclarationListComponent},
   ],
   },
   {path: 'typeetatcivil', component: TypeEtatcivilComponent,
    children : [
      {path: 'tetatciviladd', component: TetatcivilAddComponent},
      {path: 'tetatcivillist', component: TetatcivilListComponent},
   ],
   },

   {path: 'declarationnaiss', component: DeclarationNaissanceComponent,
   children : [
    {path: 'decnaisance', component: NaissanceComponent},
 ],
  },
   {path: 'declarationdeces', component: DeclarationDecesComponent,
   children : [
    {path: 'decdeces', component: DecesComponent},
 ],
},
   {path: 'demandenaiss', component: DemandeNaissanceComponent,
   children : [
    {path: 'demnaisance', component: DemNaissanceComponent},
 ],
},
   {path: 'demandemariage', component: DemandeMariageComponent,
   children : [
    {path: 'demmariage', component: DemMariageComponent},
 ],
},
   {path: 'demandedeces', component: DemandeDecesComponent,
   children : [
    {path: 'demdeces', component: DemDecesComponent},
 ],
},

   {path: 'gestioncommune', component: GestionCommuneComponent,
    children : [
      {path: 'gcommuneadd', component: GcommuneAddComponent},
      {path: 'gcommunelist', component: GcommuneListComponent},
   ],
   },
   {path: 'gestionetat', component: GestionEtatComponent,
   children : [
     {path: 'getatadd', component: GetatAddComponent},
     {path: 'getatlist', component: GetatListComponent},
  ],
  },
  {path: 'gestionlieu', component: GestionLieuComponent,
  children : [
    {path: 'glieuadd', component: GlieuAddComponent},
    {path: 'glieulist', component: GlieuListComponent},
 ],
 },
 {path: 'gestionlivraison', component: GestionLivraisonComponent,
  children : [
    {path: 'glivraisonadd', component: GlivraisonAddComponent},
    {path: 'glivraisonlist', component: GlivraisonListComponent},
 ],
 },
 {path: 'gestionpaiement', component: GestionPaiementComponent,
  children : [
    {path: 'gpaiementadd', component: GpaiementAddComponent},
    {path: 'gpaiementlist', component: GpaiementListComponent},
 ],
 },
 {path: 'gestionrole', component: GestionRoleComponent,
 children : [
   {path: 'groleadd', component: GroleAddComponent},
   {path: 'grolelist', component: GroleListComponent},
],
},
{path: 'gestionutilisateur', component: GestionUtilisateurComponent,
children : [
  {path: 'gutilisateuradd', component: GutilisateurAddComponent},
  {path: 'gutilisateurlist', component: GutilisateurListComponent},
],
},

  ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})

export class LayoutsAdminRoutingModule { }