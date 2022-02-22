"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialAnyOfStringOrEnumControlTester = exports.MaterialAnyOfStringOrEnumControl = void 0;
var tslib_1 = require("tslib");
/*
  The MIT License

  Copyright (c) 2018-2019 EclipseSource Munich
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
var core_1 = require("@jsonforms/core");
var react_1 = require("@jsonforms/react");
var material_1 = require("@mui/material");
var merge_1 = tslib_1.__importDefault(require("lodash/merge"));
var react_2 = tslib_1.__importStar(require("react"));
var util_1 = require("../util");
var MaterialInputControl_1 = require("./MaterialInputControl");
var findEnumSchema = function (schemas) {
    return schemas.find(function (s) { return s.enum !== undefined && (s.type === 'string' || s.type === undefined); });
};
var findTextSchema = function (schemas) {
    return schemas.find(function (s) { return s.type === 'string' && s.enum === undefined; });
};
var MuiAutocompleteInputText = function (props) {
    var data = props.data, config = props.config, className = props.className, id = props.id, enabled = props.enabled, uischema = props.uischema, isValid = props.isValid, path = props.path, handleChange = props.handleChange, schema = props.schema;
    var enumSchema = findEnumSchema(schema.anyOf);
    var stringSchema = findTextSchema(schema.anyOf);
    var maxLength = stringSchema.maxLength;
    var appliedUiSchemaOptions = react_2.useMemo(function () { return merge_1.default({}, config, uischema.options); }, [config, uischema.options]);
    var inputProps = react_2.useMemo(function () {
        var propMemo = {};
        if (appliedUiSchemaOptions.restrict) {
            propMemo = { maxLength: maxLength };
        }
        if (appliedUiSchemaOptions.trim && maxLength !== undefined) {
            propMemo.size = maxLength;
        }
        propMemo.list = props.id + 'datalist';
        return propMemo;
    }, [appliedUiSchemaOptions, props.id]);
    var _a = util_1.useDebouncedChange(handleChange, '', data, path), inputText = _a[0], onChange = _a[1];
    var dataList = (react_2.default.createElement("datalist", { id: props.id + 'datalist' }, enumSchema.enum.map(function (optionValue) { return (react_2.default.createElement("option", { value: optionValue, key: optionValue })); })));
    return (react_2.default.createElement(material_1.Input, { type: 'text', value: inputText, onChange: onChange, className: className, id: id, disabled: !enabled, autoFocus: appliedUiSchemaOptions.focus, fullWidth: !appliedUiSchemaOptions.trim || maxLength === undefined, inputProps: inputProps, error: !isValid, endAdornment: dataList }));
};
var MaterialAnyOfStringOrEnumControl = /** @class */ (function (_super) {
    tslib_1.__extends(MaterialAnyOfStringOrEnumControl, _super);
    function MaterialAnyOfStringOrEnumControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MaterialAnyOfStringOrEnumControl.prototype.render = function () {
        return (react_2.default.createElement(MaterialInputControl_1.MaterialInputControl, tslib_1.__assign({}, this.props, { input: MuiAutocompleteInputText })));
    };
    return MaterialAnyOfStringOrEnumControl;
}(react_1.Control));
exports.MaterialAnyOfStringOrEnumControl = MaterialAnyOfStringOrEnumControl;
var hasEnumAndText = function (schemas) {
    // idea: map to type,enum and check that all types are string and at least one item is of type enum,
    var enumSchema = findEnumSchema(schemas);
    var stringSchema = findTextSchema(schemas);
    var remainingSchemas = schemas.filter(function (s) { return s !== enumSchema || s !== stringSchema; });
    var wrongType = remainingSchemas.find(function (s) { return s.type && s.type !== 'string'; });
    return enumSchema && stringSchema && !wrongType;
};
var simpleAnyOf = core_1.and(core_1.uiTypeIs('Control'), core_1.schemaMatches(function (schema) { return schema.hasOwnProperty('anyOf') && hasEnumAndText(schema.anyOf); }));
exports.materialAnyOfStringOrEnumControlTester = core_1.rankWith(5, simpleAnyOf);
exports.default = react_1.withJsonFormsControlProps(MaterialAnyOfStringOrEnumControl);
//# sourceMappingURL=MaterialAnyOfStringOrEnumControl.js.map