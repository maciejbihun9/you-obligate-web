import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {MatInputModule, MatOptionModule, MatSelectModule, MatButtonModule, MatTableModule} from '@angular/material';
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
import { RegisteredServiceObligationStrategyComponent }
from './components/registered-service-obligation-strategy/registered-service-obligation-strategy.component';
import { CreateObligationPanelComponent } from './components/create-obligation-panel/create-obligation-panel.component';
import {UserObligationGroupsPanelComponent} from './components/user-obligation-groups-panel/user-obligation-groups-panel.component';
import { ObligationGroupsViewComponent } from './components/obligation-groups-view/obligation-groups-view.component';
import {ObligationGroupsService} from './services/obligation-groups.service';
import { CircleImageComponent } from './components/circle-image/circle-image.component';
import { ObligationGroupViewComponent } from './components/obligation-group-view/obligation-group-view.component';
import {ObligationGroupListItemComponent} from './components/obligation-group-list-item/obligation-group-list-item.component';
import { BondListItemComponent } from './components/bond-list-item/bond-list-item.component';
import { BondViewComponent } from './components/bond-view/bond-view.component';
import {TestService} from './services/test.service';
import {CreateObligationGroupPanelComponent} from './components/create-obligation-group-panel/create-obligation-group-panel.component';
import { PurchaseCouponsViewComponent } from './components/purchase-coupons-view/purchase-coupons-view.component';
import {BondService} from './services/bond.service';
import {UserService} from './services/user.service';
import {MarketTransactionsService} from './services/market-transactions.service';
import { CouponsPurchaseDetailsViewComponent } from './components/coupons-purchase-details-view/coupons-purchase-details-view.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import {InMemoryDataService} from './services/in-memory-data.service';
import {PurchaseCouponService} from './services/purchase-coupon.service';
import {JoinGroupProposalViewComponent} from './components/join-group-proposal-view/join-group-proposal-view.component';
import { GroupJoinRequestDetailsViewComponent } from './components/group-join-request-details-view/group-join-request-details-view.component';
import {GroupJoinRequestService} from './services/group-join-request.service';
import { GroupJoinRequestsPanelViewComponent } from './components/group-join-requests-panel-view/group-join-requests-panel-view.component';
import {SuperTableModule} from './components/super-table/super-table.module';
import { TableExpandableRowsWithFilterComponent } from './components/table-expandable-rows-with-filter/table-expandable-rows-with-filter.component';
import { CreateObligationStrategyViewComponent } from './components/create-obligation-strategy-view/create-obligation-strategy-view.component';

const appRoutes: Routes = [
  { path: 'user-account/registered-services-panel', component: UserRegisteredServiceComponent },
  { path: 'user-account/user-obligation-groups-panel', component: UserObligationGroupsPanelComponent },
  { path: 'create-obligation-group-panel', component: CreateObligationPanelComponent },
  { path: 'obligation-groups', component: ObligationGroupsViewComponent },
  { path: 'obligation-groups/:obligationGroupId/bonds/:bondId', component: BondViewComponent },
  { path: 'obligation-groups/:obligationGroupId', component: ObligationGroupViewComponent },
  { path: 'obligation-groups/:obligationGroupId/group-join-requests', component: GroupJoinRequestsPanelViewComponent },
  { path: 'obligation-groups/:obligationGroupId/create-obligation-strategy', component: CreateObligationStrategyViewComponent },
  { path: 'obligation-groups/:obligationGroupId/bonds/:bondId/purchase-coupons', component: PurchaseCouponsViewComponent },
  { path: 'obligation-groups/:obligationGroupId/bonds/:bondId/purchase-coupons/purchase-details', component: CouponsPurchaseDetailsViewComponent },
  { path: 'obligation-groups/:obligationGroupId/group-join-request-details', component: GroupJoinRequestDetailsViewComponent },
  { path: 'obligation-groups/:obligationGroupId/join-group-proposal', component: JoinGroupProposalViewComponent },
  { path: 'grid-test', component: TableExpandableRowsWithFilterComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ManageUserRegisteredServiceComponent,
    UserRegisteredServiceComponent,
    UserRegisteredServicesComponent,
    UserObligationGroupsPanelComponent,
    RegisteredServiceObligationStrategyComponent,
    CreateObligationPanelComponent,
    CreateObligationGroupPanelComponent,
    ObligationGroupsViewComponent,
    ObligationGroupListItemComponent,
    CircleImageComponent,
    ObligationGroupViewComponent,
    BondListItemComponent,
    BondViewComponent,
    PurchaseCouponsViewComponent,
    CouponsPurchaseDetailsViewComponent,
    JoinGroupProposalViewComponent,
    GroupJoinRequestDetailsViewComponent,
    GroupJoinRequestsPanelViewComponent,
    TableExpandableRowsWithFilterComponent,
    CreateObligationStrategyViewComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    SuperTableModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    // Angular material,
    MatTableModule,
    MatExpansionModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatButtonModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false })
  ],
  providers: [UserRegisteredServiceService, UserUnitsRequestServiceService, UserObligationGroupAccountService,
    ObligationGroupsService, TestService, BondService, UserService, MarketTransactionsService, PurchaseCouponService,
    GroupJoinRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
