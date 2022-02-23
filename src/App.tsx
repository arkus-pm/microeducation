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

// const uischema = Generate.uiSchema(schema);
let arr = [
Generate.uiSchema(schema),
Generate.uiSchema(schema.properties.courses.items),
Generate.uiSchema(schema.properties.courses.items.properties.episodes.items),
Generate.uiSchema(schema.properties.courses.items.properties.episodes.items.properties.stories.items),
Generate.uiSchema(schema.properties.courses.items.properties.card),
Generate.uiSchema(schema.properties.courses.items.properties.preview)
];
arr.forEach(e=>console.log(JSON.stringify(e)));


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

const initialData = {};//{  "type": "object",  "properties": {    "name": {      "type": "string"    },    "vegetarian": {      "type": "boolean"    },    "birthDate": {      "type": "string"    },    "personalData": {      "type": "object",      "properties": {        "age": {          "type": "integer"        }      },      "additionalProperties": true,      "required": [        "age"      ]    },    "postalCode": {      "type": "string"    }  },  "additionalProperties": true,  "required": [    "name",    "vegetarian",    "birthDate",    "personalData",    "postalCode"  ]}//{"version":1.23,"contentURL":"","courses":[{"version":1.23123,"id":"bddab411-0bca-44f8-92c1-9204555d8045","flowTopic":"QA test","card":{"title":"Forge of the heart","imageURL":"http://mw1.google.com/mw-planetary/sky/skytiles_v1/50_49_6.jpg","description":"Some description..."},"preview":{"title":"Forge of the heart","imageURL":"http://mw1.google.com/mw-planetary/sky/skytiles_v1/50_49_6.jpg","overview":"Some overview..."},"episodes":[{"id":"5b171580-813e-415b-8b3c-b69c546ba54f","position":0,"title":"Focus on something else","description":"Learn technics to control...","stories":[{"id":"648a1650-22d6-4d75-8167-8eb90c0c79a2","version":1.23,"position":1,"transition":{"type":"fade_in"},"content":{"type":"textIllustration","illustrationURL":"http://mw1.google.com/mw-planetary/sky/skytiles_v1/50_49_6.jpg","text":"<b>Greetings<\\b>\n\nLet\\s start our journey with a few kind words about yourself\n\nYou are brave to be here!"}}]},{"id":"f33cc592-f16c-4701-8d95-44e71e85468b","position":1,"title":"Episode 2","description":"Episode 2 description","stories":[{"id":"b48b01d7-05f8-469b-9034-a1af04a28fca","version":1.23,"position":1,"transition":{"type":"fade_in"},"content":{"type":"textIllustration","illustrationURL":"http://mw1.google.com/mw-planetary/sky/skytiles_v1/50_49_6.jpg","text":"<b>Greetings<\\b>\n\nLet\\s start our journey with a few kind words about yourself\n\nYou are brave to be here!"}}]}]}]};

const renderers = [
  ...materialRenderers,
  //register custom renderers
  { tester: ratingControlTester, renderer: RatingControl },
];

const App = () => {
  const classes = useStyles();
  const [data, setData] = useState<any>(initialData);
  const stringifiedData = useMemo(() => JSON.stringify(data, null, 2), [data]);

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
              onChange={({ errors, data }) => {setData(data);}}
              ajv={handleDefaultsAjv}
            />
          </div>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default App;
