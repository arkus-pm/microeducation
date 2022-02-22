/// <reference types="react" />
import { JsonFormsRendererRegistryEntry } from '@jsonforms/core';
/**
 * Includes all 'materialRenderers' and adds additional renderers based on '@mui/lab'
 */
export declare const extendedMaterialRenderers: JsonFormsRendererRegistryEntry[];
export declare const ExtendedUnwrapped: {
    MaterialAutocompleteEnumControl: (props: import("@jsonforms/core").ControlProps & import("@jsonforms/core").OwnPropsOfEnum & import("./MuiAutocomplete").WithOptionLabel) => JSX.Element;
    MaterialAutocompleteOneOfEnumControl: (props: import("@jsonforms/core").ControlProps & import("@jsonforms/core").OwnPropsOfEnum & import("./MuiAutocomplete").WithOptionLabel) => JSX.Element;
};
