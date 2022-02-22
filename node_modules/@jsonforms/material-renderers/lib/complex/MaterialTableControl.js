"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialTableControl = exports.NonEmptyRow = void 0;
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
var union_1 = tslib_1.__importDefault(require("lodash/union"));
var react_1 = require("@jsonforms/react");
var startCase_1 = tslib_1.__importDefault(require("lodash/startCase"));
var range_1 = tslib_1.__importDefault(require("lodash/range"));
var react_2 = tslib_1.__importStar(require("react"));
var material_1 = require("@mui/material");
var core_1 = require("@jsonforms/core");
var Delete_1 = tslib_1.__importDefault(require("@mui/icons-material/Delete"));
var ArrowDownward_1 = tslib_1.__importDefault(require("@mui/icons-material/ArrowDownward"));
var ArrowUpward_1 = tslib_1.__importDefault(require("@mui/icons-material/ArrowUpward"));
var NoBorderTableCell_1 = tslib_1.__importDefault(require("./NoBorderTableCell"));
var TableToolbar_1 = tslib_1.__importDefault(require("./TableToolbar"));
var merge_1 = tslib_1.__importDefault(require("lodash/merge"));
// we want a cell that doesn't automatically span
var styles = {
    fixedCell: {
        width: '150px',
        height: '50px',
        paddingLeft: 0,
        paddingRight: 0,
        textAlign: 'center'
    },
    fixedCellSmall: {
        width: '50px',
        height: '50px',
        paddingLeft: 0,
        paddingRight: 0,
        textAlign: 'center'
    }
};
var generateCells = function (Cell, schema, rowPath, enabled, cells) {
    if (schema.type === 'object') {
        return getValidColumnProps(schema).map(function (prop) {
            var _a, _b, _c;
            var cellPath = core_1.Paths.compose(rowPath, prop);
            var props = {
                propName: prop,
                schema: schema,
                title: (_c = (_b = (_a = schema.properties) === null || _a === void 0 ? void 0 : _a[prop]) === null || _b === void 0 ? void 0 : _b.title) !== null && _c !== void 0 ? _c : startCase_1.default(prop),
                rowPath: rowPath,
                cellPath: cellPath,
                enabled: enabled,
                cells: cells
            };
            return react_2.default.createElement(Cell, tslib_1.__assign({ key: cellPath }, props));
        });
    }
    else {
        // primitives
        var props = {
            schema: schema,
            rowPath: rowPath,
            cellPath: rowPath,
            enabled: enabled
        };
        return react_2.default.createElement(Cell, tslib_1.__assign({ key: rowPath }, props));
    }
};
var getValidColumnProps = function (scopedSchema) {
    if (scopedSchema.type === 'object' && typeof scopedSchema.properties === 'object') {
        return Object.keys(scopedSchema.properties).filter(function (prop) { return scopedSchema.properties[prop].type !== 'array'; });
    }
    // primitives
    return [''];
};
var EmptyTable = function (_a) {
    var numColumns = _a.numColumns;
    return (react_2.default.createElement(material_1.TableRow, null,
        react_2.default.createElement(NoBorderTableCell_1.default, { colSpan: numColumns },
            react_2.default.createElement(material_1.Typography, { align: 'center' }, "No data"))));
};
var TableHeaderCell = react_2.default.memo(function (_a) {
    var title = _a.title;
    return (react_2.default.createElement(material_1.TableCell, null, title));
});
var ctxToNonEmptyCellProps = function (ctx, ownProps) {
    var path = ownProps.rowPath +
        (ownProps.schema.type === 'object' ? '.' + ownProps.propName : '');
    var errors = core_1.formatErrorMessage(union_1.default(core_1.errorsAt(path, ownProps.schema, function (p) { return p === path; })(ctx.core.errors).map(function (error) { return error.message; })));
    return {
        rowPath: ownProps.rowPath,
        propName: ownProps.propName,
        schema: ownProps.schema,
        rootSchema: ctx.core.schema,
        errors: errors,
        path: path,
        enabled: ownProps.enabled,
        cells: ownProps.cells || ctx.cells,
        renderers: ownProps.renderers || ctx.renderers
    };
};
var controlWithoutLabel = function (scope) { return ({
    type: 'Control',
    scope: scope,
    label: false
}); };
var NonEmptyCellComponent = react_2.default.memo(function (_a) {
    var path = _a.path, propName = _a.propName, schema = _a.schema, rootSchema = _a.rootSchema, errors = _a.errors, enabled = _a.enabled, renderers = _a.renderers, cells = _a.cells, isValid = _a.isValid;
    return (react_2.default.createElement(NoBorderTableCell_1.default, null,
        schema.properties ? (react_2.default.createElement(react_1.DispatchCell, { schema: core_1.Resolve.schema(schema, "#/properties/" + propName, rootSchema), uischema: controlWithoutLabel("#/properties/" + propName), path: path, enabled: enabled, renderers: renderers, cells: cells })) : (react_2.default.createElement(react_1.DispatchCell, { schema: schema, uischema: controlWithoutLabel('#'), path: path, enabled: enabled, renderers: renderers, cells: cells })),
        react_2.default.createElement(material_1.FormHelperText, { error: !isValid }, !isValid && errors)));
});
var NonEmptyCell = function (ownProps) {
    var ctx = react_1.useJsonForms();
    var emptyCellProps = ctxToNonEmptyCellProps(ctx, ownProps);
    var isValid = isEmpty_1.default(emptyCellProps.errors);
    return react_2.default.createElement(NonEmptyCellComponent, tslib_1.__assign({}, emptyCellProps, { isValid: isValid }));
};
var NonEmptyRowComponent = function (_a) {
    var childPath = _a.childPath, schema = _a.schema, rowIndex = _a.rowIndex, openDeleteDialog = _a.openDeleteDialog, moveUpCreator = _a.moveUpCreator, moveDownCreator = _a.moveDownCreator, enableUp = _a.enableUp, enableDown = _a.enableDown, showSortButtons = _a.showSortButtons, enabled = _a.enabled, cells = _a.cells, path = _a.path;
    var moveUp = react_2.useMemo(function () { return moveUpCreator(path, rowIndex); }, [moveUpCreator, path, rowIndex]);
    var moveDown = react_2.useMemo(function () { return moveDownCreator(path, rowIndex); }, [moveDownCreator, path, rowIndex]);
    return (react_2.default.createElement(material_1.TableRow, { key: childPath, hover: true },
        generateCells(NonEmptyCell, schema, childPath, enabled, cells),
        enabled ? (react_2.default.createElement(NoBorderTableCell_1.default, { style: showSortButtons ? styles.fixedCell : styles.fixedCellSmall },
            react_2.default.createElement(material_1.Grid, { container: true, direction: 'row', justifyContent: 'flex-end', alignItems: 'center' },
                showSortButtons ? (react_2.default.createElement(react_2.Fragment, null,
                    react_2.default.createElement(material_1.Grid, { item: true },
                        react_2.default.createElement(material_1.IconButton, { "aria-label": "Move up", onClick: moveUp, disabled: !enableUp, size: 'large' },
                            react_2.default.createElement(ArrowUpward_1.default, null))),
                    react_2.default.createElement(material_1.Grid, { item: true },
                        react_2.default.createElement(material_1.IconButton, { "aria-label": "Move down", onClick: moveDown, disabled: !enableDown, size: 'large' },
                            react_2.default.createElement(ArrowDownward_1.default, null))))) : null,
                react_2.default.createElement(material_1.Grid, { item: true },
                    react_2.default.createElement(material_1.IconButton, { "aria-label": "Delete", onClick: function () { return openDeleteDialog(childPath, rowIndex); }, size: 'large' },
                        react_2.default.createElement(Delete_1.default, null)))))) : null));
};
exports.NonEmptyRow = react_2.default.memo(NonEmptyRowComponent);
var TableRows = function (_a) {
    var data = _a.data, path = _a.path, schema = _a.schema, openDeleteDialog = _a.openDeleteDialog, moveUp = _a.moveUp, moveDown = _a.moveDown, uischema = _a.uischema, config = _a.config, enabled = _a.enabled, cells = _a.cells;
    var isEmptyTable = data === 0;
    if (isEmptyTable) {
        return react_2.default.createElement(EmptyTable, { numColumns: getValidColumnProps(schema).length + 1 });
    }
    var appliedUiSchemaOptions = merge_1.default({}, config, uischema.options);
    return (react_2.default.createElement(react_2.default.Fragment, null, range_1.default(data).map(function (index) {
        var childPath = core_1.Paths.compose(path, "" + index);
        return (react_2.default.createElement(exports.NonEmptyRow, { key: childPath, childPath: childPath, rowIndex: index, schema: schema, openDeleteDialog: openDeleteDialog, moveUpCreator: moveUp, moveDownCreator: moveDown, enableUp: index !== 0, enableDown: index !== data - 1, showSortButtons: appliedUiSchemaOptions.showSortButtons, enabled: enabled, cells: cells, path: path }));
    })));
};
var MaterialTableControl = /** @class */ (function (_super) {
    tslib_1.__extends(MaterialTableControl, _super);
    function MaterialTableControl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.addItem = function (path, value) { return _this.props.addItem(path, value); };
        return _this;
    }
    MaterialTableControl.prototype.render = function () {
        var _a = this.props, label = _a.label, path = _a.path, schema = _a.schema, rootSchema = _a.rootSchema, uischema = _a.uischema, errors = _a.errors, openDeleteDialog = _a.openDeleteDialog, visible = _a.visible, enabled = _a.enabled, cells = _a.cells;
        var controlElement = uischema;
        var isObjectSchema = schema.type === 'object';
        var headerCells = isObjectSchema
            ? generateCells(TableHeaderCell, schema, path, enabled, cells)
            : undefined;
        return (react_2.default.createElement(material_1.Hidden, { xsUp: !visible },
            react_2.default.createElement(material_1.Table, null,
                react_2.default.createElement(material_1.TableHead, null,
                    react_2.default.createElement(TableToolbar_1.default, { errors: errors, label: label, addItem: this.addItem, numColumns: isObjectSchema ? headerCells.length : 1, path: path, uischema: controlElement, schema: schema, rootSchema: rootSchema, enabled: enabled }),
                    isObjectSchema && (react_2.default.createElement(material_1.TableRow, null,
                        headerCells,
                        enabled ? react_2.default.createElement(material_1.TableCell, null) : null))),
                react_2.default.createElement(material_1.TableBody, null,
                    react_2.default.createElement(TableRows, tslib_1.__assign({ openDeleteDialog: openDeleteDialog }, this.props))))));
    };
    return MaterialTableControl;
}(react_2.default.Component));
exports.MaterialTableControl = MaterialTableControl;
//# sourceMappingURL=MaterialTableControl.js.map