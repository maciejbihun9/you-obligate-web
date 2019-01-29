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
var ResizerComponent = /** @class */ (function () {
    function ResizerComponent(el) {
        this.el = el;
    }
    ResizerComponent_1 = ResizerComponent;
    Object.defineProperty(ResizerComponent.prototype, "title", {
        get: function () {
            return 'Click-and-drag to resize. Click to clear specified width.';
        },
        enumerable: true,
        configurable: true
    });
    ResizerComponent.prototype.grab = function (grabEvt) {
        var _this = this;
        grabEvt.preventDefault();
        var mousedownTime = Date.now();
        var initClientX = grabEvt.clientX;
        var initWidth = this.column.width || this.getActualParentWidth();
        var drag = function (event) {
            var change = event.clientX - initClientX;
            _this.column.width = Math.max(initWidth + change, ResizerComponent_1.MIN_COLUMN_WIDTH);
        };
        var unbindDrag = function () {
            window.removeEventListener('mousemove', drag);
            window.removeEventListener('mouseup', unbindDrag);
            if (Date.now() - mousedownTime < ResizerComponent_1.MAX_CLICK_WAIT) {
                _this.column.width = undefined;
            }
        };
        window.addEventListener('mousemove', drag);
        window.addEventListener('mouseup', unbindDrag);
    };
    ResizerComponent.prototype.stopClick = function (event) {
        event.preventDefault();
        event.stopPropagation();
    };
    ResizerComponent.prototype.getActualParentWidth = function () {
        return this.el.nativeElement.parentElement.offsetWidth;
    };
    var ResizerComponent_1;
    ResizerComponent.MAX_CLICK_WAIT = 250;
    ResizerComponent.MIN_COLUMN_WIDTH = 30;
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ResizerComponent.prototype, "column", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ResizerComponent.prototype, "actualWidth", void 0);
    __decorate([
        core_1.HostBinding('attr.title'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], ResizerComponent.prototype, "title", null);
    __decorate([
        core_1.HostListener('mousedown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], ResizerComponent.prototype, "grab", null);
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], ResizerComponent.prototype, "stopClick", null);
    ResizerComponent = ResizerComponent_1 = __decorate([
        core_1.Component({
            /* tslint:disable-next-line */
            selector: '[super-table-resizer]',
            template: "<div class=\"notch\" [ngClass]=\"{ explicit: column.width }\"></div>",
            styles: ["\n    :host {\n      position: absolute;\n      right: 0;\n      top: 0;\n      width: 5px;\n      height: 100%;\n      cursor: col-resize;\n    }\n    .notch.explicit {\n      background-color: rgba(22, 140, 239, 0.2);\n    }\n    .notch {\n      width: 100%;\n      height: 50%;\n      transform: translateY(50%);\n      box-shadow: inset 1px 0 #DDD;\n    }\n  "]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef])
    ], ResizerComponent);
    return ResizerComponent;
}());
exports.ResizerComponent = ResizerComponent;
var TableHeaderComponent = /** @class */ (function () {
    function TableHeaderComponent(el, state) {
        this.el = el;
        this.state = state;
        this.noHeight = false;
        this.SORT_TITLE = 'Click to change sort order. Shift-click to sort on multiple columns.';
    }
    TableHeaderComponent.prototype.getValue = function () {
        return this.column.def.label;
    };
    TableHeaderComponent.prototype.tabMargin = function () {
        return this.column.isHidden ? '16px' : '0px';
    };
    TableHeaderComponent.prototype.handleSort = function () {
        if (this.column.hasSort) {
            this.state.toggleSort(this.column, false);
        }
    };
    // manages header visibility
    TableHeaderComponent.prototype.tableHeaderVisibility = function () {
        return this.column.isHidden ? 'hidden' : 'visible';
    };
    // make column name be vertical
    TableHeaderComponent.prototype.writingMode = function () {
        return this.column.isHidden ? 'tb-rl' : '';
    };
    Object.defineProperty(TableHeaderComponent.prototype, "width", {
        get: function () {
            return (typeof this.column.width === 'number') ? this.column.width + 'px' : 'auto';
        },
        enumerable: true,
        configurable: true
    });
    TableHeaderComponent.prototype.handleClick = function (event) {
        event.preventDefault();
    };
    // Manages column visibility
    TableHeaderComponent.prototype.closeColumn = function () {
        if (this.column.isHidden) {
            this.column.width = 'auto';
            this.column.isHidden = false;
        }
        else {
            this.column.width = 32;
            this.column.isHidden = true;
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", core_1.ElementRef)
    ], TableHeaderComponent.prototype, "table", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TableHeaderComponent.prototype, "column", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], TableHeaderComponent.prototype, "noHeight", void 0);
    __decorate([
        core_1.HostBinding('style.width'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [])
    ], TableHeaderComponent.prototype, "width", null);
    __decorate([
        core_1.HostListener('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], TableHeaderComponent.prototype, "handleClick", null);
    TableHeaderComponent = __decorate([
        core_1.Component({
            /* tslint:disable-next-line */
            selector: '[super-table-header]',
            template: "\n    <div  [style.writingMode]=\"writingMode()\" [style.top]=\"tabMargin()\" *ngIf=\"!noHeight\" class=\"table-header-div\" [title]=\"SORT_TITLE\">\n      <app-sort-switch [style.visibility]=\"tableHeaderVisibility()\" (click)=\"handleSort()\" [sortOrder]=\"column.sortOrder\"></app-sort-switch>\n      <span >\n        {{ getValue() }}\n      </span>\n    </div>\n    <div *ngIf=\"!noHeight && !column.def.lockWidth\" super-table-resizer [column]=\"column\"></div>\n    <input [class.direction]=\"this.column.isHidden\" (click)=\"closeColumn()\" type=\"image\" src=\"../../../assets/right_arrow.png\" id=\"hide-column-btn\" />\n  ",
            styles: ["\n    :host {\n      height: 64px;\n      background-color: white;\n      position: relative;\n      -webkit-touch-callout: none;\n      -webkit-user-select: none;\n      -khtml-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n    }\n    :host:hover .sort-icon {\n      opacity: 1;\n    }\n    .table-header-div {\n      position: relative;\n      display: block;\n    }\n    \n    .direction {\n      -webkit-transform:rotateY(180deg);\n      -moz-transform:rotateY(180deg);\n      -o-transform:rotateY(180deg);\n      -ms-transform:rotateY(180deg);\n    }\n\n    .sort-icon {\n      font-size: 70%;\n      opacity: 1;\n      color: #168cef;\n      text-shadow: 0 1px 2px rgba(22, 140, 239, 0.6);\n    }\n    .sort-icon .no-sort {\n      opacity: 0.3;\n      text-shadow: none;\n      color: black;\n    }\n    #hide-column-btn {\n      position: absolute;\n      right: 8px;\n      top: 8px;\n      height: 6px;\n    }\n    \n  "]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, super_table_state_service_1.SuperTableState])
    ], TableHeaderComponent);
    return TableHeaderComponent;
}());
exports.TableHeaderComponent = TableHeaderComponent;
//# sourceMappingURL=table-header.component.js.map