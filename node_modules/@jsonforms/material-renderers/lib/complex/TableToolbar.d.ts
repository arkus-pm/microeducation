import React from 'react';
import { ControlElement, JsonSchema } from '@jsonforms/core';
export interface MaterialTableToolbarProps {
    numColumns: number;
    errors: string;
    label: string;
    path: string;
    uischema: ControlElement;
    schema: JsonSchema;
    rootSchema: JsonSchema;
    enabled: boolean;
    addItem(path: string, value: any): () => void;
}
declare const TableToolbar: React.MemoExoticComponent<({ numColumns, errors, label, path, addItem, schema, enabled }: MaterialTableToolbarProps) => JSX.Element>;
export default TableToolbar;
