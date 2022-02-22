"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CombinatorProperties = exports.isLayout = void 0;
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
var lodash_1 = tslib_1.__importDefault(require("lodash"));
var core_1 = require("@jsonforms/core");
var react_2 = require("@jsonforms/react");
var isLayout = function (uischema) {
    return uischema.hasOwnProperty('elements');
};
exports.isLayout = isLayout;
var CombinatorProperties = /** @class */ (function (_super) {
    tslib_1.__extends(CombinatorProperties, _super);
    function CombinatorProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CombinatorProperties.prototype.render = function () {
        var _a = this.props, schema = _a.schema, combinatorKeyword = _a.combinatorKeyword, path = _a.path;
        var otherProps = lodash_1.default.omit(schema, combinatorKeyword);
        var foundUISchema = core_1.Generate.uiSchema(otherProps, 'VerticalLayout');
        var isLayoutWithElements = false;
        if (foundUISchema !== null && exports.isLayout(foundUISchema)) {
            isLayoutWithElements = foundUISchema.elements.length > 0;
        }
        if (isLayoutWithElements) {
            return (react_1.default.createElement(react_2.JsonFormsDispatch, { schema: otherProps, path: path, uischema: foundUISchema }));
        }
        return null;
    };
    return CombinatorProperties;
}(react_1.default.Component));
exports.CombinatorProperties = CombinatorProperties;
exports.default = CombinatorProperties;
//# sourceMappingURL=CombinatorProperties.js.map