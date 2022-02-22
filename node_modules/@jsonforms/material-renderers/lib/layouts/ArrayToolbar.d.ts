import React from 'react';
export interface ArrayLayoutToolbarProps {
    label: string;
    errors: string;
    path: string;
    addItem(path: string, data: any): () => void;
    createDefault(): any;
}
export declare const ArrayLayoutToolbar: React.MemoExoticComponent<({ label, errors, addItem, path, createDefault }: ArrayLayoutToolbarProps) => JSX.Element>;
