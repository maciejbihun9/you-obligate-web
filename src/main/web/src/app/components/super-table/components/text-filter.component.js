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
var TextFilterComponent = /** @class */ (function () {
    function TextFilterComponent(state) {
        this.state = state;
    }
    // wait 200 miliseconds to not notify a service too quick
    /* onModelChange: Function = debounce(function() {
      this.state.notify();
    }, 200); */
    TextFilterComponent.prototype.onModelChange = function () {
        var _this = this;
        setTimeout(function () {
            _this.state.notify();
        }, 200);
    };
    TextFilterComponent.prototype.clearFilter = function () {
        this.column.filterValue = '';
        this.state.notify();
    };
    TextFilterComponent.prototype.filterVisibility = function () {
        return this.column.isHidden ? 'hidden' : 'visible';
    };
    TextFilterComponent.prototype.ngOnChanges = function (changes) {
        this.filter = this.column.def.filter;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TextFilterComponent.prototype, "column", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], TextFilterComponent.prototype, "placeholderText", void 0);
    TextFilterComponent = __decorate([
        core_1.Component({
            /* tslint:disable-next-line */
            selector: '[super-table-text-filter]',
            template: "\n    <input \n      [style.visibility]=\"filterVisibility()\"\n      class=\"form-control input-sm\"\n      type=\"text\"\n      [(ngModel)]=\"column.filterValue\"\n      (ngModelChange)=\"onModelChange()\"\n      [attr.placeholder]=\"placeholderText\"\n      [attr.title]=\"filter.title\"\n      [class.hasContext] = \"\"\n      [ngClass] = \"{hasContext : !!column.filterValue}\" />\n\n    <button tabindex=\"-1\" *ngIf=\"column.filterValue\" class=\"clear-btn\" role=\"button\" (click)=\"clearFilter($event)\">&times;</button>\n  ",
            styles: ["\n    :host {\n      position: relative;\n      height: 64px;\n    }\n    input {\n      width: 100%;\n      height: 64px;\n      border-style: solid;\n      border-width: 1px 1px 1px 1px;\n      border-color: #EEEEEE;\n      border-radius: 5px;\n    }\n    .hasContent {\n      background: #dff7ff;\n    }\n    .clear-btn {\n      position: absolute;\n      background: transparent;\n      color: black;\n      right: 0;\n      top: 0;\n      border: none;\n      font-size: 120%;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [super_table_state_service_1.SuperTableState])
    ], TextFilterComponent);
    return TextFilterComponent;
}());
exports.TextFilterComponent = TextFilterComponent;
//# sourceMappingURL=text-filter.component.js.map