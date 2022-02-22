import React from 'react';
import { RankedTester, StatePropsOfLayout, Tester } from '@jsonforms/core';
import { AjvProps } from '../util/layout';
export declare const isSingleLevelCategorization: Tester;
export declare const materialCategorizationTester: RankedTester;
export interface CategorizationState {
    activeCategory: number;
}
export interface MaterialCategorizationLayoutRendererProps extends StatePropsOfLayout, AjvProps {
    selected?: number;
    ownState?: boolean;
    data?: any;
    onChange?(selected: number, prevSelected: number): void;
}
export declare const MaterialCategorizationLayoutRenderer: (props: MaterialCategorizationLayoutRendererProps) => JSX.Element;
declare const _default: React.ComponentType<import("@jsonforms/core").OwnPropsOfLayout>;
export default _default;
