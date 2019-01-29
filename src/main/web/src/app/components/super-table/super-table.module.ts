import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SuperTableComponent } from './components/super-table.component';
import { SuperTableBodyComponent } from './components/super-table-body.component';
import { SuperTableRowComponent } from './components/super-table-row.component';
import { DummyRowsComponent } from './components/dummy-rows.component';
import { TableHeaderComponent, ResizerComponent } from './components/table-header.component';
import { TextFilterComponent } from './components/text-filter.component';
import { EnumFilterComponent, EnumFilterDropdownComponent } from './components/enum-filter.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {SortSwitchComponent} from './components/sort-switch/sort-switch.component';
import {SuperTableCellComponent} from './components/super-table-cell.component';
import {MatProgressSpinnerModule} from "@angular/material";

@NgModule({
  // Components declared in this library
  declarations: [
    SuperTableComponent,
    SuperTableBodyComponent,
    SuperTableRowComponent,
    DummyRowsComponent,
    TableHeaderComponent,
    SuperTableCellComponent,
    ResizerComponent,
    TextFilterComponent,
    EnumFilterComponent,
    EnumFilterDropdownComponent,
    SortSwitchComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    MatProgressSpinnerModule
  ],
  exports: [
    SuperTableComponent,
  ],
  entryComponents: [
    EnumFilterDropdownComponent
  ]
})
export class SuperTableModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SuperTableModule,
      providers: []
    };
  }
}
