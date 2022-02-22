"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialHorizontalLayoutRenderer = exports.materialHorizontalLayoutTester = void 0;
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
var core_1 = require("@jsonforms/core");
var react_2 = require("@jsonforms/react");
var layout_1 = require("../util/layout");
/**
 * Default tester for a horizontal layout.
 * @type {RankedTester}
 */
exports.materialHorizontalLayoutTester = core_1.rankWith(2, core_1.uiTypeIs('HorizontalLayout'));
var MaterialHorizontalLayoutRenderer = function (_a) {
    var uischema = _a.uischema, renderers = _a.renderers, cells = _a.cells, schema = _a.schema, path = _a.path, enabled = _a.enabled, visible = _a.visible;
    var layout = uischema;
    var childProps = {
        elements: layout.elements,
        schema: schema,
        path: path,
        enabled: enabled,
        direction: 'row',
        visible: visible
    };
    return react_1.default.createElement(layout_1.MaterialLayoutRenderer, tslib_1.__assign({}, childProps, { renderers: renderers, cells: cells }));
};
exports.MaterialHorizontalLayoutRenderer = MaterialHorizontalLayoutRenderer;
exports.default = react_2.withJsonFormsLayoutProps(exports.MaterialHorizontalLayoutRenderer);
//# sourceMappingURL=MaterialHorizontalLayout.js.map