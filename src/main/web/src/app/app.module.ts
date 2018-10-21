import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {MatInputModule, MatOptionModule, MatSelectModule, MatButtonModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserRegisteredServiceService} from './services/user-registered-service.service';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {UserRegisteredServicesComponent} from './components/user-registered-services/user-registered-services.component';
import {UserRegisteredServiceComponent} from './components/user-registered-service/user-registered-service.component';
import {ManageUserRegisteredServiceComponent} from './components/manage-user-registered-service/manage-user-registered-service.component';

const appRoutes: Routes = [
  { path: 'user-registered-services', component: UserRegisteredServiceComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ManageUserRegisteredServiceComponent,
    UserRegisteredServiceComponent,
    UserRegisteredServicesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    // Angular material
    MatExpansionModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule
  ],
  providers: [UserRegisteredServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
