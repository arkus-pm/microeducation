"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialTextCellTester = exports.MaterialTextCell = void 0;
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
var MuiInputText_1 = require("../mui-controls/MuiInputText");
var MaterialTextCell = function (props) { return (react_1.default.createElement(MuiInputText_1.MuiInputText, tslib_1.__assign({}, props))); };
exports.MaterialTextCell = MaterialTextCell;
/**
 * Default tester for text-based/string controls.
 * @type {RankedTester}
 */
exports.materialTextCellTester = core_1.rankWith(1, core_1.isStringControl);
exports.default = react_2.withJsonFormsCellProps(exports.MaterialTextCell);
//# sourceMappingURL=MaterialTextCell.js.map