"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialAllOfControlTester = exports.MaterialAllOfRenderer = void 0;
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
var core_1 = require("@jsonforms/core");
var react_2 = require("@jsonforms/react");
var MaterialAllOfRenderer = function (_a) {
    var schema = _a.schema, rootSchema = _a.rootSchema, visible = _a.visible, renderers = _a.renderers, cells = _a.cells, path = _a.path, uischemas = _a.uischemas, uischema = _a.uischema;
    var _schema = core_1.resolveSubSchemas(schema, rootSchema, 'allOf');
    var delegateUISchema = core_1.findMatchingUISchema(uischemas)(_schema, uischema.scope, path);
    if (delegateUISchema) {
        return (react_1.default.createElement(material_1.Hidden, { xsUp: !visible },
            react_1.default.createElement(react_2.JsonFormsDispatch, { schema: _schema, uischema: delegateUISchema, path: path, renderers: renderers, cells: cells })));
    }
    var allOfRenderInfos = core_1.createCombinatorRenderInfos(_schema.allOf, rootSchema, 'allOf', uischema, path, uischemas);
    return (react_1.default.createElement(material_1.Hidden, { xsUp: !visible }, allOfRenderInfos.map(function (allOfRenderInfo, allOfIndex) { return (react_1.default.createElement(react_2.JsonFormsDispatch, { key: allOfIndex, schema: allOfRenderInfo.schema, uischema: allOfRenderInfo.uischema, path: path, renderers: renderers, cells: cells })); })));
};
exports.MaterialAllOfRenderer = MaterialAllOfRenderer;
exports.materialAllOfControlTester = core_1.rankWith(3, core_1.isAllOfControl);
exports.default = react_2.withJsonFormsAllOfProps(exports.MaterialAllOfRenderer);
//# sourceMappingURL=MaterialAllOfRenderer.js.map