"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialEnumArrayRendererTester = exports.MaterialEnumArrayRenderer = void 0;
var tslib_1 = require("tslib");
var core_1 = require("@jsonforms/core");
var react_1 = require("@jsonforms/react");
var mui_controls_1 = require("../mui-controls");
var material_1 = require("@mui/material");
var lodash_1 = require("lodash");
var lodash_2 = require("lodash");
var react_2 = tslib_1.__importDefault(require("react"));
var MaterialEnumArrayRenderer = function (_a) {
    var schema = _a.schema, visible = _a.visible, errors = _a.errors, path = _a.path, options = _a.options, data = _a.data, addItem = _a.addItem, removeItem = _a.removeItem, handleChange = _a.handleChange, otherProps = tslib_1.__rest(_a, ["schema", "visible", "errors", "path", "options", "data", "addItem", "removeItem", "handleChange"]);
    return (react_2.default.createElement(material_1.Hidden, { xlUp: !visible },
        react_2.default.createElement(material_1.FormControl, { component: 'fieldset' },
            react_2.default.createElement(material_1.FormGroup, { row: true }, options.map(function (option, index) {
                var optionPath = core_1.Paths.compose(path, "" + index);
                var checkboxValue = (data === null || data === void 0 ? void 0 : data.includes(option.value))
                    ? option.value
                    : undefined;
                return (react_2.default.createElement(material_1.FormControlLabel, { id: option.value, key: option.value, control: react_2.default.createElement(mui_controls_1.MuiCheckbox, tslib_1.__assign({ key: 'checkbox-' + option.value, isValid: lodash_2.isEmpty(errors), path: optionPath, handleChange: function (_childPath, newValue) {
                            return newValue
                                ? addItem(path, option.value)
                                : removeItem(path, option.value);
                        }, data: checkboxValue, errors: errors, schema: schema, visible: visible }, otherProps)), label: lodash_1.startCase(option.label) }));
            })),
            react_2.default.createElement(material_1.FormHelperText, { error: true }, errors))));
};
exports.MaterialEnumArrayRenderer = MaterialEnumArrayRenderer;
var hasOneOfItems = function (schema) {
    return schema.oneOf !== undefined &&
        schema.oneOf.length > 0 &&
        schema.oneOf.every(function (entry) {
            return entry.const !== undefined;
        });
};
var hasEnumItems = function (schema) {
    return schema.type === 'string' && schema.enum !== undefined;
};
exports.materialEnumArrayRendererTester = core_1.rankWith(5, core_1.and(core_1.uiTypeIs('Control'), core_1.and(core_1.schemaMatches(function (schema) {
    return core_1.hasType(schema, 'array') &&
        !Array.isArray(schema.items) &&
        schema.uniqueItems === true;
}), core_1.schemaSubPathMatches('items', function (schema) {
    return hasOneOfItems(schema) || hasEnumItems(schema);
}))));
exports.default = react_1.withJsonFormsMultiEnumProps(exports.MaterialEnumArrayRenderer);
//# sourceMappingURL=MaterialEnumArrayRenderer.js.map