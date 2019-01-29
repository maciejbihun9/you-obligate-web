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
var SuperTableCellComponent = /** @class */ (function () {
    function SuperTableCellComponent(viewContainer, resolver) {
        this.viewContainer = viewContainer;
        this.resolver = resolver;
    }
    Object.defineProperty(SuperTableCellComponent.prototype, "color", {
        get: function () {
            return this.column.isHidden ? 'white' : 'black';
        },
        enumerable: true,
        configurable: true
    });
    SuperTableCellComponent.prototype.getValue = function () {
        return this.row[this.column.def.key];
    };
    SuperTableCellComponent.prototype.getFormattedValue = function () {
        if (this.column.def.format) {
            return this.column.def.format(this.getValue(), this.row, this.column);
        }
        return this.getValue();
    };
    SuperTableCellComponent.prototype.ngAfterViewInit = function () {
        if (this.column.def.component) {
            if (this.componentRef) {
                this.componentRef.destroy();
            }
            console.log(this.column.def.component);
            var cmpFactory = this.resolver.resolveComponentFactory(this.column.def.component);
            var ctxInjector = this.cmpContainer.injector;
            this.componentRef = this.cmpContainer.createComponent(cmpFactory, 0, ctxInjector);
            var instance = this.componentRef.instance;
            instance['row'] = this.row;
            instance['column'] = this.column;
            instance['key'] = this.column.def.key;
            instance['value'] = this.getValue();
            this.componentRef.changeDetectorRef.detectChanges();
        }
    };
    SuperTableCellComponent.prototype.ngOnDestroy = function () {
        if (this.componentRef) {
            this.componentRef.destroy();
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SuperTableCellComponent.prototype, "row", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SuperTableCellComponent.prototype, "column", void 0);
    __decorate([
        core_1.ViewChild('cmpContainer', { read: core_1.ViewContainerRef }),
        __metadata("design:type", core_1.ViewContainerRef)
    ], SuperTableCellComponent.prototype, "cmpContainer", void 0);
    __decorate([
        core_1.HostBinding('style.color'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], SuperTableCellComponent.prototype, "color", null);
    SuperTableCellComponent = __decorate([
        core_1.Component({
            /* tslint:disable-next-line */
            selector: '[super-table-cell]',
            template: "\n    <span *ngIf=\"!column.def.component\" [attr.title]=\"getFormattedValue()\">{{ getFormattedValue() }}</span>\n    <span *ngIf=\"column.def.component\" #cmpContainer></span>\n  ",
            styles: ["\n    :host {\n      height: 64px;\n      white-space: nowrap;\n      text-overflow: ellipsis;\n      overflow: hidden;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [core_1.ViewContainerRef, core_1.ComponentFactoryResolver])
    ], SuperTableCellComponent);
    return SuperTableCellComponent;
}());
exports.SuperTableCellComponent = SuperTableCellComponent;
//# sourceMappingURL=super-table-cell.component.js.map