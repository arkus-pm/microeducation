"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withAjvProps = exports.MaterialLayoutRenderer = exports.renderLayoutElements = void 0;
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
var core_1 = require("@jsonforms/core");
var react_2 = require("@jsonforms/react");
var material_1 = require("@mui/material");
var renderLayoutElements = function (elements, schema, path, enabled, renderers, cells) {
    return elements.map(function (child, index) { return (react_1.default.createElement(material_1.Grid, { item: true, key: path + "-" + index, xs: true },
        react_1.default.createElement(react_2.JsonFormsDispatch, { uischema: child, schema: schema, path: path, enabled: enabled, renderers: renderers, cells: cells }))); });
};
exports.renderLayoutElements = renderLayoutElements;
var MaterialLayoutRendererComponent = function (_a) {
    var visible = _a.visible, elements = _a.elements, schema = _a.schema, path = _a.path, enabled = _a.enabled, direction = _a.direction, renderers = _a.renderers, cells = _a.cells;
    if (isEmpty_1.default(elements)) {
        return null;
    }
    else {
        return (react_1.default.createElement(material_1.Hidden, { xsUp: !visible },
            react_1.default.createElement(material_1.Grid, { container: true, direction: direction, spacing: direction === 'row' ? 2 : 0 }, exports.renderLayoutElements(elements, schema, path, enabled, renderers, cells))));
    }
};
exports.MaterialLayoutRenderer = react_1.default.memo(MaterialLayoutRendererComponent);
var withAjvProps = function (Component) {
    return function (props) {
        var ctx = react_2.useJsonForms();
        var ajv = core_1.getAjv({ jsonforms: tslib_1.__assign({}, ctx) });
        return (react_1.default.createElement(Component, tslib_1.__assign({}, props, { ajv: ajv })));
    };
};
exports.withAjvProps = withAjvProps;
//# sourceMappingURL=layout.js.map