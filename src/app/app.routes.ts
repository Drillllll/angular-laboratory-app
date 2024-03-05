import {RouterModule, Routes} from '@angular/router';
import {KingdomListComponent} from "./kingdom/view/kingdom-list/kingdom-list.component";
import {NgModule} from "@angular/core";
import {KingdomAddFormComponent} from "./kingdom/view/kingdom-add-form/kingdom-add-form.component";
import {KingdomEditComponent} from "./kingdom/view/kingdom-edit/kingdom-edit.component";
import {KingdomDetailsComponent} from "./kingdom/view/kingdom-details/kingdom-details.component";

export const routes: Routes = [
  { path: 'kingdom', component: KingdomListComponent },
  { path: 'kingdom/add', component: KingdomAddFormComponent },
  { path: 'kingdom/:id/edit', component: KingdomEditComponent },
  { path: 'kingdom/:id', component: KingdomDetailsComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
