import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserRegisteredServicesComponent } from './components/user-registered-services/user-registered-services.component';
import {MatInputModule, MatOptionModule, MatSelectModule, MatButtonModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserRegisteredServiceService} from './services/user-registered-service.service';
import {HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'user-registered-services', component: UserRegisteredServicesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UserRegisteredServicesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    // Angular material
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [UserRegisteredServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
