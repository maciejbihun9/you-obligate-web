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
var SuperTableRowComponent = /** @class */ (function () {
    function SuperTableRowComponent(state) {
        this.state = state;
        this.height = '48dp';
    }
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SuperTableRowComponent.prototype, "row", void 0);
    SuperTableRowComponent = __decorate([
        core_1.Component({
            /* tslint:disable-next-line */
            selector: '[super-table-row]',
            template: "<td [style.height]=\"height\" *ngFor=\"let column of state.columns\" super-table-cell [row]=\"row\" [column]=\"column\"></td>"
        }),
        __metadata("design:paramtypes", [super_table_state_service_1.SuperTableState])
    ], SuperTableRowComponent);
    return SuperTableRowComponent;
}());
exports.SuperTableRowComponent = SuperTableRowComponent;
//# sourceMappingURL=super-table-row.component.js.map