"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = require("@jsonforms/react");
var material_1 = require("@mui/material");
var Delete_1 = tslib_1.__importDefault(require("@mui/icons-material/Delete"));
var react_2 = tslib_1.__importDefault(require("react"));
var ListWithDetailMasterItem = function (_a) {
    var index = _a.index, childLabel = _a.childLabel, selected = _a.selected, handleSelect = _a.handleSelect, removeItem = _a.removeItem, path = _a.path;
    return (react_2.default.createElement(material_1.ListItem, { button: true, selected: selected, onClick: handleSelect(index) },
        react_2.default.createElement(material_1.ListItemAvatar, null,
            react_2.default.createElement(material_1.Avatar, { "aria-label": 'Index' }, index + 1)),
        react_2.default.createElement(material_1.ListItemText, { primary: childLabel }),
        react_2.default.createElement(material_1.ListItemSecondaryAction, null,
            react_2.default.createElement(material_1.IconButton, { "aria-label": 'Delete', onClick: removeItem(path, index), size: 'large' },
                react_2.default.createElement(Delete_1.default, null)))));
};
exports.default = react_1.withJsonFormsMasterListItemProps(ListWithDetailMasterItem);
//# sourceMappingURL=ListWithDetailMasterItem.js.map