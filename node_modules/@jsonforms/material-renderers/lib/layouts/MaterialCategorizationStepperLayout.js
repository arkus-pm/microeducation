"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialCategorizationStepperLayoutRenderer = exports.materialCategorizationStepperTester = void 0;
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
var react_1 = tslib_1.__importStar(require("react"));
var merge_1 = tslib_1.__importDefault(require("lodash/merge"));
var material_1 = require("@mui/material");
var core_1 = require("@jsonforms/core");
var react_2 = require("@jsonforms/react");
var layout_1 = require("../util/layout");
exports.materialCategorizationStepperTester = core_1.rankWith(2, core_1.and(core_1.uiTypeIs('Categorization'), core_1.categorizationHasCategory, core_1.optionIs('variant', 'stepper')));
var MaterialCategorizationStepperLayoutRenderer = function (props) {
    var _a = react_1.useState(0), activeCategory = _a[0], setActiveCategory = _a[1];
    var handleStep = function (step) {
        setActiveCategory(step);
    };
    var data = props.data, path = props.path, renderers = props.renderers, schema = props.schema, uischema = props.uischema, visible = props.visible, cells = props.cells, config = props.config, ajv = props.ajv;
    var categorization = uischema;
    var appliedUiSchemaOptions = merge_1.default({}, config, uischema.options);
    var buttonWrapperStyle = {
        textAlign: 'right',
        width: '100%',
        margin: '1em auto'
    };
    var buttonNextStyle = {
        float: 'right'
    };
    var buttonStyle = {
        marginRight: '1em'
    };
    var categories = categorization.elements.filter(function (category) {
        return core_1.isVisible(category, data, undefined, ajv);
    });
    var childProps = {
        elements: categories[activeCategory].elements,
        schema: schema,
        path: path,
        direction: 'column',
        visible: visible,
        renderers: renderers,
        cells: cells
    };
    return (react_1.default.createElement(material_1.Hidden, { xsUp: !visible },
        react_1.default.createElement(material_1.Stepper, { activeStep: activeCategory, nonLinear: true }, categories.map(function (e, idx) { return (react_1.default.createElement(material_1.Step, { key: e.label },
            react_1.default.createElement(material_1.StepButton, { onClick: function () { return handleStep(idx); } }, e.label))); })),
        react_1.default.createElement("div", null,
            react_1.default.createElement(layout_1.MaterialLayoutRenderer, tslib_1.__assign({}, childProps))),
        !!appliedUiSchemaOptions.showNavButtons ? (react_1.default.createElement("div", { style: buttonWrapperStyle },
            react_1.default.createElement(material_1.Button, { style: buttonNextStyle, variant: "contained", color: "primary", disabled: activeCategory >= categories.length - 1, onClick: function () { return handleStep(activeCategory + 1); } }, "Next"),
            react_1.default.createElement(material_1.Button, { style: buttonStyle, color: "secondary", variant: "contained", disabled: activeCategory <= 0, onClick: function () { return handleStep(activeCategory - 1); } }, "Previous"))) : (react_1.default.createElement(react_1.default.Fragment, null))));
};
exports.MaterialCategorizationStepperLayoutRenderer = MaterialCategorizationStepperLayoutRenderer;
exports.default = react_2.withJsonFormsLayoutProps(layout_1.withAjvProps(exports.MaterialCategorizationStepperLayoutRenderer));
//# sourceMappingURL=MaterialCategorizationStepperLayout.js.map