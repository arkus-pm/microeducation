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
import React, { useRef, useLayoutEffect, memo } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useMatch,
  useResolvedPath
} from "react-router-dom";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const important = <T extends string>(s: T): T => `${s} !important` as T;

const handleDefaultsAjv = createAjv({useDefaults: true});

const useStyles = makeStyles({
  episodeDescription: {
    textAlign: 'left',
    overflowY: "auto",
   textOverflow: "ellipsis",
   display: "-webkit-box",
   "-webkit-line-clamp": 5, /* number of lines to show */
           "line-clamp": 5, 
   "-webkit-box-orient": "vertical"
  },
  storyDescription: {
   textAlign: 'left',
   overflowY: "auto",
   textOverflow: "ellipsis",
   display: "-webkit-box",
   "-webkit-line-clamp": 15, /* number of lines to show */
           "line-clamp": 15, 
   "-webkit-box-orient": "vertical"
  },
  fauxButton: {
    textTransform: important("none")
  },
  container: {
    padding: '1em',
    width: '100%',
    height: 'auto'
  },
  title: {
    textAlign: 'left',
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

const [params, setParams] = useState<any>({preview: false});


function togglePreview(){
  params.preview = !params.preview;
  setParams({...params});
  
}

console.log(JSON.stringify(params));

  const clearData = () => {
    setData({});
  };

  

const [displayBound, setDisplayBound] = useState<boolean>(true);
const toggleJSONView = () => {setDisplayBound(!displayBound)};

// function Main(){
//   return (
    
//   );
// }

function renderCourses(courses:any){
   if (courses) return ( courses.map((c:any, i:number)=>{
     let currentParams = params;
      return(
        <Grid item>

          <Button className={classes.fauxButton}
          onClick={()=>{currentParams.course=""+i;currentParams.episode=null;setParams({...currentParams});console.log(currentParams)}}
          >
            {/*{c.flowTopic}*/}
            <Card sx={{ maxWidth: 345 }} raised={i==params.course}>
      <CardMedia
        component="img"
        height="140"
        image={c.card.imageURL}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant={'h6'} className={classes.title} component="div">
          {c.card.title}
        </Typography>
        <Typography variant={'body1'} className={classes.title} color="text.secondary">
          {c.card.description}
        </Typography>
        <Typography variant={'body2'} className={classes.title} color="text.secondary">
          Episodes: {c.episodes?.length||0}
        </Typography>
      </CardContent>
    </Card>
          </Button>

            </Grid>
        );
    })
   );
}

function renderEpisodes(episodes:any, courseNumber:string){    
  let currentParams = params;
   if (episodes) return ( episodes.map((e:any, i:number)=>{
      return(
        <Grid item>

          <Button className={classes.fauxButton}
          onClick={()=>{currentParams.episode=""+i;setParams({...currentParams});console.log(currentParams)}}
          >
            

            <Card sx={{ maxWidth: 345 }} raised={i==params.episode}>
      <CardContent>
        <Typography gutterBottom variant={'h6'} className={classes.title} component="div">
          {e.title}
        </Typography>
        <Typography variant={'caption'} className={classes.episodeDescription} color="text.secondary">
          {e.description}
        </Typography>
        <Typography variant={'caption'} className={classes.title} color="text.secondary">
          Stories: {e.stories?.length||0}
        </Typography>
      </CardContent>
    </Card>
          </Button>

            </Grid>
        );
    })
   );
}

function renderStories(stories:any, episodeNumber:string){    
   if (stories) return ( stories.map((s:any, i:number)=>{
      return(
        <Grid item>
          <Button className={classes.fauxButton}>
            {/*{s.id}*/}
            <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        component="img"
        height="200"
        image={s.content.illustrationURL}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant={'h6'} className={classes.title} component="div">
          {s.content.header}
        </Typography>
        <Typography variant={'caption'} className={classes.storyDescription} color="text.secondary">
          {s.content.text}
        </Typography>
      </CardContent>
    </Card>
          </Button>
            </Grid>
        );
    })
   );
}

function Preview(){
  let courses = data.courses;
  console.log(courses);
   return (
       <Grid container direction="row" xs={12}>
      {/*<a> {JSON.stringify(courses, null, 2)} </a>*/}
      
      <Grid container>
      <a> {JSON.stringify(params)} </a>
      </Grid>
      <Grid
      item
      direction="column"
      xs={2}
      >
      {renderCourses(courses)}
      </Grid>
      <Grid
      item
      direction="column"
      xs={2}
      >
      <Course/>
      </Grid>
      <Grid
      item
      direction="column"
      xs={8}
      >
      <Episode/>
      </Grid>
      
</Grid>
   );



}

function Course(){
  let currentParams = params;
  console.log("cp:"+JSON.stringify(currentParams));
  if (currentParams.course){ 
  let {episodes} = data.courses[currentParams.course||0];
  console.log(episodes);
   if (currentParams.course) return (
 <Grid>
    {/* <a> {JSON.stringify(episodes, null, 2)} </a> */}
    <Grid
    container
    direction="column"
    >
    {!!params.course?renderEpisodes(episodes,currentParams.course):null}
    </Grid>
    </Grid>
   );
 }
    return(null);



}

function Episode(){
  console.log(params);
  if (params.episode&&params.course){  
  let stories = data.courses[params.course||0].episodes[params.episode||0]!.stories;
  console.log(stories);
   return (
 <Grid>
    {/* <a> {JSON.stringify(stories, null, 2)} </a>/ */}
    <Grid
    item
    direction="row"
    container
    >
    {renderStories(stories,params.episode)}
    </Grid>
    </Grid>
   );
 }
    return(null);



}


return (

<Fragment>
<Grid container direction="row">
      <Grid
        // container
        item
        direction="column"
        justifyContent="center"
        spacing={2}
        className={classes.container}
        xs={params.preview?4:12}
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
          <Grid item>

          <Button
            color='success'
            variant='contained'
            onClick={togglePreview}
          >
            Preview
          </Button>

          </Grid>
          </Grid>
        </Grid>
        <Grid
        item
        xs
        >
          <Typography variant={'h4'} className={classes.title}>
            MicroEd Form
          </Typography>
          {!params.preview && <div className={classes.demoform}>
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
          </div>}
        </Grid>
      </Grid>
      <Grid
      item
      // container
      direction="row"
      xs={8}>
      {params.preview&&<Preview />}
      </Grid>
      </Grid>
    </Fragment>

  );
{/*return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
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
          <Grid item>
          <Link to="preview" style={{ textDecoration: 'none' }}>
          <Button
            color='secondary'
            variant='contained'
          >
            Preview
          </Button>
          </Link>
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
        } />
        <Route path="/preview" element={<Preview />} />
        <Route path="/preview/:course/">
          <Route path=":episode" element={<Preview />} />
          <Route path="" element={<Preview />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
*/}

};


export default App;
