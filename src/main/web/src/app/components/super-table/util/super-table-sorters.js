"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.superTableSorters = {
    STRING: function (val1, val2) {
        return val1.localeCompare(val2);
    },
    NUMBER: function (val1, val2) {
        return val1 - val2;
    }
};
//# sourceMappingURL=super-table-sorters.js.map