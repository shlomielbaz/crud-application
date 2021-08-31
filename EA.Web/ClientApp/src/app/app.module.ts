import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppShell } from './pages/app/app.shell';
import { UsersModule } from './modules/users/users.module';
import { HomeComponent } from './pages/home/home.component';
import { CounterComponent } from './pages/counter/counter.component';

import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { UsersService } from './modules/users/services/users.service';
import { FetchDataModule } from './modules/fetch-data/fetch-data.module';

@NgModule({
  declarations: [
    AppShell,
    HomeComponent, CounterComponent,
    NavMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    UsersModule,
    FetchDataModule
  ],
  providers: [UsersService],
  bootstrap: [AppShell]
})
export class AppModule { }
