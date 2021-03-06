import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {JobDetailsModule} from './job-details/job-details.module';
import {JobListModule} from './job-list/job-list.module';
import {SignInModule} from './sign-in/sign-in.module';
import {ProjectsModule} from './projects/projects.module';
import {DashboardModule} from "./dashboard/dashboard.module";

@NgModule({
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CoreModule,
    FormsModule,
    HttpModule,
    JobDetailsModule,
    JobListModule,
    SignInModule,
    ProjectsModule,
    DashboardModule
  ],
  declarations: [AppComponent],
  // This specifies the top-level component, to load first.
  bootstrap: [AppComponent]
})
export class AppModule {}
