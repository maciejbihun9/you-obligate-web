"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var super_table_state_service_1 = require("../services/super-table-state.service");
var DEFAULT_ROW_HEIGHT = 48;
var SuperTableBodyComponent = /** @class */ (function () {
    function SuperTableBodyComponent(el, state, 
    // resolver knows how to create a component
    resolver) {
        this.el = el;
        this.state = state;
        this.resolver = resolver;
        this.visibleRows = [];
        this.visibleRows = this.rows;
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], SuperTableBodyComponent.prototype, "rows", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SuperTableBodyComponent.prototype, "tableClasses", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], SuperTableBodyComponent.prototype, "bodyHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SuperTableBodyComponent.prototype, "options", void 0);
    __decorate([
        core_1.ViewChild('table'),
        __metadata("design:type", core_1.ElementRef)
    ], SuperTableBodyComponent.prototype, "table", void 0);
    SuperTableBodyComponent = __decorate([
        core_1.Component({
            selector: '[super-table-body]',
            template: "\n    <table [ngClass]=\"tableClasses\" #table>\n      <thead class=\"sizing-thead\">\n        <tr>\n          <th scope=\"col\" *ngFor=\"let column of state.columns\" super-table-header [table]=\"table\" [column]=\"column\" [noHeight]=\"false\"></th>\n        </tr>\n        <tr *ngIf=\"state.hasAnyFilters\" class=\"filter-row\">\n          <td *ngFor=\"let column of state.columns\">\n              <div *ngIf=\"column.hasFilter\" [ngSwitch]=\"column.def.filter.type\">\n                  <div *ngSwitchCase=\"'TEXT'\" super-table-text-filter [placeholderText]=\"column.def.filter.placeholder\" [column]=\"column\"></div>\n                  <div *ngSwitchCase=\"'ENUM'\" super-table-enum-filter [column]=\"column\"></div>\n              </div>\n          </td>\n        </tr>\n      </thead>\n      <tbody class=\"visible-rows\">\n        <tr  *ngFor=\"let row of rows | paginate: { itemsPerPage: 20, currentPage: p }; let i = index\" super-table-row [row]=\"row\"></tr>\n      </tbody>\n      <ng-container #container></ng-container>\n    </table>\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n  ",
            styles: ["\n    :host {\n      height: 800px;\n      display: block;\n      overflow: auto;\n    }\n    table {\n      table-layout: fixed;\n      width: 100%;\n      margin-bottom: 0;\n    }\n    thead.sizing-thead th {\n      padding: 0 !important;\n      border-width: 0;\n    }\n    tbody.dummy-rows, tbody.visible-rows {\n      border-top: none;\n    }\n    tr {\n      height: 48dp;      \n    }\n    tr:hover {\n      background-color: #EEEEEE;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, super_table_state_service_1.SuperTableState,
            core_1.ComponentFactoryResolver])
    ], SuperTableBodyComponent);
    return SuperTableBodyComponent;
}());
exports.SuperTableBodyComponent = SuperTableBodyComponent;
//# sourceMappingURL=super-table-body.component.js.map