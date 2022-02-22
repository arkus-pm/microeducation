"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialGroupTester = exports.MaterializedGroupLayoutRenderer = exports.groupTester = void 0;
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
var isEmpty_1 = tslib_1.__importDefault(require("lodash/isEmpty"));
var react_1 = tslib_1.__importDefault(require("react"));
var material_1 = require("@mui/material");
var core_1 = require("@jsonforms/core");
var layout_1 = require("../util/layout");
var react_2 = require("@jsonforms/react");
exports.groupTester = core_1.rankWith(1, core_1.uiTypeIs('Group'));
var style = { marginBottom: '10px' };
var GroupComponent = react_1.default.memo(function (_a) {
    var visible = _a.visible, enabled = _a.enabled, uischema = _a.uischema, props = tslib_1.__rest(_a, ["visible", "enabled", "uischema"]);
    var groupLayout = uischema;
    return (react_1.default.createElement(material_1.Hidden, { xsUp: !visible },
        react_1.default.createElement(material_1.Card, { style: style },
            !isEmpty_1.default(groupLayout.label) && (react_1.default.createElement(material_1.CardHeader, { title: groupLayout.label })),
            react_1.default.createElement(material_1.CardContent, null,
                react_1.default.createElement(layout_1.MaterialLayoutRenderer, tslib_1.__assign({}, props, { visible: visible, enabled: enabled, elements: groupLayout.elements }))))));
});
var MaterializedGroupLayoutRenderer = function (_a) {
    var uischema = _a.uischema, schema = _a.schema, path = _a.path, visible = _a.visible, enabled = _a.enabled, renderers = _a.renderers, cells = _a.cells, direction = _a.direction;
    var groupLayout = uischema;
    return (react_1.default.createElement(GroupComponent, { elements: groupLayout.elements, schema: schema, path: path, direction: direction, visible: visible, enabled: enabled, uischema: uischema, renderers: renderers, cells: cells }));
};
exports.MaterializedGroupLayoutRenderer = MaterializedGroupLayoutRenderer;
exports.default = react_2.withJsonFormsLayoutProps(exports.MaterializedGroupLayoutRenderer);
exports.materialGroupTester = core_1.withIncreasedRank(1, exports.groupTester);
//# sourceMappingURL=MaterialGroupLayout.js.map