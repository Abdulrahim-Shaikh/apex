import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadNavbarComponent } from './head-navbar/head-navbar.component';
import { ToolbarModule } from 'primeng/toolbar';
import { MainModule } from './home/main/main.module';
import { AvatarModule } from 'primeng/avatar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { MenuModule } from 'primeng/menu';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { SidebarComponent } from './home/sidebar/sidebar.component';
import { UserAuthenticationModule } from './user-authentication/user-authentication.module';

@NgModule({
  declarations: [
    AppComponent,
    HeadNavbarComponent,
    SidebarComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ToolbarModule,
    MainModule,
    AvatarModule,
    DropdownModule,
    MenuModule,
    ButtonModule,
    SidebarModule,
    UserAuthenticationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
