"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialEnumArrayRendererTester = exports.materialOneOfControlTester = exports.materialAnyOfControlTester = exports.materialAllOfControlTester = exports.materialObjectControlTester = exports.MaterialEnumArrayRenderer = exports.MaterialOneOfRenderer = exports.MaterialAnyOfRenderer = exports.MaterialAllOfRenderer = exports.MaterialObjectRenderer = exports.MaterialArrayControlRenderer = exports.materialArrayControlTester = void 0;
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
var core_1 = require("@jsonforms/core");
var MaterialArrayControlRenderer_1 = tslib_1.__importDefault(require("./MaterialArrayControlRenderer"));
exports.MaterialArrayControlRenderer = MaterialArrayControlRenderer_1.default;
var MaterialObjectRenderer_1 = tslib_1.__importStar(require("./MaterialObjectRenderer"));
exports.MaterialObjectRenderer = MaterialObjectRenderer_1.default;
Object.defineProperty(exports, "materialObjectControlTester", { enumerable: true, get: function () { return MaterialObjectRenderer_1.materialObjectControlTester; } });
var MaterialAllOfRenderer_1 = tslib_1.__importStar(require("./MaterialAllOfRenderer"));
exports.MaterialAllOfRenderer = MaterialAllOfRenderer_1.default;
Object.defineProperty(exports, "materialAllOfControlTester", { enumerable: true, get: function () { return MaterialAllOfRenderer_1.materialAllOfControlTester; } });
var MaterialAnyOfRenderer_1 = tslib_1.__importStar(require("./MaterialAnyOfRenderer"));
exports.MaterialAnyOfRenderer = MaterialAnyOfRenderer_1.default;
Object.defineProperty(exports, "materialAnyOfControlTester", { enumerable: true, get: function () { return MaterialAnyOfRenderer_1.materialAnyOfControlTester; } });
var MaterialOneOfRenderer_1 = tslib_1.__importStar(require("./MaterialOneOfRenderer"));
exports.MaterialOneOfRenderer = MaterialOneOfRenderer_1.default;
Object.defineProperty(exports, "materialOneOfControlTester", { enumerable: true, get: function () { return MaterialOneOfRenderer_1.materialOneOfControlTester; } });
var MaterialEnumArrayRenderer_1 = tslib_1.__importStar(require("./MaterialEnumArrayRenderer"));
exports.MaterialEnumArrayRenderer = MaterialEnumArrayRenderer_1.default;
Object.defineProperty(exports, "materialEnumArrayRendererTester", { enumerable: true, get: function () { return MaterialEnumArrayRenderer_1.materialEnumArrayRendererTester; } });
exports.materialArrayControlTester = core_1.rankWith(3, core_1.or(core_1.isObjectArrayControl, core_1.isPrimitiveArrayControl));
//# sourceMappingURL=index.js.map