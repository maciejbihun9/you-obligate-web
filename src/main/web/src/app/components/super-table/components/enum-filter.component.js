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
var EnumFilterDropdownComponent = /** @class */ (function () {
    function EnumFilterDropdownComponent(state, el) {
        this.state = state;
        this.el = el;
    }
    EnumFilterDropdownComponent.prototype.ngOnInit = function () {
        var styles = this.el.nativeElement.style;
        styles.top = this.top + 'px';
        styles.left = this.left + 'px';
        styles.width = this.width + 'px';
    };
    EnumFilterDropdownComponent.prototype.ngOnDestroy = function () {
        // to ensure that references to parent component
        // do not prevent GC
        this.destroyMe = undefined;
    };
    EnumFilterDropdownComponent.prototype.onChoiceChange = function () {
        this.state.notify();
    };
    EnumFilterDropdownComponent.prototype.showAll = function () {
        var _this = this;
        this.column.filterValue.forEach(function (val, key) {
            _this.column.filterValue[key] = true;
        });
        /*forEach(this.column.filterValue, (val, key) => {
          this.column.filterValue[key] = true;
        });*/
        this.state.notify();
        if (this.destroyMe) {
            this.destroyMe();
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], EnumFilterDropdownComponent.prototype, "column", void 0);
    EnumFilterDropdownComponent = __decorate([
        core_1.Component({
            selector: 'super-table-enum-filter-dropdown',
            template: "\n    <div class=\"clear-filter\">\n      <button class=\"btn btn-outline-secondary clear-filter-btn\" role=\"button\" (click)=\"showAll()\">show all</button>\n    </div>\n    <div *ngFor=\"let choice of column.def.filterChoices\">\n      <input type=\"checkbox\" [(ngModel)]=\"column.filterValue[choice]\" (ngModelChange)=\"onChoiceChange()\" />\n      {{ choice }}\n    </div>\n    <button role=\"button\" class=\"close-dropdown\" (click)=\"destroyMe()\">&times;</button>\n  ",
            styles: ["\n    :host {\n      position: absolute;\n      background: white;\n      padding: 5px 10px;\n      border: 1px solid #ddd;\n      box-shadow: 0 1px 10px -1px rgba(0,0,0,0.2);\n    }\n    .clear-filter {\n      border-bottom: 1px solid #DDD;\n      padding: 5px 0;\n    }\n    .close-dropdown {\n      position: absolute;\n      top: 5px;\n      right: 10px;\n      border: none;\n      background: transparent;\n      color: #CCC;\n      display: block;\n      width: 20px;\n      height: 20px;\n      line-height: 20px;\n    }\n    .close-dropdown:hover {\n      color: #AAA;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [super_table_state_service_1.SuperTableState,
            core_1.ElementRef])
    ], EnumFilterDropdownComponent);
    return EnumFilterDropdownComponent;
}());
exports.EnumFilterDropdownComponent = EnumFilterDropdownComponent;
var EnumFilterComponent = /** @class */ (function () {
    function EnumFilterComponent(state, el, viewContainer, resolver) {
        this.state = state;
        this.el = el;
        this.viewContainer = viewContainer;
        this.resolver = resolver;
        this.disabledChoices = new Set();
        this.disabledFilterCount = 0;
    }
    EnumFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        // initialize filtered values to include all
        this.column.filterValue = {};
        if (this.column.def.filterChoices) {
            this.column.def.filterChoices.forEach(function (choice) {
                _this.column.filterValue[choice] = true;
            });
        }
        this.subscription = this.state.stateChanged$.subscribe(function () {
            // for enabling enum values
            _this.disabledFilterCount = _this.column.filterValue;
            /*this.disabledFilterCount = values(this.column.filterValue)
              .filter(isEnabled => !isEnabled)
              .length;*/
        });
    };
    EnumFilterComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    EnumFilterComponent.prototype.toggleVisibility = function () {
        var _this = this;
        if (this.dropdown) {
            this.dropdown.destroy();
            this.dropdown = undefined;
        }
        else {
            var clientRect = this.el.nativeElement.getBoundingClientRect();
            var cmpFactory = this.resolver.resolveComponentFactory(EnumFilterDropdownComponent);
            var ctxInjector = this.viewContainer.injector;
            var cmpRef = this.viewContainer.createComponent(cmpFactory, 0, ctxInjector);
            cmpRef.instance.column = this.column;
            cmpRef.instance.top = clientRect.top + clientRect.height;
            cmpRef.instance.left = clientRect.left;
            cmpRef.instance.width = clientRect.width;
            cmpRef.instance.destroyMe = function () {
                _this.toggleVisibility();
            };
            this.dropdown = cmpRef;
            document.body.appendChild(cmpRef.location.nativeElement);
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], EnumFilterComponent.prototype, "filter", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], EnumFilterComponent.prototype, "column", void 0);
    EnumFilterComponent = __decorate([
        core_1.Component({
            /* tslint:disable-next-line */
            selector: '[super-table-enum-filter]',
            template: "\n    <button\n      [attr.title]=\"filter.title\"\n      role=\"button\"\n      (click)=\"toggleVisibility()\"\n      [ngClass]=\"{ hasDisabled : disabledFilterCount }\">\n      <strong>{{ filter.placeholder }}:</strong>\n      <span [hidden]=\"disabledFilterCount != 0\">showing all</span>\n      <span [hidden]=\"disabledFilterCount == 0\">filtering {{disabledFilterCount}} value(s)</span>\n    </button>\n\n  ",
            styles: ["\n    :host {\n      position: relative;\n      display: block;\n      height: 100%;\n      font-size: 90%;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n    }\n    button {\n      text-align: left;\n      margin: 0 5px;\n      display: block;\n      width: calc(100% - 10px);\n      height: 100%;\n      background: #ddd;\n      border: none;\n      border-radius: 2px;\n    }\n    button.hasDisabled {\n      background: rgba(22, 140, 239, 0.2);\n    }\n    .enum-filter-dropdown {\n      position: absolute;\n      top: 100%;\n      z-index: 1;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [super_table_state_service_1.SuperTableState,
            core_1.ElementRef,
            core_1.ViewContainerRef,
            core_1.ComponentFactoryResolver])
    ], EnumFilterComponent);
    return EnumFilterComponent;
}());
exports.EnumFilterComponent = EnumFilterComponent;
//# sourceMappingURL=enum-filter.component.js.map