import React from 'react';
export interface DeleteDialogProps {
    open: boolean;
    onClose(): void;
    onConfirm(): void;
    onCancel(): void;
}
export interface WithDeleteDialogSupport {
    openDeleteDialog(path: string, data: number): void;
}
export declare const DeleteDialog: React.MemoExoticComponent<({ open, onClose, onConfirm, onCancel }: DeleteDialogProps) => JSX.Element>;
