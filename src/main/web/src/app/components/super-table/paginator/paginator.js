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
/**
 * @title Configurable paginator
 */
var Paginator = /** @class */ (function () {
    function Paginator() {
        // MatPaginator Inputs
        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
    }
    Paginator.prototype.setPageSizeOptions = function (setPageSizeOptionsInput) {
        this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(function (str) { return +str; });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Paginator.prototype, "length", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Paginator.prototype, "pageSize", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], Paginator.prototype, "pageSizeOptions", void 0);
    Paginator = __decorate([
        core_1.Component({
            selector: 'app-paginator',
            templateUrl: './paginator.html',
            styleUrls: ['./paginator.css'],
        })
    ], Paginator);
    return Paginator;
}());
exports.Paginator = Paginator;
//# sourceMappingURL=paginator.js.map