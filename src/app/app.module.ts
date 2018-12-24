import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HomeModule } from './home/app.home.module';
import { HttpClientModule } from '@angular/common/http';
import { MenuModule } from './menu/module/app.menu.module';
import { CustomPipe } from './app.pipe';
import { AppLoginComponent } from './app-login/app-login.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipe,
    AppLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    MenuModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
