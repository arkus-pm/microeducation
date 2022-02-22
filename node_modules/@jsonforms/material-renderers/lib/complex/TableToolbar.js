"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
/*
  The MIT License

  Copyright (c) 2017-2019 EclipseSource Munich
  https://github.com/eclipsesource/jsonforms

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/
var react_1 = tslib_1.__importDefault(require("react"));
var core_1 = require("@jsonforms/core");
var material_1 = require("@mui/material");
var material_2 = require("@mui/material");
var Add_1 = tslib_1.__importDefault(require("@mui/icons-material/Add"));
var ValidationIcon_1 = tslib_1.__importDefault(require("./ValidationIcon"));
var NoBorderTableCell_1 = tslib_1.__importDefault(require("./NoBorderTableCell"));
var fixedCellSmall = {
    paddingLeft: 0,
    paddingRight: 0,
};
var TableToolbar = react_1.default.memo(function (_a) {
    var numColumns = _a.numColumns, errors = _a.errors, label = _a.label, path = _a.path, addItem = _a.addItem, schema = _a.schema, enabled = _a.enabled;
    return (react_1.default.createElement(material_1.TableRow, null,
        react_1.default.createElement(NoBorderTableCell_1.default, { colSpan: numColumns },
            react_1.default.createElement(material_2.Grid, { container: true, justifyContent: 'flex-start', alignItems: 'center', spacing: 2 },
                react_1.default.createElement(material_2.Grid, { item: true },
                    react_1.default.createElement(material_2.Typography, { variant: 'h6' }, label)),
                react_1.default.createElement(material_2.Grid, { item: true },
                    react_1.default.createElement(material_2.Hidden, { smUp: errors.length === 0 },
                        react_1.default.createElement(material_2.Grid, { item: true },
                            react_1.default.createElement(ValidationIcon_1.default, { id: 'tooltip-validation', errorMessages: errors })))))),
        enabled ? (react_1.default.createElement(NoBorderTableCell_1.default, { align: 'right', style: fixedCellSmall },
            react_1.default.createElement(material_1.Tooltip, { id: 'tooltip-add', title: "Add to " + label, placement: 'bottom' },
                react_1.default.createElement(material_1.IconButton, { "aria-label": "Add to " + label, onClick: addItem(path, core_1.createDefaultValue(schema)), size: 'large' },
                    react_1.default.createElement(Add_1.default, null))))) : null));
});
exports.default = TableToolbar;
//# sourceMappingURL=TableToolbar.js.map