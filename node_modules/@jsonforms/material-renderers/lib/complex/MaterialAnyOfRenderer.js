"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialAnyOfControlTester = exports.MaterialAnyOfRenderer = void 0;
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
var CombinatorProperties_1 = tslib_1.__importDefault(require("./CombinatorProperties"));
var MaterialAnyOfRenderer = function (_a) {
    var schema = _a.schema, rootSchema = _a.rootSchema, indexOfFittingSchema = _a.indexOfFittingSchema, visible = _a.visible, path = _a.path, renderers = _a.renderers, cells = _a.cells, uischema = _a.uischema, uischemas = _a.uischemas;
    var _b = react_1.useState(indexOfFittingSchema || 0), selectedAnyOf = _b[0], setSelectedAnyOf = _b[1];
    var handleChange = react_1.useCallback(function (_ev, value) { return setSelectedAnyOf(value); }, [setSelectedAnyOf]);
    var anyOf = 'anyOf';
    var _schema = core_1.resolveSubSchemas(schema, rootSchema, anyOf);
    var anyOfRenderInfos = core_1.createCombinatorRenderInfos(_schema.anyOf, rootSchema, anyOf, uischema, path, uischemas);
    return (react_1.default.createElement(material_1.Hidden, { xsUp: !visible },
        react_1.default.createElement(CombinatorProperties_1.default, { schema: _schema, combinatorKeyword: 'anyOf', path: path }),
        react_1.default.createElement(material_1.Tabs, { value: selectedAnyOf, onChange: handleChange }, anyOfRenderInfos.map(function (anyOfRenderInfo) { return (react_1.default.createElement(material_1.Tab, { key: anyOfRenderInfo.label, label: anyOfRenderInfo.label })); })),
        anyOfRenderInfos.map(function (anyOfRenderInfo, anyOfIndex) {
            return selectedAnyOf === anyOfIndex && (react_1.default.createElement(react_2.JsonFormsDispatch, { key: anyOfIndex, schema: anyOfRenderInfo.schema, uischema: anyOfRenderInfo.uischema, path: path, renderers: renderers, cells: cells }));
        })));
};
exports.MaterialAnyOfRenderer = MaterialAnyOfRenderer;
exports.materialAnyOfControlTester = core_1.rankWith(3, core_1.isAnyOfControl);
exports.default = react_2.withJsonFormsAnyOfProps(exports.MaterialAnyOfRenderer);
//# sourceMappingURL=MaterialAnyOfRenderer.js.map