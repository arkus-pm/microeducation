"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialDateControlTester = exports.MaterialDateControl = void 0;
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
var merge_1 = tslib_1.__importDefault(require("lodash/merge"));
var react_1 = tslib_1.__importStar(require("react"));
var core_1 = require("@jsonforms/core");
var react_2 = require("@jsonforms/react");
var material_1 = require("@mui/material");
var lab_1 = require("@mui/lab");
var AdapterDayjs_1 = tslib_1.__importDefault(require("@mui/lab/AdapterDayjs"));
var util_1 = require("../util");
var MaterialDateControl = function (props) {
    var _a, _b;
    var _c = util_1.useFocus(), focused = _c[0], onFocus = _c[1], onBlur = _c[2];
    var description = props.description, id = props.id, errors = props.errors, label = props.label, uischema = props.uischema, visible = props.visible, enabled = props.enabled, required = props.required, path = props.path, handleChange = props.handleChange, data = props.data, config = props.config;
    var isValid = errors.length === 0;
    var appliedUiSchemaOptions = merge_1.default({}, config, uischema.options);
    var showDescription = !core_1.isDescriptionHidden(visible, description, focused, appliedUiSchemaOptions.showUnfocusedDescription);
    var format = (_a = appliedUiSchemaOptions.dateFormat) !== null && _a !== void 0 ? _a : 'YYYY-MM-DD';
    var saveFormat = (_b = appliedUiSchemaOptions.dateSaveFormat) !== null && _b !== void 0 ? _b : 'YYYY-MM-DD';
    var firstFormHelperText = showDescription
        ? description
        : !isValid
            ? errors
            : null;
    var secondFormHelperText = showDescription && !isValid ? errors : null;
    var onChange = react_1.useMemo(function () { return util_1.createOnChangeHandler(path, handleChange, saveFormat); }, [path, handleChange, saveFormat]);
    return (react_1.default.createElement(material_1.Hidden, { xsUp: !visible },
        react_1.default.createElement(lab_1.LocalizationProvider, { dateAdapter: AdapterDayjs_1.default },
            react_1.default.createElement(lab_1.DatePicker, { label: label, value: util_1.getData(data, saveFormat), clearable: true, onChange: onChange, inputFormat: format, disableMaskedInput: true, views: appliedUiSchemaOptions.views, disabled: !enabled, cancelText: appliedUiSchemaOptions.cancelLabel, clearText: appliedUiSchemaOptions.clearLabel, okText: appliedUiSchemaOptions.okLabel, renderInput: function (params) { return (react_1.default.createElement(material_1.TextField, tslib_1.__assign({}, params, { id: id + '-input', required: required && !appliedUiSchemaOptions.hideRequiredAsterisk, autoFocus: appliedUiSchemaOptions.focus, error: !isValid, fullWidth: !appliedUiSchemaOptions.trim, inputProps: tslib_1.__assign(tslib_1.__assign({}, params.inputProps), { type: 'text' }), InputLabelProps: data ? { shrink: true } : undefined, onFocus: onFocus, onBlur: onBlur, variant: 'standard' }))); } }),
            react_1.default.createElement(material_1.FormHelperText, { error: !isValid && !showDescription }, firstFormHelperText),
            react_1.default.createElement(material_1.FormHelperText, { error: !isValid }, secondFormHelperText))));
};
exports.MaterialDateControl = MaterialDateControl;
exports.materialDateControlTester = core_1.rankWith(4, core_1.isDateControl);
exports.default = react_2.withJsonFormsControlProps(exports.MaterialDateControl);
//# sourceMappingURL=MaterialDateControl.js.map