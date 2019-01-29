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
var platform_browser_1 = require("@angular/platform-browser");
var SuperTableComponent = /** @class */ (function () {
    function SuperTableComponent(el, state, sanitizer) {
        this.el = el;
        this.state = state;
        this.sanitizer = sanitizer;
        this.oppsDownloadUrlEmitter = new core_1.EventEmitter();
        this.downloadOppsUrl = "";
        // properties
        this.backgroundColor = "white";
        this.isReady = false;
        this.hasError = false;
    }
    SuperTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        // register sub for table state
        // after each change filter rows again
        this.subscription = this.state.stateChanged$.subscribe(function () { return _this.sortAndFilterRows(); });
        this.changeDownloadOppsUrl();
    };
    SuperTableComponent.prototype.changeDownloadOppsUrl = function () {
        var blob = new Blob(['\ufeff' + JSON.stringify(this.filteredSortedRows)], { type: 'text/json;charset=utf-8;' });
        this.downloadOppsUrl = URL.createObjectURL(blob);
        this.oppsDownloadUrlEmitter.emit(this.sanitizer.bypassSecurityTrustUrl(this.downloadOppsUrl));
    };
    SuperTableComponent.prototype.ngAfterContentInit = function () {
        if (this.options.autoHeight) {
            var parentHeight = this.el.nativeElement.parentElement.clientHeight;
            this.setTableHeight(parentHeight);
        }
        this.isReady = true;
    };
    SuperTableComponent.prototype.ngOnChanges = function (changes) {
        // Inform state of columns changes
        this.state.setColumns(changes['columns'].currentValue);
        this.sortAndFilterRows();
    };
    SuperTableComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    SuperTableComponent.prototype.setTableHeight = function (totalHeight) {
        this.bodyHeight = totalHeight;
    };
    SuperTableComponent.prototype.sortAndFilterRows = function () {
        var _this = this;
        // Search for columns with values
        var activeFilterColumns = this.state.columns.filter(function (c) {
            return !!c.def.filter && !!c.def.filter.isActive(c.filterValue);
        });
        // if there is at least one column with value
        if (activeFilterColumns.length) {
            this.filteredSortedRows = this.rows.filter(function (row) {
                for (var i = 0; i < activeFilterColumns.length; i++) {
                    var colState = activeFilterColumns[i];
                    var val = row[colState.def.key];
                    var filterResult = false;
                    if (colState.def.filter) {
                        filterResult = colState.def.filter.fn(colState.filterValue, val, row);
                        if (filterResult === false) {
                            return false;
                        }
                    }
                }
                return true;
            });
        }
        else {
            this.filteredSortedRows = this.rows.slice();
        }
        // Sorting
        this.filteredSortedRows.sort(function (a, b) {
            for (var i = 0; i < _this.state.sortStack.length; i++) {
                var colState = _this.state.sortStack[i];
                var val1 = a[colState.def.key];
                var val2 = b[colState.def.key];
                var compareResult = 0;
                if (colState.def.sort) {
                    compareResult = colState.sortOrder === 'ASC'
                        ? colState.def.sort(val1, val2, a, b)
                        : colState.def.sort(val2, val1, b, a);
                }
                if (compareResult !== 0) {
                    return compareResult;
                }
            }
            return 0;
        });
        this.changeDownloadOppsUrl();
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], SuperTableComponent.prototype, "rows", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], SuperTableComponent.prototype, "columns", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SuperTableComponent.prototype, "options", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], SuperTableComponent.prototype, "tableClasses", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Boolean)
    ], SuperTableComponent.prototype, "dataIsLoading", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], SuperTableComponent.prototype, "oppsDownloadUrlEmitter", void 0);
    SuperTableComponent = __decorate([
        core_1.Component({
            selector: '[super-table]',
            template: "\n      <mat-progress-spinner *ngIf=\"dataIsLoading\" class=\"progress-spinner\" mode=\"indeterminate\" ></mat-progress-spinner>\n      <div super-table-body\n      *ngIf=\"!dataIsLoading\"\n      [rows]=\"filteredSortedRows\"\n      [tableClasses]=\"tableClasses\"\n      [options]=\"options\"\n      [style.height]=\"bodyHeight + 'px'\"\n      [style.backgroundColor]=\"backgroundColor\"\n      [bodyHeight]=\"bodyHeight\">\n    </div>\n  ",
            styles: ["\n\n    .progress-spinner {\n          top: 45%;\n          left: 45%;\n    }\n    \n    :host {\n      box-shadow: 3px 3px 6px 3px lightgray;\n      position: relative;\n      display: block;\n      height: 800px;\n    }\n  "],
            providers: [super_table_state_service_1.SuperTableState]
        }),
        __metadata("design:paramtypes", [core_1.ElementRef, super_table_state_service_1.SuperTableState, platform_browser_1.DomSanitizer])
    ], SuperTableComponent);
    return SuperTableComponent;
}());
exports.SuperTableComponent = SuperTableComponent;
//# sourceMappingURL=super-table.component.js.map