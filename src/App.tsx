import { Fragment, useState, useMemo } from 'react';
import { JsonForms } from '@jsonforms/react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import logo from './logo.svg';
import './App.css';
import schema from './schema.json';
import uischema from './uischema.json';
import { UISchemaElement } from '@jsonforms/core';
import {
  materialCells,
  materialRenderers,
} from '@jsonforms/material-renderers';
import RatingControl from './RatingControl';
import ratingControlTester from './ratingControlTester';
import { makeStyles } from '@mui/styles';
import { createAjv } from '@jsonforms/core';
import { Generate } from '@jsonforms/core';
import { v4 as uuidv4 } from 'uuid';
import React, { useRef, useLayoutEffect } from 'react';


const handleDefaultsAjv = createAjv({useDefaults: true});

const useStyles = makeStyles({
  container: {
    padding: '1em',
    width: '100%',
    height: 'auto'
  },
  title: {
    textAlign: 'center',
    padding: '0.25em',
  },
  dataContent: {
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'left',
    borderRadius: '0.25em',
    backgroundColor: '#fefefe',
    marginBottom: '1rem',
    maxHeight: '300px',
    width: '100%'
  },
  resetButton: {
    margin: 'auto !important',
    display: 'block !important',
  },
  demoform: {
    margin: 'auto',
    padding: '1rem',
  },
});

const initialData = {};

const renderers = [
  ...materialRenderers,
  //register custom renderers
  { tester: ratingControlTester, renderer: RatingControl },
];

const modifiedData = (s: string):string => {return s.replaceAll(/\$uuid/g,uuidv4())};

const App = () => {
  const classes = useStyles();
  const [data, setData] = useState<any>(initialData);
  const stringifiedData = useMemo(() => JSON.stringify(data, null, 2), [data]);

  const setDataWithGeneration = (formData:any) => {
    let positionedData = formData;
    if (positionedData.courses) positionedData.courses = positionedData.courses.map((c:any)=>{if (c.episodes) c.episodes.map((ep:any,i:number)=>{ep.position=i; if (ep.stories) ep.stories = ep.stories.map((st:any,j:number)=>{st.position=j; return st}); return ep});return c});
    let stringifiedWithGenerationFormData = JSON.stringify(positionedData).replaceAll(/\$uuid/g,uuidv4());
    let generationFormData = JSON.parse(stringifiedWithGenerationFormData);
    let stringifiedFormData = JSON.stringify(formData);
    (stringifiedFormData != stringifiedWithGenerationFormData) ? setData(generationFormData) : setData(formData);
  }



  const clearData = () => {
    setData({});
  };

  

const [displayBound, setDisplayBound] = useState<boolean>(true);
const toggleJSONView = () => {setDisplayBound(!displayBound)};

  return (
    <Fragment>

      <Grid
        container
        direction="column"
        justifyContent="center"
        spacing={2}
        className={classes.container}
      >
        <Grid item sm={6}>
          {displayBound && <Typography variant={'h4'} className={classes.title}>
            JSON
          </Typography>}
           {displayBound &&  <TextField
            className={classes.dataContent}
            id='boundData'
            multiline
            variant="outlined" 
            value={stringifiedData}
            onChange={(event)=>{ setData(JSON.parse(event.target.value));}}
            >
            </TextField> }
          <Grid
          container
          justifyContent="center"
          direction="row"
          spacing={2}
          >
          <Grid item>
          <Button
            onClick={clearData}
            color='primary'
            variant='contained'
          >
            Clear data
          </Button>
          </Grid>
          <Grid item>
          <Button
            onClick={toggleJSONView}
            color='secondary'
            variant='contained'
          >
            {!displayBound?'Show':'Hide'} JSON
          </Button>
          </Grid>
          </Grid>
        </Grid>
        <Grid item sm={6}>
          <Typography variant={'h4'} className={classes.title}>
            MicroEd Form
          </Typography>
          <div className={classes.demoform}>
            <JsonForms
              schema={schema}
              uischema={uischema}
              data={data}
              renderers={renderers}
              cells={materialCells}
              onChange={({ errors, data }) => {
               setDataWithGeneration(data);
              }}
              ajv={handleDefaultsAjv}
            />
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default App;
