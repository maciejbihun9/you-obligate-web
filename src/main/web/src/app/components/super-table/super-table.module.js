"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var super_table_component_1 = require("./components/super-table.component");
var super_table_body_component_1 = require("./components/super-table-body.component");
var super_table_row_component_1 = require("./components/super-table-row.component");
var dummy_rows_component_1 = require("./components/dummy-rows.component");
var table_header_component_1 = require("./components/table-header.component");
var text_filter_component_1 = require("./components/text-filter.component");
var enum_filter_component_1 = require("./components/enum-filter.component");
var ngx_pagination_1 = require("ngx-pagination");
var sort_switch_component_1 = require("./components/sort-switch/sort-switch.component");
var super_table_cell_component_1 = require("./components/super-table-cell.component");
var material_1 = require("@angular/material");
var SuperTableModule = /** @class */ (function () {
    function SuperTableModule() {
    }
    SuperTableModule_1 = SuperTableModule;
    SuperTableModule.forRoot = function () {
        return {
            ngModule: SuperTableModule_1,
            providers: []
        };
    };
    var SuperTableModule_1;
    SuperTableModule = SuperTableModule_1 = __decorate([
        core_1.NgModule({
            // Components declared in this library
            declarations: [
                super_table_component_1.SuperTableComponent,
                super_table_body_component_1.SuperTableBodyComponent,
                super_table_row_component_1.SuperTableRowComponent,
                dummy_rows_component_1.DummyRowsComponent,
                table_header_component_1.TableHeaderComponent,
                super_table_cell_component_1.SuperTableCellComponent,
                table_header_component_1.ResizerComponent,
                text_filter_component_1.TextFilterComponent,
                enum_filter_component_1.EnumFilterComponent,
                enum_filter_component_1.EnumFilterDropdownComponent,
                sort_switch_component_1.SortSwitchComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                ngx_pagination_1.NgxPaginationModule,
                material_1.MatProgressSpinnerModule
            ],
            exports: [
                super_table_component_1.SuperTableComponent,
            ],
            entryComponents: [
                enum_filter_component_1.EnumFilterDropdownComponent
            ]
        })
    ], SuperTableModule);
    return SuperTableModule;
}());
exports.SuperTableModule = SuperTableModule;
//# sourceMappingURL=super-table.module.js.map