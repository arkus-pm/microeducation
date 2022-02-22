"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuiInputNumberFormat = void 0;
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
var material_1 = require("@mui/material");
var merge_1 = tslib_1.__importDefault(require("lodash/merge"));
var util_1 = require("../util");
exports.MuiInputNumberFormat = react_1.default.memo(function (props) {
    var className = props.className, id = props.id, enabled = props.enabled, uischema = props.uischema, isValid = props.isValid, path = props.path, handleChange = props.handleChange, schema = props.schema, config = props.config;
    var maxLength = schema.maxLength;
    var appliedUiSchemaOptions = merge_1.default({}, config, uischema.options);
    var inputProps;
    if (appliedUiSchemaOptions.restrict) {
        inputProps = { maxLength: maxLength };
    }
    else {
        inputProps = {};
    }
    var formattedNumber = props.toFormatted(props.data);
    var validStringNumber = react_1.useCallback(function (ev) { return props.fromFormatted(ev.currentTarget.value); }, [props.fromFormatted]);
    var _a = util_1.useDebouncedChange(handleChange, '', formattedNumber, path, validStringNumber), inputValue = _a[0], onChange = _a[1];
    return (react_1.default.createElement(material_1.Input, { type: 'text', value: inputValue, onChange: onChange, className: className, id: id, disabled: !enabled, autoFocus: appliedUiSchemaOptions.focus, multiline: appliedUiSchemaOptions.multi, fullWidth: !appliedUiSchemaOptions.trim || maxLength === undefined, inputProps: inputProps, error: !isValid }));
});
//# sourceMappingURL=MuiInputNumberFormat.js.map