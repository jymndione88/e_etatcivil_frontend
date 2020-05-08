
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { LayoutsAdminComponent } from './layouts-admin/layouts-admin.component';
import { ComposantsComponent } from './composants/composants.component';
import { TypeDeclarationComponent } from './composants/type-declaration/type-declaration.component';
import { TdeclarationAddComponent } from './composants/type-declaration/tdeclaration-add/tdeclaration-add.component';
import { TdeclarationListComponent } from './composants/type-declaration/tdeclaration-list/tdeclaration-list.component';
import { FooterAdminComponent } from './layouts-admin/footer-admin/footer-admin.component';
import { HeaderAdminComponent } from './layouts-admin/header-admin/header-admin.component';
import { HomeAdminComponent } from './layouts-admin/home-admin/home-admin.component';
import { SidebarAdminComponent } from './layouts-admin/sidebar-admin/sidebar-admin.component';
import { SettingsAdminComponent } from './layouts-admin/settings-admin/settings-admin.component';
import { LoginAdminComponent } from './layouts-admin/login-admin/login-admin.component';

const routes: Routes = [

  {path: 'admin', redirectTo: 'loginadmin', pathMatch: 'full'},
  {path: 'admin', component: AdminComponent,
  children : [
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
  ],
  },
 ],
},
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AdminRoutingModule { }
