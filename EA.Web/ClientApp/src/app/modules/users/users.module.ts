
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersRoutesModule } from './users-routes.module';
import { UsersService } from './services/users.service';


@NgModule({
  declarations: [
    
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    UsersRoutesModule
  ],
  exports: [
    CommonModule,
  ],
  providers: [UsersService]
})
export class UsersModule { }
