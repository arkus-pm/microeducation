"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialArrayLayoutTester = exports.MaterialArrayLayoutRenderer = void 0;
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
var material_1 = require("@mui/material");
var MaterialArrayLayout_1 = require("./MaterialArrayLayout");
var react_2 = require("@jsonforms/react");
var MaterialArrayLayoutRenderer = function (_a) {
    var visible = _a.visible, enabled = _a.enabled, id = _a.id, uischema = _a.uischema, schema = _a.schema, label = _a.label, rootSchema = _a.rootSchema, renderers = _a.renderers, cells = _a.cells, data = _a.data, path = _a.path, errors = _a.errors, uischemas = _a.uischemas, addItem = _a.addItem;
    var addItemCb = react_1.useCallback(function (p, value) { return addItem(p, value); }, [
        addItem
    ]);
    return (react_1.default.createElement(material_1.Hidden, { xsUp: !visible },
        react_1.default.createElement(MaterialArrayLayout_1.MaterialArrayLayout, { label: label, uischema: uischema, schema: schema, id: id, rootSchema: rootSchema, errors: errors, enabled: enabled, visible: visible, data: data, path: path, addItem: addItemCb, renderers: renderers, cells: cells, uischemas: uischemas })));
};
exports.MaterialArrayLayoutRenderer = MaterialArrayLayoutRenderer;
exports.materialArrayLayoutTester = core_1.rankWith(4, core_1.isObjectArrayWithNesting);
exports.default = react_2.withJsonFormsArrayLayoutProps(exports.MaterialArrayLayoutRenderer);
//# sourceMappingURL=MaterialArrayLayoutRenderer.js.map