import {NgModule} from "@angular/core";
import {KingdomListComponent} from "./kingdom/view/kingdom-list/kingdom-list.component";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {KingdomService} from "./kingdom/service/kingdom.service";
import {AppRoutingModule} from "./app.routes";
import {KingdomEditComponent} from "./kingdom/view/kingdom-edit/kingdom-edit.component";
import {KingdomDetailsComponent} from "./kingdom/view/kingdom-details/kingdom-details.component";

@NgModule({

  declarations: [
    KingdomListComponent,
    AppComponent,
    KingdomEditComponent,
    KingdomDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    KingdomService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
