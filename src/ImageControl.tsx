import {
  JsonSchema,
  ControlProps,
  isStringControl,
  RankedTester,
  rankWith,
  schemaMatches,
  scopeEndsWith,
  and,
} from '@jsonforms/core';
import { Grid, Typography } from '@mui/material';
import { Unwrapped } from '@jsonforms/material-renderers';
import { withJsonFormsControlProps } from '@jsonforms/react';
const { MaterialTextControl } = Unwrapped;


export const imageControl = (props: ControlProps) => {
	const schema = props.schema as JsonSchema;
  return (
    <Grid container>

        <img style={{ maxWidth: 250 }} src={props.data}></img>
        <MaterialTextControl {...props}/>

    </Grid>
  );
};


export const imageControlTester: RankedTester = rankWith(
  5,
  and(
    isStringControl,
    scopeEndsWith('URL')
  )
);
export default withJsonFormsControlProps(imageControl);