"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialObjectControlTester = exports.MaterialObjectRenderer = void 0;
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
var core_1 = require("@jsonforms/core");
var react_1 = require("@jsonforms/react");
var material_1 = require("@mui/material");
var react_2 = tslib_1.__importStar(require("react"));
var MaterialObjectRenderer = function (_a) {
    var renderers = _a.renderers, cells = _a.cells, uischemas = _a.uischemas, schema = _a.schema, label = _a.label, path = _a.path, visible = _a.visible, enabled = _a.enabled, uischema = _a.uischema, rootSchema = _a.rootSchema;
    var detailUiSchema = react_2.useMemo(function () {
        return core_1.findUISchema(uischemas, schema, uischema.scope, path, 'Group', uischema, rootSchema);
    }, [uischemas, schema, uischema.scope, path, uischema, rootSchema]);
    if (isEmpty_1.default(path)) {
        detailUiSchema.type = 'VerticalLayout';
    }
    else {
        detailUiSchema.label = label;
    }
    return (react_2.default.createElement(material_1.Hidden, { xsUp: !visible },
        react_2.default.createElement(react_1.JsonFormsDispatch, { visible: visible, enabled: enabled, schema: schema, uischema: detailUiSchema, path: path, renderers: renderers, cells: cells })));
};
exports.MaterialObjectRenderer = MaterialObjectRenderer;
exports.materialObjectControlTester = core_1.rankWith(2, core_1.isObjectControl);
exports.default = react_1.withJsonFormsDetailProps(exports.MaterialObjectRenderer);
//# sourceMappingURL=MaterialObjectRenderer.js.map