import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MainComponent } from "./main.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { ProfileComponent } from "./profile/profile.component";
import { ConfessionsListComponent } from "./confessions-list/confessions-list.component";
import { ConfessComponent } from "./confess/confess.component";
import { MainRoutingModule } from "./main-routing.module";

@NgModule({
  declarations: [
    MainComponent,
    TopBarComponent,
    ProfileComponent,
    ConfessionsListComponent,
    ConfessComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ],
})
export class MainModule {}
