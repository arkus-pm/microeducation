"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialArrayControlRenderer = void 0;
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
var react_1 = tslib_1.__importStar(require("react"));
var react_2 = require("@jsonforms/react");
var MaterialTableControl_1 = require("./MaterialTableControl");
var material_1 = require("@mui/material");
var DeleteDialog_1 = require("./DeleteDialog");
var MaterialArrayControlRenderer = function (props) {
    var _a = react_1.useState(false), open = _a[0], setOpen = _a[1];
    var _b = react_1.useState(undefined), path = _b[0], setPath = _b[1];
    var _c = react_1.useState(undefined), rowData = _c[0], setRowData = _c[1];
    var removeItems = props.removeItems, visible = props.visible;
    var openDeleteDialog = react_1.useCallback(function (p, rowIndex) {
        setOpen(true);
        setPath(p);
        setRowData(rowIndex);
    }, [setOpen, setPath, setRowData]);
    var deleteCancel = react_1.useCallback(function () { return setOpen(false); }, [setOpen]);
    var deleteConfirm = react_1.useCallback(function () {
        var p = path.substring(0, path.lastIndexOf(('.')));
        removeItems(p, [rowData])();
        setOpen(false);
    }, [setOpen, path, rowData]);
    var deleteClose = react_1.useCallback(function () { return setOpen(false); }, [setOpen]);
    return (react_1.default.createElement(material_1.Hidden, { xsUp: !visible },
        react_1.default.createElement(MaterialTableControl_1.MaterialTableControl, tslib_1.__assign({}, props, { openDeleteDialog: openDeleteDialog })),
        react_1.default.createElement(DeleteDialog_1.DeleteDialog, { open: open, onCancel: deleteCancel, onConfirm: deleteConfirm, onClose: deleteClose })));
};
exports.MaterialArrayControlRenderer = MaterialArrayControlRenderer;
exports.default = react_2.withJsonFormsArrayLayoutProps(exports.MaterialArrayControlRenderer);
//# sourceMappingURL=MaterialArrayControlRenderer.js.map