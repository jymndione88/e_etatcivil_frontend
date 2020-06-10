
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
import { TypeCommuneComponent } from '../composants/type-commune/type-commune.component';
import { TcommuneAddComponent } from '../composants/type-commune/tcommune-add/tcommune-add.component';
import { TcommuneListComponent } from '../composants/type-commune/tcommune-list/tcommune-list.component';
import { TypeEtatcivilComponent } from '../composants/type-etatcivil/type-etatcivil.component';
import { TetatcivilAddComponent } from '../composants/type-etatcivil/tetatcivil-add/tetatcivil-add.component';
import { TetatcivilListComponent } from '../composants/type-etatcivil/tetatcivil-list/tetatcivil-list.component';
import { DeclarationNaissanceComponent } from '../composants/declaration-naissance/declaration-naissance.component';
import { DeclarationDecesComponent } from '../composants/declaration-deces/declaration-deces.component';
import { DemandeNaissanceComponent } from '../composants/demande-naissance/demande-naissance.component';
import { DemandeMariageComponent } from '../composants/demande-mariage/demande-mariage.component';
import { DemandeDecesComponent } from '../composants/demande-deces/demande-deces.component';

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
   {path: 'typecommune', component: TypeCommuneComponent,
    children : [
      {path: 'tcommuneadd', component: TcommuneAddComponent},
      {path: 'tcommunelist', component: TcommuneListComponent},
   ],
   },
   {path: 'typeetatcivil', component: TypeEtatcivilComponent,
    children : [
      {path: 'tetatciviladd', component: TetatcivilAddComponent},
      {path: 'tetatcivillist', component: TetatcivilListComponent},
   ],
   },

   {path: 'declarationnaiss', component: DeclarationNaissanceComponent},
   {path: 'declarationdeces', component: DeclarationDecesComponent},
   {path: 'demandenaiss', component: DemandeNaissanceComponent},
   {path: 'demandemariage', component: DemandeMariageComponent},
   {path: 'demandedeces', component: DemandeDecesComponent},

  ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})

export class LayoutsAdminRoutingModule { }