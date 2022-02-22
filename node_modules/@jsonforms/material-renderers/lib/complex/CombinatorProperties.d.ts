import React from 'react';
import { JsonSchema, Layout, UISchemaElement } from '@jsonforms/core';
interface CombinatorPropertiesProps {
    schema: JsonSchema;
    combinatorKeyword: 'oneOf' | 'anyOf';
    path: string;
}
export declare const isLayout: (uischema: UISchemaElement) => uischema is Layout;
export declare class CombinatorProperties extends React.Component<CombinatorPropertiesProps, {}> {
    render(): JSX.Element;
}
export default CombinatorProperties;
