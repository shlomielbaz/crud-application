import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiModule } from 'src/app/shared/ui.module';


import { UserEditorComponent } from './components/user-editor/user-editor.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: '', component: ShellComponent,
    children: [
      {
        path: '', redirectTo: 'list', pathMatch: 'full'
      },
      { path: 'list', component: UserListComponent, data: { title: "Users" } },
      { path: 'add', component: UserEditorComponent, data: { title: "New User" } },
      { path: 'edit/:id', component: UserEditorComponent, data: { title: "Edit User" } },
      {
        path: '**', redirectTo: 'list', pathMatch: 'full'
      }
    ]
  },
];

@NgModule({
  declarations: [
    ShellComponent,
    UserEditorComponent,
    UserListComponent
  ],
  imports: [
    UiModule,
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    UiModule,
  ]
})
export class UsersRoutesModule { }