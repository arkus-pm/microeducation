import React from 'react';
import { ComponentType } from 'react';
import Ajv from 'ajv';
import { JsonFormsCellRendererRegistryEntry, JsonFormsRendererRegistryEntry, JsonSchema, OwnPropsOfRenderer, UISchemaElement } from '@jsonforms/core';
export declare const renderLayoutElements: (elements: UISchemaElement[], schema: JsonSchema, path: string, enabled: boolean, renderers?: JsonFormsRendererRegistryEntry[], cells?: JsonFormsCellRendererRegistryEntry[]) => JSX.Element[];
export interface MaterialLayoutRendererProps extends OwnPropsOfRenderer {
    elements: UISchemaElement[];
    direction: 'row' | 'column';
}
export declare const MaterialLayoutRenderer: React.MemoExoticComponent<({ visible, elements, schema, path, enabled, direction, renderers, cells }: MaterialLayoutRendererProps) => JSX.Element>;
export interface AjvProps {
    ajv: Ajv;
}
export declare const withAjvProps: <P extends {}>(Component: React.ComponentType<AjvProps & P>) => (props: P) => JSX.Element;
