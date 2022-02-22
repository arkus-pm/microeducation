"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
var ErrorOutline_1 = tslib_1.__importDefault(require("@mui/icons-material/ErrorOutline"));
var material_1 = require("@mui/material");
var StyledBadge = material_1.styled(material_1.Badge)(function (_a) {
    var theme = _a.theme;
    return ({
        color: theme.palette.error.main
    });
});
var ValidationIcon = function (_a) {
    var errorMessages = _a.errorMessages, id = _a.id;
    return (react_1.default.createElement(material_1.Tooltip, { id: id, title: errorMessages },
        react_1.default.createElement(StyledBadge, { badgeContent: errorMessages.split('\n').length },
            react_1.default.createElement(ErrorOutline_1.default, { color: 'inherit' }))));
};
exports.default = ValidationIcon;
//# sourceMappingURL=ValidationIcon.js.map