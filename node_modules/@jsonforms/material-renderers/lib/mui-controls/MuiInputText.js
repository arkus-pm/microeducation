"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MuiInputText = void 0;
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
var Close_1 = tslib_1.__importDefault(require("@mui/icons-material/Close"));
var util_1 = require("../util");
exports.MuiInputText = react_1.default.memo(function (props) {
    var _a, _b, _c;
    var _d = react_1.useState(false), showAdornment = _d[0], setShowAdornment = _d[1];
    var data = props.data, config = props.config, className = props.className, id = props.id, enabled = props.enabled, uischema = props.uischema, isValid = props.isValid, path = props.path, handleChange = props.handleChange, schema = props.schema, muiInputProps = props.muiInputProps, inputComponent = props.inputComponent;
    var maxLength = schema.maxLength;
    var appliedUiSchemaOptions = merge_1.default({}, config, uischema.options);
    var inputProps;
    if (appliedUiSchemaOptions.restrict) {
        inputProps = { maxLength: maxLength };
    }
    else {
        inputProps = {};
    }
    inputProps = merge_1.default(inputProps, muiInputProps);
    if (appliedUiSchemaOptions.trim && maxLength !== undefined) {
        inputProps.size = maxLength;
    }
    ;
    var _e = util_1.useDebouncedChange(handleChange, '', data, path), inputText = _e[0], onChange = _e[1], onClear = _e[2];
    var onPointerEnter = function () { return setShowAdornment(true); };
    var onPointerLeave = function () { return setShowAdornment(false); };
    var theme = material_1.useTheme();
    var closeStyle = {
        background: ((_c = (_b = (_a = theme.jsonforms) === null || _a === void 0 ? void 0 : _a.input) === null || _b === void 0 ? void 0 : _b.delete) === null || _c === void 0 ? void 0 : _c.background) || theme.palette.background.default,
        borderRadius: '50%'
    };
    return (react_1.default.createElement(material_1.Input, { type: appliedUiSchemaOptions.format === 'password' ? 'password' : 'text', value: inputText, onChange: onChange, className: className, id: id, disabled: !enabled, autoFocus: appliedUiSchemaOptions.focus, multiline: appliedUiSchemaOptions.multi, fullWidth: !appliedUiSchemaOptions.trim || maxLength === undefined, inputProps: inputProps, error: !isValid, onPointerEnter: onPointerEnter, onPointerLeave: onPointerLeave, endAdornment: react_1.default.createElement(material_1.InputAdornment, { position: 'end', style: {
                display: !showAdornment || !enabled || data === undefined ? 'none' : 'flex',
                position: 'absolute',
                right: 0
            } },
            react_1.default.createElement(material_1.IconButton, { "aria-label": 'Clear input field', onClick: onClear, size: 'large' },
                react_1.default.createElement(Close_1.default, { style: closeStyle }))), inputComponent: inputComponent }));
});
//# sourceMappingURL=MuiInputText.js.map