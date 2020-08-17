import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { PlaceFitnessTesterComponent } from "./place-fitness-tester/place-fitness-tester.component";
import { ViewAppointmetComponent } from "./view-appointmet/view-appointmet.component";
import { SearchComponent } from "./search/search.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { MyRouteModule } from "./my-route/my-route.module";
import { RouterModule } from "@angular/router";
import {FormsModule} from "@angular/forms";
import {ReactiveFormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PlaceFitnessTesterComponent,
    ViewAppointmetComponent,
    SearchComponent,
    ContactUsComponent,
  ],
  imports: [BrowserModule, MyRouteModule, RouterModule, HttpClientModule,FormsModule,ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
