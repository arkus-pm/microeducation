"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialListWithDetailTester = exports.MaterialListWithDetailRenderer = void 0;
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
var core_1 = require("@jsonforms/core");
var react_1 = require("@jsonforms/react");
var material_1 = require("@mui/material");
var map_1 = tslib_1.__importDefault(require("lodash/map"));
var range_1 = tslib_1.__importDefault(require("lodash/range"));
var react_2 = tslib_1.__importStar(require("react"));
var ArrayToolbar_1 = require("../layouts/ArrayToolbar");
var ListWithDetailMasterItem_1 = tslib_1.__importDefault(require("./ListWithDetailMasterItem"));
var merge_1 = tslib_1.__importDefault(require("lodash/merge"));
var MaterialListWithDetailRenderer = function (_a) {
    var uischemas = _a.uischemas, schema = _a.schema, uischema = _a.uischema, path = _a.path, errors = _a.errors, visible = _a.visible, label = _a.label, required = _a.required, removeItems = _a.removeItems, addItem = _a.addItem, data = _a.data, renderers = _a.renderers, cells = _a.cells, config = _a.config;
    var _b = react_2.useState(undefined), selectedIndex = _b[0], setSelectedIndex = _b[1];
    var handleRemoveItem = react_2.useCallback(function (p, value) { return function () {
        removeItems(p, [value])();
        if (selectedIndex === value) {
            setSelectedIndex(undefined);
        }
        else if (selectedIndex > value) {
            setSelectedIndex(selectedIndex - 1);
        }
    }; }, [removeItems, setSelectedIndex]);
    var handleListItemClick = react_2.useCallback(function (index) { return function () { return setSelectedIndex(index); }; }, [setSelectedIndex]);
    var handleCreateDefaultValue = react_2.useCallback(function () { return core_1.createDefaultValue(schema); }, [core_1.createDefaultValue]);
    var foundUISchema = react_2.useMemo(function () {
        return core_1.findUISchema(uischemas, schema, uischema.scope, path, undefined, uischema);
    }, [uischemas, schema, uischema.scope, path, uischema]);
    var appliedUiSchemaOptions = merge_1.default({}, config, uischema.options);
    return (react_2.default.createElement(material_1.Hidden, { xsUp: !visible },
        react_2.default.createElement(ArrayToolbar_1.ArrayLayoutToolbar, { label: core_1.computeLabel(label, required, appliedUiSchemaOptions.hideRequiredAsterisk), errors: errors, path: path, addItem: addItem, createDefault: handleCreateDefaultValue }),
        react_2.default.createElement(material_1.Grid, { container: true, direction: 'row', spacing: 2 },
            react_2.default.createElement(material_1.Grid, { item: true, xs: 3 },
                react_2.default.createElement(material_1.List, null, data > 0 ? (map_1.default(range_1.default(data), function (index) { return (react_2.default.createElement(ListWithDetailMasterItem_1.default, { index: index, path: path, schema: schema, handleSelect: handleListItemClick, removeItem: handleRemoveItem, selected: selectedIndex === index, key: index })); })) : (react_2.default.createElement("p", null, "No data")))),
            react_2.default.createElement(material_1.Grid, { item: true, xs: true }, selectedIndex !== undefined ? (react_2.default.createElement(react_1.JsonFormsDispatch, { renderers: renderers, cells: cells, visible: visible, schema: schema, uischema: foundUISchema, path: core_1.composePaths(path, "" + selectedIndex) })) : (react_2.default.createElement(material_1.Typography, { variant: 'h6' }, "No Selection"))))));
};
exports.MaterialListWithDetailRenderer = MaterialListWithDetailRenderer;
exports.materialListWithDetailTester = core_1.rankWith(4, core_1.and(core_1.uiTypeIs('ListWithDetail'), core_1.isObjectArray));
exports.default = react_1.withJsonFormsArrayLayoutProps(exports.MaterialListWithDetailRenderer);
//# sourceMappingURL=MaterialListWithDetailRenderer.js.map