
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LayoutsAdminComponent} from './layouts-admin.component';

const routes: Routes = [
    {path: 'layoutadmin', component: LayoutsAdminComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})

export class LayoutsAdminRoutingModule { }