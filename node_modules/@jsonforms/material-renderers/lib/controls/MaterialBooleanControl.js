"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialBooleanControlTester = exports.MaterialBooleanControl = void 0;
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
var isEmpty_1 = tslib_1.__importDefault(require("lodash/isEmpty"));
var react_1 = tslib_1.__importDefault(require("react"));
var core_1 = require("@jsonforms/core");
var react_2 = require("@jsonforms/react");
var material_1 = require("@mui/material");
var MuiCheckbox_1 = require("../mui-controls/MuiCheckbox");
var MaterialBooleanControl = function (_a) {
    var data = _a.data, visible = _a.visible, label = _a.label, id = _a.id, enabled = _a.enabled, uischema = _a.uischema, schema = _a.schema, rootSchema = _a.rootSchema, handleChange = _a.handleChange, errors = _a.errors, path = _a.path, config = _a.config;
    return (react_1.default.createElement(material_1.Hidden, { xsUp: !visible },
        react_1.default.createElement(material_1.FormControlLabel, { label: label, id: id, control: react_1.default.createElement(MuiCheckbox_1.MuiCheckbox, { id: id + "-input", isValid: isEmpty_1.default(errors), data: data, enabled: enabled, visible: visible, path: path, uischema: uischema, schema: schema, rootSchema: rootSchema, handleChange: handleChange, errors: errors, config: config }) })));
};
exports.MaterialBooleanControl = MaterialBooleanControl;
exports.materialBooleanControlTester = core_1.rankWith(2, core_1.isBooleanControl);
exports.default = react_2.withJsonFormsControlProps(exports.MaterialBooleanControl);
//# sourceMappingURL=MaterialBooleanControl.js.map