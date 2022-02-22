"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuiAutocomplete = void 0;
var tslib_1 = require("tslib");
/*
  The MIT License

  Copyright (c) 2017-2020 EclipseSource Munich
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
var merge_1 = tslib_1.__importDefault(require("lodash/merge"));
var MuiAutocomplete = function (props) {
    var _a;
    var data = props.data, className = props.className, id = props.id, enabled = props.enabled, uischema = props.uischema, path = props.path, handleChange = props.handleChange, options = props.options, config = props.config, getOptionLabel = props.getOptionLabel, renderOption = props.renderOption, filterOptions = props.filterOptions;
    var appliedUiSchemaOptions = merge_1.default({}, config, uischema.options);
    var _b = react_1.default.useState(data !== null && data !== void 0 ? data : ''), inputValue = _b[0], setInputValue = _b[1];
    var findOption = (_a = options.find(function (o) { return o.value === data; })) !== null && _a !== void 0 ? _a : null;
    return (react_1.default.createElement(material_1.Autocomplete, { className: className, id: id, disabled: !enabled, value: findOption, onChange: function (_event, newValue) {
            handleChange(path, newValue === null || newValue === void 0 ? void 0 : newValue.value);
        }, inputValue: inputValue, onInputChange: function (_event, newInputValue) {
            setInputValue(newInputValue);
        }, autoHighlight: true, autoSelect: true, autoComplete: true, fullWidth: true, options: options, getOptionLabel: getOptionLabel || (function (option) { return option === null || option === void 0 ? void 0 : option.label; }), style: { marginTop: 16 }, renderInput: function (params) { return (react_1.default.createElement(material_1.Input, { style: { width: '100%' }, type: 'text', inputProps: params.inputProps, inputRef: params.InputProps.ref, autoFocus: appliedUiSchemaOptions.focus, disabled: !enabled })); }, renderOption: renderOption, filterOptions: filterOptions }));
};
exports.MuiAutocomplete = MuiAutocomplete;
//# sourceMappingURL=MuiAutocomplete.js.map