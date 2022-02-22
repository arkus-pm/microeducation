"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialSliderControlTester = exports.MaterialSliderControl = void 0;
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
var core_1 = require("@jsonforms/core");
var react_2 = require("@jsonforms/react");
var material_1 = require("@mui/material");
var merge_1 = tslib_1.__importDefault(require("lodash/merge"));
var util_1 = require("../util");
var MaterialSliderControl = function (props) {
    var _a = util_1.useFocus(), focused = _a[0], onFocus = _a[1], onBlur = _a[2];
    var id = props.id, data = props.data, description = props.description, enabled = props.enabled, errors = props.errors, label = props.label, schema = props.schema, handleChange = props.handleChange, visible = props.visible, path = props.path, required = props.required, config = props.config;
    var isValid = errors.length === 0;
    var appliedUiSchemaOptions = merge_1.default({}, config, props.uischema.options);
    var labelStyle = {
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        width: '100%'
    };
    var rangeContainerStyle = {
        display: 'flex'
    };
    var rangeItemStyle = {
        flexGrow: '1'
    };
    var sliderStyle = {
        marginTop: '7px'
    };
    var showDescription = !core_1.isDescriptionHidden(visible, description, focused, appliedUiSchemaOptions.showUnfocusedDescription);
    var onChange = react_1.useCallback(function (_ev, value) { return handleChange(path, Number(value)); }, [path, handleChange]);
    return (react_1.default.createElement(material_1.Hidden, { xsUp: !visible },
        react_1.default.createElement(material_1.FormControl, { fullWidth: !appliedUiSchemaOptions.trim, onFocus: onFocus, onBlur: onBlur, id: id },
            react_1.default.createElement(material_1.FormLabel, { htmlFor: id, error: !isValid, component: 'legend', required: core_1.showAsRequired(required, appliedUiSchemaOptions.hideRequiredAsterisk) },
                react_1.default.createElement(material_1.Typography, { id: id + '-typo', style: labelStyle, variant: 'caption' }, label)),
            react_1.default.createElement("div", { style: rangeContainerStyle },
                react_1.default.createElement(material_1.Typography, { style: rangeItemStyle, variant: 'caption', align: 'left' }, schema.minimum),
                react_1.default.createElement(material_1.Typography, { style: rangeItemStyle, variant: 'caption', align: 'right' }, schema.maximum)),
            react_1.default.createElement(material_1.Slider, { style: sliderStyle, min: schema.minimum, max: schema.maximum, value: Number(data || schema.default), onChange: onChange, id: id + '-input', disabled: !enabled, step: schema.multipleOf || 1 }),
            react_1.default.createElement(material_1.FormHelperText, { error: !isValid }, !isValid ? errors : showDescription ? description : null))));
};
exports.MaterialSliderControl = MaterialSliderControl;
exports.materialSliderControlTester = core_1.rankWith(4, core_1.isRangeControl);
exports.default = react_2.withJsonFormsControlProps(exports.MaterialSliderControl);
//# sourceMappingURL=MaterialSliderControl.js.map