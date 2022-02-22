"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuiCheckbox = void 0;
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
var merge_1 = tslib_1.__importDefault(require("lodash/merge"));
exports.MuiCheckbox = react_1.default.memo(function (props) {
    var data = props.data, className = props.className, id = props.id, enabled = props.enabled, uischema = props.uischema, path = props.path, handleChange = props.handleChange, config = props.config;
    var appliedUiSchemaOptions = merge_1.default({}, config, uischema.options);
    var inputProps = { autoFocus: !!appliedUiSchemaOptions.focus };
    // !! causes undefined value to be converted to false, otherwise has no effect
    var checked = !!data;
    return (react_1.default.createElement(material_1.Checkbox, { checked: checked, onChange: function (_ev, isChecked) { return handleChange(path, isChecked); }, className: className, id: id, disabled: !enabled, inputProps: inputProps }));
});
//# sourceMappingURL=MuiCheckbox.js.map