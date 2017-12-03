import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MainComponent} from "./main/main.component";
import {AppComponent} from "./main/app/app.component";
import {HomeComponent} from "./main/app/home/home.component";
import {RegisterComponent} from "./main/app/register/register.component";
import {LoginComponent} from "./main/app/login/login.component";
import {PatientComponent} from "./main/patient-view/patient.component";
import {AdminComponent} from "./main/admin-view/admin.component";
import {DentistComponent} from "./main/dentist-view/dentist.component";

const appRoutes: Routes = [
  {path: '', component: MainComponent, children:[
    {path: '', component: AppComponent, children:[
      {path: 'home', component: HomeComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'login', component: LoginComponent},
    ]},
    {path: 'patient', component: PatientComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'dentist', component: DentistComponent},
    {path: '**', component: HomeComponent}
  ]}
];

@NgModule({
             imports: [
                RouterModule.forRoot(
                      appRoutes,
                      {
                         useHash: true,
                         enableTracing: false // <-- debugging purposes only
                      }
                )
             ],
             exports: [
                RouterModule
             ]
          })
export class AppRoutingModule {
}
