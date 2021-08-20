import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProfileComponent } from './profile/profile.component';
import { ConfessionsListComponent } from './confessions-list/confessions-list.component';
import { ConfessComponent } from './confess/confess.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProfileComponent,
    ConfessionsListComponent,
    ConfessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
