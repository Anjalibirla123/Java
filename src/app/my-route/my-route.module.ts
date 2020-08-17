import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { LandingPageComponent } from "../landing-page/landing-page.component";
import { PlaceFitnessTesterComponent } from "../place-fitness-tester/place-fitness-tester.component";
import { ViewAppointmetComponent } from "../view-appointmet/view-appointmet.component";
import { ContactUsComponent } from "../contact-us/contact-us.component";

const routes = [
  {path:'landing-page', component:LandingPageComponent},
  {path:'place-fitness-tester', component: PlaceFitnessTesterComponent},
  {path:'view-appointment', component:ViewAppointmetComponent},
  {path:'contact-us' , component:ContactUsComponent},
  {path:'**', component:LandingPageComponent}


];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      routes
      )
    
  ]
})
export class MyRouteModule {}
