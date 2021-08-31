import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UiModule } from 'src/app/shared/ui.module';
import { FetchDataComponent } from './components/fetch-data.component';


const routes: Routes = [
  {
    path: '', component: FetchDataComponent,
  },
];

@NgModule({
  declarations: [
    FetchDataComponent
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
export class FetchDataRoutesModule { }