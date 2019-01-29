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
var DummyRowsComponent = /** @class */ (function () {
    function DummyRowsComponent() {
        this.BG_IMAGE_DATA = [
            'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAlCAYAAACDKIOp',
            'AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABtJREFUeNpiuH',
            'v37n+G////MzAxAMHQIQACDAC7twbaN2nkgwAAAABJRU5ErkJggg=='
        ].join('');
    }
    DummyRowsComponent.prototype.rowStyleHeight = function () {
        var height = this.rowHeight * this.rowCount;
        return height + "px";
    };
    DummyRowsComponent.prototype.backgroundSize = function () {
        return "auto " + this.rowHeight + "px";
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DummyRowsComponent.prototype, "rowHeight", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DummyRowsComponent.prototype, "rowCount", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], DummyRowsComponent.prototype, "columnCount", void 0);
    DummyRowsComponent = __decorate([
        core_1.Component({
            /* tslint:disable-next-line */
            selector: '[super-table-dummy-rows]',
            template: "\n    <tr [style.height]=\"rowStyleHeight()\">\n      <td\n        [attr.colspan]=\"columnCount\"\n        [style.backgroundImage]=\"'url(' + BG_IMAGE_DATA + ')'\"\n        [style.backgroundSize]=\"backgroundSize()\">\n      </td>\n    </tr>\n  ",
            styles: ["\n    :host {\n      border: none !important;\n    }\n    td {\n      padding: 0 !important;\n      border: none !important;\n      background-repeat: repeat;\n      background-position: 0 -1px;\n    }\n\n  "]
        })
    ], DummyRowsComponent);
    return DummyRowsComponent;
}());
exports.DummyRowsComponent = DummyRowsComponent;
//# sourceMappingURL=dummy-rows.component.js.map