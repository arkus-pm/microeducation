"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialVerticalLayoutTester = exports.MaterialVerticalLayout = exports.materialHorizontalLayoutTester = exports.MaterialHorizontalLayout = exports.materialGroupTester = exports.MaterialGroupLayout = exports.materialCategorizationTester = exports.MaterialCategorizationLayout = exports.MaterialArrayLayout = exports.materialArrayLayoutTester = void 0;
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
var MaterialGroupLayout_1 = tslib_1.__importStar(require("./MaterialGroupLayout"));
exports.MaterialGroupLayout = MaterialGroupLayout_1.default;
Object.defineProperty(exports, "materialGroupTester", { enumerable: true, get: function () { return MaterialGroupLayout_1.materialGroupTester; } });
var MaterialHorizontalLayout_1 = tslib_1.__importStar(require("./MaterialHorizontalLayout"));
exports.MaterialHorizontalLayout = MaterialHorizontalLayout_1.default;
Object.defineProperty(exports, "materialHorizontalLayoutTester", { enumerable: true, get: function () { return MaterialHorizontalLayout_1.materialHorizontalLayoutTester; } });
var MaterialVerticalLayout_1 = tslib_1.__importStar(require("./MaterialVerticalLayout"));
exports.MaterialVerticalLayout = MaterialVerticalLayout_1.default;
Object.defineProperty(exports, "materialVerticalLayoutTester", { enumerable: true, get: function () { return MaterialVerticalLayout_1.materialVerticalLayoutTester; } });
var MaterialCategorizationLayout_1 = tslib_1.__importStar(require("./MaterialCategorizationLayout"));
exports.MaterialCategorizationLayout = MaterialCategorizationLayout_1.default;
Object.defineProperty(exports, "materialCategorizationTester", { enumerable: true, get: function () { return MaterialCategorizationLayout_1.materialCategorizationTester; } });
var MaterialArrayLayoutRenderer_1 = tslib_1.__importStar(require("./MaterialArrayLayoutRenderer"));
exports.MaterialArrayLayout = MaterialArrayLayoutRenderer_1.default;
Object.defineProperty(exports, "materialArrayLayoutTester", { enumerable: true, get: function () { return MaterialArrayLayoutRenderer_1.materialArrayLayoutTester; } });
//# sourceMappingURL=index.js.map