"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArrayLayoutToolbar = void 0;
var tslib_1 = require("tslib");
var material_1 = require("@mui/material");
var Add_1 = tslib_1.__importDefault(require("@mui/icons-material/Add"));
var react_1 = tslib_1.__importDefault(require("react"));
var ValidationIcon_1 = tslib_1.__importDefault(require("../complex/ValidationIcon"));
exports.ArrayLayoutToolbar = react_1.default.memo(function (_a) {
    var label = _a.label, errors = _a.errors, addItem = _a.addItem, path = _a.path, createDefault = _a.createDefault;
    return (react_1.default.createElement(material_1.Toolbar, { disableGutters: true },
        react_1.default.createElement(material_1.Grid, { container: true, alignItems: 'center', justifyContent: 'space-between' },
            react_1.default.createElement(material_1.Grid, { item: true },
                react_1.default.createElement(material_1.Typography, { variant: 'h6' }, label)),
            react_1.default.createElement(material_1.Hidden, { smUp: errors.length === 0 },
                react_1.default.createElement(material_1.Grid, { item: true },
                    react_1.default.createElement(ValidationIcon_1.default, { id: 'tooltip-validation', errorMessages: errors }))),
            react_1.default.createElement(material_1.Grid, { item: true },
                react_1.default.createElement(material_1.Grid, { container: true },
                    react_1.default.createElement(material_1.Grid, { item: true },
                        react_1.default.createElement(material_1.Tooltip, { id: 'tooltip-add', title: "Add to " + label, placement: 'bottom' },
                            react_1.default.createElement(material_1.IconButton, { "aria-label": "Add to " + label, onClick: addItem(path, createDefault()), size: 'large' },
                                react_1.default.createElement(Add_1.default, null)))))))));
});
//# sourceMappingURL=ArrayToolbar.js.map