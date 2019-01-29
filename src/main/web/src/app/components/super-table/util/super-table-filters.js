"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// For date filter
var unitmap = {};
unitmap['second'] = unitmap['sec'] = unitmap['s'] = 1000;
unitmap['minute'] = unitmap['min'] = unitmap['m'] = unitmap['second'] * 60;
unitmap['hour'] = unitmap['hr'] = unitmap['h'] = unitmap['minute'] * 60;
unitmap['day'] = unitmap['d'] = unitmap['hour'] * 24;
unitmap['week'] = unitmap['wk'] = unitmap['w'] = unitmap['day'] * 7;
unitmap['month'] = unitmap['week'] * 4;
unitmap['year'] = unitmap['yr'] = unitmap['y'] = unitmap['day'] * 365;
var clauseExp = /(\d+(?:\.\d+)?)\s*([a-z]+)/;
function parseDateFilter(str) {
    // split on clauses (if any)
    var clauses = str.trim().split(',');
    var total = 0;
    // parse each clause
    for (var i = 0; i < clauses.length; i++) {
        var clause = clauses[i].trim();
        var terms = clauseExp.exec(clause);
        if (!terms) {
            continue;
        }
        var count = parseFloat(terms[1]);
        var unit = terms[2].replace(/s$/, '');
        if (!unitmap.hasOwnProperty(unit)) {
            continue;
        }
        total += count * unitmap[unit];
    }
    return total;
}
exports.superTableFilters = {
    STRING: {
        type: 'TEXT',
        title: 'Search by text, eg. "foo". Use "!" to ' +
            'exclude and "=" to match exact text, e.g. ' +
            '"!bar" or "=baz".',
        isActive: function (filterValue) {
            return !!filterValue && !!filterValue.trim();
        },
        placeholder: 'string search',
        fn: function (term, value, row) {
            term = term.toLowerCase().trim();
            value = String(value).toLowerCase();
            var first = term[0];
            // negate
            if (first === '!') {
                term = term.substr(1);
                if (term === '') {
                    return true;
                }
                return value.indexOf(term) === -1;
            }
            // strict
            if (first === '=') {
                term = term.substr(1);
                return term === value.trim();
            }
            // remove escaping backslashes
            term = term.replace('\\!', '!');
            term = term.replace('\\=', '=');
            return value.indexOf(term) !== -1;
        }
    },
    NUMBER: {
        type: 'TEXT',
        title: 'Search by number, e.g. "123". Optionally use comparator ' +
            'expressions like ">=10" or "<1000". Use "~" for approx. ' +
            'int values, eg. "~3" will match "3.2"',
        isActive: function (filterValue) {
            return !!filterValue && !!filterValue.trim();
        },
        placeholder: 'number search',
        fn: function (term, value, row) {
            var parsedValue = parseFloat(value);
            term = term.trim();
            var firstTwo = term.substr(0, 2);
            var firstChar = term[0];
            var against1 = parseFloat(term.substr(1));
            var against2 = parseFloat(term.substr(2));
            if (firstTwo === '<=') {
                return parsedValue <= against2;
            }
            if (firstTwo === '>=') {
                return parsedValue >= against2;
            }
            if (firstChar === '<') {
                return parsedValue < against1;
            }
            if (firstChar === '>') {
                return parsedValue > against1;
            }
            if (firstChar === '~') {
                return Math.round(parsedValue) === against1;
            }
            if (firstChar === '=') {
                return against1 === parsedValue;
            }
            return value.toString().indexOf(term.toString()) > -1;
        }
    },
    DATE: {
        type: 'TEXT',
        title: 'Search by date. Enter a date string (RFC2822 or ' +
            'ISO 8601 date). You can also type "today", "yesterday", ' +
            '"> 2 days ago", "< 1 day 2 hours ago", etc.',
        isActive: function (filterValue) {
            return !!filterValue && !!filterValue.trim();
        },
        placeholder: 'date search',
        fn: function (term, value) {
            // today
            // yesterday
            // 1 day ago
            // 2 days ago
            // < 1 day ago
            // < 10 minutes ago
            // < 10 min ago
            // < 10 minutes, 50 seconds ago
            // > 10 min, 30 sec ago
            // > 2 days ago
            // >= 1 day ago
            term = term.trim();
            if (!term) {
                return true;
            }
            var numValue = value.valueOf();
            var nowDate = new Date();
            var now = nowDate.valueOf();
            var first_char = term[0];
            var other_chars = (term.substr(1)).trim();
            var lowerbound, upperbound;
            if (first_char === '<') {
                lowerbound = now - parseDateFilter(other_chars);
                return numValue > lowerbound;
            }
            if (first_char === '>') {
                upperbound = now - parseDateFilter(other_chars);
                return numValue < upperbound;
            }
            if (term === 'today') {
                return new Date(numValue).toDateString() === nowDate.toDateString();
            }
            if (term === 'yesterday') {
                return new Date(numValue).toDateString() === new Date(now - unitmap['d']).toDateString();
            }
            var supposedDate = new Date(term);
            if (!isNaN(supposedDate.valueOf())) {
                return new Date(numValue).toDateString() === supposedDate.toDateString();
            }
            return false;
        }
    },
    ENUM: {
        type: 'ENUM',
        title: 'Click to filter rows by discreet values',
        placeholder: 'filters',
        isActive: function (filterValue) {
            if (!filterValue) {
                return false;
            }
            var filterValueObj = filterValue;
            return Object.keys(filterValueObj).some(function (key) {
                return !filterValueObj[key];
            });
        },
        fn: function (filterValue, value, row) {
            var filterValueObj = filterValue;
            return filterValueObj[value];
        }
    }
};
//# sourceMappingURL=super-table-filters.js.map