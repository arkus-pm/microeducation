"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialNativeControlTester = exports.MaterialNativeControl = void 0;
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
var react_2 = require("@jsonforms/react");
var merge_1 = tslib_1.__importDefault(require("lodash/merge"));
var util_1 = require("../util");
var MaterialNativeControl = function (props) {
    var _a;
    var _b = util_1.useFocus(), focused = _b[0], onFocus = _b[1], onBlur = _b[2];
    var id = props.id, errors = props.errors, label = props.label, schema = props.schema, description = props.description, enabled = props.enabled, visible = props.visible, required = props.required, path = props.path, handleChange = props.handleChange, data = props.data, config = props.config;
    var isValid = errors.length === 0;
    var appliedUiSchemaOptions = merge_1.default({}, config, props.uischema.options);
    var _c = util_1.useDebouncedChange(handleChange, '', data, path), inputValue = _c[0], onChange = _c[1];
    var fieldType = (_a = appliedUiSchemaOptions.format) !== null && _a !== void 0 ? _a : schema.format;
    var showDescription = !core_1.isDescriptionHidden(visible, description, focused, appliedUiSchemaOptions.showUnfocusedDescription);
    return (react_1.default.createElement(material_1.Hidden, { xsUp: !visible },
        react_1.default.createElement(material_1.TextField, { required: core_1.showAsRequired(required, appliedUiSchemaOptions.hideRequiredAsterisk), id: id + '-input', label: label, type: fieldType, error: !isValid, disabled: !enabled, fullWidth: !appliedUiSchemaOptions.trim, onFocus: onFocus, onBlur: onBlur, helperText: !isValid ? errors : showDescription ? description : null, InputLabelProps: { shrink: true }, value: inputValue, onChange: onChange })));
};
exports.MaterialNativeControl = MaterialNativeControl;
exports.materialNativeControlTester = core_1.rankWith(2, core_1.or(core_1.isDateControl, core_1.isTimeControl));
exports.default = react_2.withJsonFormsControlProps(exports.MaterialNativeControl);
//# sourceMappingURL=MaterialNativeControl.js.map