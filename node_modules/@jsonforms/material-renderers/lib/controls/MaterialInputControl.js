"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialInputControl = void 0;
var tslib_1 = require("tslib");
/*
  The MIT License

  Copyright (c) 2017-2021 EclipseSource Munich
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
var material_2 = require("@mui/material");
var merge_1 = tslib_1.__importDefault(require("lodash/merge"));
var util_1 = require("../util");
var MaterialInputControl = function (props) {
    var _a = util_1.useFocus(), focused = _a[0], onFocus = _a[1], onBlur = _a[2];
    var id = props.id, description = props.description, errors = props.errors, label = props.label, uischema = props.uischema, visible = props.visible, required = props.required, config = props.config, input = props.input;
    var isValid = errors.length === 0;
    var appliedUiSchemaOptions = merge_1.default({}, config, uischema.options);
    var showDescription = !core_1.isDescriptionHidden(visible, description, focused, appliedUiSchemaOptions.showUnfocusedDescription);
    var firstFormHelperText = showDescription
        ? description
        : !isValid
            ? errors
            : null;
    var secondFormHelperText = showDescription && !isValid ? errors : null;
    var InnerComponent = input;
    return (react_1.default.createElement(material_1.Hidden, { xsUp: !visible },
        react_1.default.createElement(material_2.FormControl, { fullWidth: !appliedUiSchemaOptions.trim, onFocus: onFocus, onBlur: onBlur, id: id, variant: 'standard' },
            react_1.default.createElement(material_1.InputLabel, { htmlFor: id + '-input', error: !isValid, required: core_1.showAsRequired(required, appliedUiSchemaOptions.hideRequiredAsterisk) }, label),
            react_1.default.createElement(InnerComponent, tslib_1.__assign({}, props, { id: id + '-input', isValid: isValid, visible: visible })),
            react_1.default.createElement(material_2.FormHelperText, { error: !isValid && !showDescription }, firstFormHelperText),
            react_1.default.createElement(material_2.FormHelperText, { error: !isValid }, secondFormHelperText))));
};
exports.MaterialInputControl = MaterialInputControl;
//# sourceMappingURL=MaterialInputControl.js.map