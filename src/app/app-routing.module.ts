import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ConfessComponent } from "./confess/confess.component";
import { ConfessionsListComponent } from "./confessions-list/confessions-list.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  { path: "", component: ConfessionsListComponent },
  { path: "/auth", loadChildren: "./auth/auth.module#AuthModule" },
  { path: "/profile", component: ProfileComponent },
  { path: "/confess", component: ConfessComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
