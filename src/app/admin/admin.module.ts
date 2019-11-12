
import { NgModule } from '@angular/core';

import { HeaderComponent } from './layout-admin/header/header.component';
import { FooterComponent } from './layout-admin/footer/footer.component';
import { SidebarComponent } from './layout-admin/sidebar/sidebar.component';
import { HomeComponent } from './layout-admin/home/home.component';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { TdeclarationListComponent } from './components/type-declaration/tdeclaration-list/tdeclaration-list.component';
import { TdeclarationAddComponent } from './components/type-declaration/tdeclaration-add/tdeclaration-add.component';

@NgModule({
  declarations: [

    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SidebarComponent,
    
    AdminComponent,
    
    TdeclarationListComponent, 
    TdeclarationAddComponent,
    
  ],
  imports: [
    AdminRoutingModule,
  ],

})
export class AdminModule { }
