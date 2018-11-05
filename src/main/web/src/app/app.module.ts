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
import {UserUnitsRequestServiceService} from './services/user-units-request-service.service';
import {UserObligationGroupAccountService} from './services/user-obligation-group-account.service';
import { UserObligationStrategyForRegisteredServiceComponent }
from './components/user-obligation-strategy-for-registered-service/user-obligation-strategy-for-registered-service.component';
import { CreateObligationPanelComponent } from './components/create-obligation-panel/create-obligation-panel.component';
import {UserObligationGroupsPanelComponent} from './components/user-obligation-groups-panel/user-obligation-groups-panel.component';

const appRoutes: Routes = [
  { path: 'user-account/registered-services-panel', component: UserRegisteredServiceComponent },
  { path: 'user-account/user-obligation-groups-panel', component: UserObligationGroupsPanelComponent },
  { path: 'create-obligation-group-panel', component: CreateObligationPanelComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ManageUserRegisteredServiceComponent,
    UserRegisteredServiceComponent,
    UserRegisteredServicesComponent,
    UserObligationGroupsPanelComponent,
    UserObligationStrategyForRegisteredServiceComponent,
    CreateObligationPanelComponent
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
  providers: [UserRegisteredServiceService, UserUnitsRequestServiceService, UserObligationGroupAccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
