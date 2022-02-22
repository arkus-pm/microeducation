"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteDialog = void 0;
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
var material_1 = require("@mui/material");
exports.DeleteDialog = react_1.default.memo(function (_a) {
    var open = _a.open, onClose = _a.onClose, onConfirm = _a.onConfirm, onCancel = _a.onCancel;
    return (react_1.default.createElement(material_1.Dialog, { open: open, keepMounted: true, onClose: onClose, "aria-labelledby": 'alert-dialog-confirmdelete-title', "aria-describedby": 'alert-dialog-confirmdelete-description' },
        react_1.default.createElement(material_1.DialogTitle, { id: 'alert-dialog-confirmdelete-title' }, 'Confirm Deletion'),
        react_1.default.createElement(material_1.DialogContent, null,
            react_1.default.createElement(material_1.DialogContentText, { id: 'alert-dialog-confirmdelete-description' }, "Are you sure you want to delete the selected entry?")),
        react_1.default.createElement(material_1.DialogActions, null,
            react_1.default.createElement(material_1.Button, { onClick: onCancel, color: 'primary' }, "No"),
            react_1.default.createElement(material_1.Button, { onClick: onConfirm, color: 'primary' }, "Yes"))));
});
//# sourceMappingURL=DeleteDialog.js.map