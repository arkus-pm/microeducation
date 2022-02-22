"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.materialCells = exports.materialRenderers = void 0;
var tslib_1 = require("tslib");
var complex_1 = require("./complex");
var additional_1 = require("./additional");
var controls_1 = require("./controls");
var layouts_1 = require("./layouts");
var cells_1 = require("./cells");
var MaterialCategorizationStepperLayout_1 = tslib_1.__importStar(require("./layouts/MaterialCategorizationStepperLayout"));
tslib_1.__exportStar(require("./complex"), exports);
tslib_1.__exportStar(require("./controls"), exports);
tslib_1.__exportStar(require("./layouts"), exports);
tslib_1.__exportStar(require("./cells"), exports);
tslib_1.__exportStar(require("./mui-controls"), exports);
tslib_1.__exportStar(require("./util"), exports);
exports.materialRenderers = [
    // controls
    {
        tester: complex_1.materialArrayControlTester,
        renderer: complex_1.MaterialArrayControlRenderer
    },
    { tester: controls_1.materialBooleanControlTester, renderer: controls_1.MaterialBooleanControl },
    { tester: controls_1.materialBooleanToggleControlTester, renderer: controls_1.MaterialBooleanToggleControl },
    { tester: controls_1.materialNativeControlTester, renderer: controls_1.MaterialNativeControl },
    { tester: controls_1.materialEnumControlTester, renderer: controls_1.MaterialEnumControl },
    { tester: controls_1.materialIntegerControlTester, renderer: controls_1.MaterialIntegerControl },
    { tester: controls_1.materialNumberControlTester, renderer: controls_1.MaterialNumberControl },
    { tester: controls_1.materialTextControlTester, renderer: controls_1.MaterialTextControl },
    { tester: controls_1.materialDateTimeControlTester, renderer: controls_1.MaterialDateTimeControl },
    { tester: controls_1.materialDateControlTester, renderer: controls_1.MaterialDateControl },
    { tester: controls_1.materialTimeControlTester, renderer: controls_1.MaterialTimeControl },
    { tester: controls_1.materialSliderControlTester, renderer: controls_1.MaterialSliderControl },
    { tester: complex_1.materialObjectControlTester, renderer: complex_1.MaterialObjectRenderer },
    { tester: complex_1.materialAllOfControlTester, renderer: complex_1.MaterialAllOfRenderer },
    { tester: complex_1.materialAnyOfControlTester, renderer: complex_1.MaterialAnyOfRenderer },
    { tester: complex_1.materialOneOfControlTester, renderer: complex_1.MaterialOneOfRenderer },
    {
        tester: controls_1.materialRadioGroupControlTester,
        renderer: controls_1.MaterialRadioGroupControl
    },
    {
        tester: controls_1.materialOneOfRadioGroupControlTester,
        renderer: controls_1.MaterialOneOfRadioGroupControl
    },
    { tester: controls_1.materialOneOfEnumControlTester, renderer: controls_1.MaterialOneOfEnumControl },
    // layouts
    { tester: layouts_1.materialGroupTester, renderer: layouts_1.MaterialGroupLayout },
    {
        tester: layouts_1.materialHorizontalLayoutTester,
        renderer: layouts_1.MaterialHorizontalLayout
    },
    { tester: layouts_1.materialVerticalLayoutTester, renderer: layouts_1.MaterialVerticalLayout },
    {
        tester: layouts_1.materialCategorizationTester,
        renderer: layouts_1.MaterialCategorizationLayout
    },
    {
        tester: MaterialCategorizationStepperLayout_1.materialCategorizationStepperTester,
        renderer: MaterialCategorizationStepperLayout_1.default
    },
    { tester: layouts_1.materialArrayLayoutTester, renderer: layouts_1.MaterialArrayLayout },
    // additional
    { tester: additional_1.materialLabelRendererTester, renderer: additional_1.MaterialLabelRenderer },
    {
        tester: additional_1.materialListWithDetailTester,
        renderer: additional_1.MaterialListWithDetailRenderer
    },
    {
        tester: controls_1.materialAnyOfStringOrEnumControlTester,
        renderer: controls_1.MaterialAnyOfStringOrEnumControl
    },
    {
        tester: complex_1.materialEnumArrayRendererTester,
        renderer: complex_1.MaterialEnumArrayRenderer
    }
];
exports.materialCells = [
    { tester: cells_1.materialBooleanCellTester, cell: cells_1.MaterialBooleanCell },
    { tester: cells_1.materialBooleanToggleCellTester, cell: cells_1.MaterialBooleanToggleCell },
    { tester: cells_1.materialDateCellTester, cell: cells_1.MaterialDateCell },
    { tester: cells_1.materialEnumCellTester, cell: cells_1.MaterialEnumCell },
    { tester: cells_1.materialIntegerCellTester, cell: cells_1.MaterialIntegerCell },
    { tester: cells_1.materialNumberCellTester, cell: cells_1.MaterialNumberCell },
    { tester: cells_1.materialNumberFormatCellTester, cell: cells_1.MaterialNumberFormatCell },
    { tester: cells_1.materialOneOfEnumCellTester, cell: cells_1.MaterialOneOfEnumCell },
    { tester: cells_1.materialTextCellTester, cell: cells_1.MaterialTextCell },
    { tester: cells_1.materialTimeCellTester, cell: cells_1.MaterialTimeCell }
];
//# sourceMappingURL=index.js.map