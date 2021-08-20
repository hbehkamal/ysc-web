import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConfessComponent } from "./confess/confess.component";
import { ConfessionsListComponent } from "./confessions-list/confessions-list.component";
import { MainComponent } from "./main.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  {
     path: "",
     component: MainComponent,
     children: [
       { path: '', redirectTo: 'home', pathMatch: 'full'},
       { path: 'home', component: ConfessionsListComponent},
       { path: "profile", component: ProfileComponent },
       { path: "confess", component: ConfessComponent },
     ]

},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
