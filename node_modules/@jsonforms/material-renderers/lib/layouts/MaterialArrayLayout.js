"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialArrayLayout = void 0;
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
var range_1 = tslib_1.__importDefault(require("lodash/range"));
var react_1 = tslib_1.__importStar(require("react"));
var core_1 = require("@jsonforms/core");
var map_1 = tslib_1.__importDefault(require("lodash/map"));
var ArrayToolbar_1 = require("./ArrayToolbar");
var ExpandPanelRenderer_1 = tslib_1.__importDefault(require("./ExpandPanelRenderer"));
var merge_1 = tslib_1.__importDefault(require("lodash/merge"));
var MaterialArrayLayoutComponent = function (props) {
    var _a = react_1.useState(false), expanded = _a[0], setExpanded = _a[1];
    var innerCreateDefaultValue = react_1.useCallback(function () { return core_1.createDefaultValue(props.schema); }, [props.schema]);
    var handleChange = react_1.useCallback(function (panel) { return function (_event, expandedPanel) {
        setExpanded(expandedPanel ? panel : false);
    }; }, []);
    var isExpanded = function (index) {
        return expanded === core_1.composePaths(props.path, "" + index);
    };
    var data = props.data, path = props.path, schema = props.schema, uischema = props.uischema, errors = props.errors, addItem = props.addItem, renderers = props.renderers, cells = props.cells, label = props.label, required = props.required, rootSchema = props.rootSchema, config = props.config, uischemas = props.uischemas;
    var appliedUiSchemaOptions = merge_1.default({}, config, props.uischema.options);
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(ArrayToolbar_1.ArrayLayoutToolbar, { label: core_1.computeLabel(label, required, appliedUiSchemaOptions.hideRequiredAsterisk), errors: errors, path: path, addItem: addItem, createDefault: innerCreateDefaultValue }),
        react_1.default.createElement("div", null, data > 0 ? (map_1.default(range_1.default(data), function (index) {
            return (react_1.default.createElement(ExpandPanelRenderer_1.default, { index: index, expanded: isExpanded(index), schema: schema, path: path, handleExpansion: handleChange, uischema: uischema, renderers: renderers, cells: cells, key: index, rootSchema: rootSchema, enableMoveUp: index != 0, enableMoveDown: index < data - 1, config: config, childLabelProp: appliedUiSchemaOptions.elementLabelProp, uischemas: uischemas }));
        })) : (react_1.default.createElement("p", null, "No data")))));
};
exports.MaterialArrayLayout = react_1.default.memo(MaterialArrayLayoutComponent);
//# sourceMappingURL=MaterialArrayLayout.js.map