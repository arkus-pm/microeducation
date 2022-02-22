import React from 'react';
import { ArrayLayoutProps, JsonSchema, JsonFormsCellRendererRegistryEntry } from '@jsonforms/core';
import { WithDeleteDialogSupport } from './DeleteDialog';
export interface EmptyTableProps {
    numColumns: number;
}
interface NonEmptyRowProps {
    childPath: string;
    schema: JsonSchema;
    rowIndex: number;
    moveUpCreator: (path: string, position: number) => () => void;
    moveDownCreator: (path: string, position: number) => () => void;
    enableUp: boolean;
    enableDown: boolean;
    showSortButtons: boolean;
    enabled: boolean;
    cells?: JsonFormsCellRendererRegistryEntry[];
    path: string;
}
export declare const NonEmptyRow: React.MemoExoticComponent<({ childPath, schema, rowIndex, openDeleteDialog, moveUpCreator, moveDownCreator, enableUp, enableDown, showSortButtons, enabled, cells, path }: NonEmptyRowProps & WithDeleteDialogSupport) => JSX.Element>;
export declare class MaterialTableControl extends React.Component<ArrayLayoutProps & WithDeleteDialogSupport, any> {
    addItem: (path: string, value: any) => () => void;
    render(): JSX.Element;
}
export {};
