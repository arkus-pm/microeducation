"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.withJsonFormsExpandPanelProps = exports.withContextToExpandPanelProps = exports.ctxDispatchToExpandPanelProps = void 0;
var tslib_1 = require("tslib");
var merge_1 = tslib_1.__importDefault(require("lodash/merge"));
var get_1 = tslib_1.__importDefault(require("lodash/get"));
var react_1 = tslib_1.__importStar(require("react"));
var react_2 = require("@jsonforms/react");
var core_1 = require("@jsonforms/core");
var material_1 = require("@mui/material");
var ExpandMore_1 = tslib_1.__importDefault(require("@mui/icons-material/ExpandMore"));
var Delete_1 = tslib_1.__importDefault(require("@mui/icons-material/Delete"));
var ArrowUpward_1 = tslib_1.__importDefault(require("@mui/icons-material/ArrowUpward"));
var ArrowDownward_1 = tslib_1.__importDefault(require("@mui/icons-material/ArrowDownward"));
var iconStyle = { float: 'right' };
var ExpandPanelRendererComponent = function (props) {
    var labelHtmlId = react_1.useState(core_1.createId('expand-panel'))[0];
    react_1.useEffect(function () {
        return function () {
            core_1.removeId(labelHtmlId);
        };
    }, [labelHtmlId]);
    var childLabel = props.childLabel, childPath = props.childPath, index = props.index, expanded = props.expanded, moveDown = props.moveDown, moveUp = props.moveUp, enableMoveDown = props.enableMoveDown, enableMoveUp = props.enableMoveUp, handleExpansion = props.handleExpansion, removeItems = props.removeItems, path = props.path, rootSchema = props.rootSchema, schema = props.schema, uischema = props.uischema, uischemas = props.uischemas, renderers = props.renderers, cells = props.cells, config = props.config;
    var foundUISchema = react_1.useMemo(function () {
        return core_1.findUISchema(uischemas, schema, uischema.scope, path, undefined, uischema, rootSchema);
    }, [uischemas, schema, uischema.scope, path, uischema, rootSchema]);
    var appliedUiSchemaOptions = merge_1.default({}, config, uischema.options);
    return (react_1.default.createElement(material_1.Accordion, { "aria-labelledby": labelHtmlId, expanded: expanded, onChange: handleExpansion(childPath) },
        react_1.default.createElement(material_1.AccordionSummary, { expandIcon: react_1.default.createElement(ExpandMore_1.default, null) },
            react_1.default.createElement(material_1.Grid, { container: true, alignItems: 'center' },
                react_1.default.createElement(material_1.Grid, { item: true, xs: 7, md: 9 },
                    react_1.default.createElement(material_1.Grid, { container: true, alignItems: 'center' },
                        react_1.default.createElement(material_1.Grid, { item: true, xs: 2, md: 1 },
                            react_1.default.createElement(material_1.Avatar, { "aria-label": 'Index' }, index + 1)),
                        react_1.default.createElement(material_1.Grid, { item: true, xs: 10, md: 11 },
                            react_1.default.createElement("span", { id: labelHtmlId }, childLabel)))),
                react_1.default.createElement(material_1.Grid, { item: true, xs: 5, md: 3 },
                    react_1.default.createElement(material_1.Grid, { container: true, justifyContent: 'flex-end' },
                        react_1.default.createElement(material_1.Grid, { item: true },
                            react_1.default.createElement(material_1.Grid, { container: true, direction: 'row', justifyContent: 'center', alignItems: 'center' },
                                appliedUiSchemaOptions.showSortButtons ? (react_1.default.createElement(react_1.Fragment, null,
                                    react_1.default.createElement(material_1.Grid, { item: true },
                                        react_1.default.createElement(material_1.IconButton, { onClick: moveUp(path, index), style: iconStyle, disabled: !enableMoveUp, "aria-label": "Move up", size: 'large' },
                                            react_1.default.createElement(ArrowUpward_1.default, null))),
                                    react_1.default.createElement(material_1.Grid, { item: true },
                                        react_1.default.createElement(material_1.IconButton, { onClick: moveDown(path, index), style: iconStyle, disabled: !enableMoveDown, "aria-label": "Move down", size: 'large' },
                                            react_1.default.createElement(ArrowDownward_1.default, null))))) : (''),
                                react_1.default.createElement(material_1.Grid, { item: true },
                                    react_1.default.createElement(material_1.IconButton, { onClick: removeItems(path, [index]), style: iconStyle, "aria-label": "Delete", size: 'large' },
                                        react_1.default.createElement(Delete_1.default, null))))))))),
        react_1.default.createElement(material_1.AccordionDetails, null,
            react_1.default.createElement(react_2.JsonFormsDispatch, { schema: schema, uischema: foundUISchema, path: childPath, key: childPath, renderers: renderers, cells: cells }))));
};
var ExpandPanelRenderer = react_1.default.memo(ExpandPanelRendererComponent);
/**
 * Maps state to dispatch properties of an expand pandel control.
 *
 * @param dispatch the store's dispatch method
 * @returns {DispatchPropsOfArrayControl} dispatch props of an expand panel control
 */
var ctxDispatchToExpandPanelProps = function (dispatch) { return ({
    removeItems: react_1.useCallback(function (path, toDelete) { return function (event) {
        event.stopPropagation();
        dispatch(core_1.update(path, function (array) {
            toDelete
                .sort()
                .reverse()
                .forEach(function (s) { return array.splice(s, 1); });
            return array;
        }));
    }; }, [dispatch]),
    moveUp: react_1.useCallback(function (path, toMove) { return function (event) {
        event.stopPropagation();
        dispatch(core_1.update(path, function (array) {
            core_1.moveUp(array, toMove);
            return array;
        }));
    }; }, [dispatch]),
    moveDown: react_1.useCallback(function (path, toMove) { return function (event) {
        event.stopPropagation();
        dispatch(core_1.update(path, function (array) {
            core_1.moveDown(array, toMove);
            return array;
        }));
    }; }, [dispatch])
}); };
exports.ctxDispatchToExpandPanelProps = ctxDispatchToExpandPanelProps;
/**
 * Map state to control props.
 * @param state the JSON Forms state
 * @param ownProps any own props
 * @returns {StatePropsOfControl} state props for a control
 */
var withContextToExpandPanelProps = function (Component) { return function (_a) {
    var ctx = _a.ctx, props = _a.props;
    var dispatchProps = exports.ctxDispatchToExpandPanelProps(ctx.dispatch);
    var childLabelProp = props.childLabelProp, schema = props.schema, path = props.path, index = props.index, uischemas = props.uischemas;
    var childPath = core_1.composePaths(path, "" + index);
    var childData = core_1.Resolve.data(ctx.core.data, childPath);
    var childLabel = childLabelProp
        ? get_1.default(childData, childLabelProp, '')
        : get_1.default(childData, core_1.getFirstPrimitiveProp(schema), '');
    return (react_1.default.createElement(Component, tslib_1.__assign({}, props, dispatchProps, { childLabel: childLabel, childPath: childPath, uischemas: uischemas })));
}; };
exports.withContextToExpandPanelProps = withContextToExpandPanelProps;
var withJsonFormsExpandPanelProps = function (Component) {
    return react_2.withJsonFormsContext(exports.withContextToExpandPanelProps(Component));
};
exports.withJsonFormsExpandPanelProps = withJsonFormsExpandPanelProps;
exports.default = exports.withJsonFormsExpandPanelProps(ExpandPanelRenderer);
//# sourceMappingURL=ExpandPanelRenderer.js.map