"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDebouncedChange = void 0;
/*
  The MIT License
  
  Copyright (c) 2021 EclipseSource Munich
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
var lodash_1 = require("lodash");
var react_1 = require("react");
var eventToValue = function (ev) { return ev.target.value; };
var useDebouncedChange = function (handleChange, defaultValue, data, path, eventToValueFunction, timeout) {
    if (eventToValueFunction === void 0) { eventToValueFunction = eventToValue; }
    if (timeout === void 0) { timeout = 300; }
    var _a = react_1.useState(data !== null && data !== void 0 ? data : defaultValue), input = _a[0], setInput = _a[1];
    react_1.useEffect(function () {
        setInput(data !== null && data !== void 0 ? data : defaultValue);
    }, [data]);
    var debouncedUpdate = react_1.useCallback(lodash_1.debounce(function (newValue) { return handleChange(path, newValue); }, timeout), [handleChange, path, timeout]);
    var onChange = react_1.useCallback(function (ev) {
        var newValue = eventToValueFunction(ev);
        setInput(newValue !== null && newValue !== void 0 ? newValue : defaultValue);
        debouncedUpdate(newValue);
    }, [debouncedUpdate, eventToValueFunction]);
    var onClear = react_1.useCallback(function () { setInput(defaultValue); handleChange(path, undefined); }, [defaultValue, handleChange, path]);
    return [input, onChange, onClear];
};
exports.useDebouncedChange = useDebouncedChange;
//# sourceMappingURL=debounce.js.map