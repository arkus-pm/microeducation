import React from 'react';
import { RankedTester, StatePropsOfLayout } from '@jsonforms/core';
import { AjvProps } from '../util/layout';
export declare const materialCategorizationStepperTester: RankedTester;
export interface CategorizationStepperState {
    activeCategory: number;
}
export interface MaterialCategorizationStepperLayoutRendererProps extends StatePropsOfLayout, AjvProps {
    data: any;
}
export declare const MaterialCategorizationStepperLayoutRenderer: (props: MaterialCategorizationStepperLayoutRendererProps) => JSX.Element;
declare const _default: React.ComponentType<import("@jsonforms/core").OwnPropsOfLayout>;
export default _default;
