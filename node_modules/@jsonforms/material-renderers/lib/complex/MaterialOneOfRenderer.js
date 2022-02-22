"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialOneOfControlTester = exports.MaterialOneOfRenderer = void 0;
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
var isEmpty_1 = tslib_1.__importDefault(require("lodash/isEmpty"));
var core_1 = require("@jsonforms/core");
var material_1 = require("@mui/material");
var react_2 = require("@jsonforms/react");
var CombinatorProperties_1 = tslib_1.__importDefault(require("./CombinatorProperties"));
var MaterialOneOfRenderer = function (_a) {
    var handleChange = _a.handleChange, schema = _a.schema, path = _a.path, renderers = _a.renderers, cells = _a.cells, rootSchema = _a.rootSchema, id = _a.id, visible = _a.visible, indexOfFittingSchema = _a.indexOfFittingSchema, uischema = _a.uischema, uischemas = _a.uischemas, data = _a.data;
    var _b = react_1.useState(false), open = _b[0], setOpen = _b[1];
    var _c = react_1.useState(indexOfFittingSchema || 0), selectedIndex = _c[0], setSelectedIndex = _c[1];
    var _d = react_1.useState(0), newSelectedIndex = _d[0], setNewSelectedIndex = _d[1];
    var handleClose = react_1.useCallback(function () { return setOpen(false); }, [setOpen]);
    var cancel = react_1.useCallback(function () {
        setOpen(false);
    }, [setOpen]);
    var _schema = core_1.resolveSubSchemas(schema, rootSchema, 'oneOf');
    var oneOfRenderInfos = core_1.createCombinatorRenderInfos(_schema.oneOf, rootSchema, 'oneOf', uischema, path, uischemas);
    var openNewTab = function (newIndex) {
        handleChange(path, core_1.createDefaultValue(schema.oneOf[newIndex]));
        setSelectedIndex(newIndex);
    };
    var confirm = react_1.useCallback(function () {
        openNewTab(newSelectedIndex);
        setOpen(false);
    }, [handleChange, core_1.createDefaultValue, newSelectedIndex]);
    var handleTabChange = react_1.useCallback(function (_event, newOneOfIndex) {
        setNewSelectedIndex(newOneOfIndex);
        if (isEmpty_1.default(data)) {
            openNewTab(newOneOfIndex);
        }
        else {
            setOpen(true);
        }
    }, [setOpen, setSelectedIndex, data]);
    return (react_1.default.createElement(material_1.Hidden, { xsUp: !visible },
        react_1.default.createElement(CombinatorProperties_1.default, { schema: _schema, combinatorKeyword: 'oneOf', path: path }),
        react_1.default.createElement(material_1.Tabs, { value: selectedIndex, onChange: handleTabChange }, oneOfRenderInfos.map(function (oneOfRenderInfo) { return react_1.default.createElement(material_1.Tab, { key: oneOfRenderInfo.label, label: oneOfRenderInfo.label }); })),
        oneOfRenderInfos.map(function (oneOfRenderInfo, oneOfIndex) { return (selectedIndex === oneOfIndex && (react_1.default.createElement(react_2.JsonFormsDispatch, { key: oneOfIndex, schema: oneOfRenderInfo.schema, uischema: oneOfRenderInfo.uischema, path: path, renderers: renderers, cells: cells }))); }),
        react_1.default.createElement(material_1.Dialog, { open: open, onClose: handleClose, "aria-labelledby": 'alert-dialog-title', "aria-describedby": 'alert-dialog-description' },
            react_1.default.createElement(material_1.DialogTitle, { id: 'alert-dialog-title' }, 'Clear form?'),
            react_1.default.createElement(material_1.DialogContent, null,
                react_1.default.createElement(material_1.DialogContentText, { id: 'alert-dialog-description' }, "Your data will be cleared if you navigate away from this tab. Do you want to proceed?")),
            react_1.default.createElement(material_1.DialogActions, null,
                react_1.default.createElement(material_1.Button, { onClick: cancel, color: 'primary' }, "No"),
                react_1.default.createElement(material_1.Button, { onClick: confirm, color: 'primary', autoFocus: true, id: "oneOf-" + id + "-confirm-yes" }, "Yes")))));
};
exports.MaterialOneOfRenderer = MaterialOneOfRenderer;
exports.materialOneOfControlTester = core_1.rankWith(3, core_1.isOneOfControl);
exports.default = react_2.withJsonFormsOneOfProps(exports.MaterialOneOfRenderer);
//# sourceMappingURL=MaterialOneOfRenderer.js.map