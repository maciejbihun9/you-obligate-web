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
var rxjs_1 = require("rxjs");
var sortCycle = ['ASC', 'DESC', undefined];
var getNextSortOrder = function (currentSortOrder) {
    var nextIndex = (sortCycle.indexOf(currentSortOrder) + 1) % sortCycle.length;
    return sortCycle[nextIndex];
};
var SuperTableState = /** @class */ (function () {
    function SuperTableState() {
        /**
        * Manages the super data table state.
        * It is Injectable, so it is available in the all application.
        * Data is available through all application and it is not needed to use communication logic,
        * because this state is like a data base is available everywhere.
        * */
        // publicly exposed properties
        this.hasAnyFilters = false;
        this.sortStack = [];
        this.selectedPeriods = new Set();
        /*
        * After each change all subscribers will receive an info about change.
        * They will receive all info, all fields in SuperTableState object
        * */
        this.stateChangedSource = new rxjs_1.BehaviorSubject(this);
        // init observable and observe this subject
        // inform all users that had subscribed to that subject
        this.stateChanged$ = this.stateChangedSource.asObservable();
    }
    SuperTableState.prototype.setColumns = function (columns) {
        var _this = this;
        this.columns = columns.map(function (c) {
            if (!!c.filter) {
                _this.hasAnyFilters = true;
            }
            return {
                id: c.id,
                filterValue: undefined,
                sortOrder: undefined,
                isHidden: false,
                width: c.width || undefined,
                def: c,
                hasSort: !!c.sort,
                hasFilter: !!c.filter
            };
        });
    };
    SuperTableState.prototype.toggleSort = function (colState, doNotClear) {
        // Set next sort order
        colState.sortOrder = getNextSortOrder(colState.sortOrder);
        // Check if we are clearing the rest of the sort stack or not
        if (doNotClear) {
            var curIndex = this.sortStack.indexOf(colState);
            if (curIndex === -1) {
                this.sortStack.push(colState);
            }
            else if (!colState.sortOrder) {
                this.sortStack.splice(curIndex, 1);
            }
        }
        else {
            this.sortStack = colState.sortOrder ? [colState] : [];
            this.columns.forEach(function (column) {
                if (column !== colState) {
                    column.sortOrder = undefined;
                }
            });
        }
        this.notify();
    };
    SuperTableState.prototype.notify = function () {
        // send all instance variables to the users that are listening for this,
        this.stateChangedSource.next(this);
    };
    SuperTableState = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], SuperTableState);
    return SuperTableState;
}());
exports.SuperTableState = SuperTableState;
//# sourceMappingURL=super-table-state.service.js.map