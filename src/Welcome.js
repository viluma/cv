import React, { Component } from 'react';
import './Welcome.css';
import { Parallax, Background } from 'react-parallax';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton} from 'react-mdl'
import Image from './assets/sound.png';
import Image1 from './assets/africa.png';
import Image2 from './assets/portfolio.png';
import Resume from './Resume';

const MyComponent = () => (
  <div>

  <div>
    <Parallax
      blur={2}
      bgImage={require('./assets/side.jpg')}
      bgImageAlt="the cat"
      strength={200}
      bgheight={'auto'}
      opacity='0%'
    >


      <div style={{ height: '400px' }} >

      <h1 class="aviso">LOOKING FOR A JUNIOR WEB DEVELOPER?</h1> 
      </div>
    </Parallax>

</div>

<div class="carde">

 <p ><strong> JUNIOR WEB DEVELOPER | IT ENGINEER

</strong> </p>

<p>Hi! My name is Vivian.  I am a 25 year old Web Developer with a 5 years bachelors degree in IT 
engineering seeking new challenges.<br/> I am positive, organized and team oriented in the way I work.

My main focus has been React, Wordpress and Ruby on Rails.

During my studies, I worked a with php, java(Eclipse), C++ & Matlab. <br/>

As a recent Graduate, I'm looking forward to join the job market and use my skills.</p><br/>
  
</div>

<div>
     <Parallax
      blur={0.5}
      bgImage={require('./assets/cpk1.jpg')}
      bgImageAlt="the cat"
      strength={200}
      bgheight={'auto'}
      offsetYMax={20}
    >

      <div style={{ height: '500px' }} />
    </Parallax>


    <div class="trabalho">

<div></div>
<div><p><stromg class="titulos">PROJECTS </stromg></p></div>
<div>

 <Grid className="demo-grid-1">
        <Cell col={4}><Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#fff', backgroundImage: `url(${Image1})`}}>Update</CardTitle>
    <CardText>
        A Blog to show all the restaurant,Bars and events happening in Copenhagen. I'm working with Wordpress.
    </CardText>
    <CardActions border>
        <a href="http://africaincopenhagen.com/"><Button colored>Check out</Button></a>
    </CardActions>
</Card></Cell>
        <Cell col={4}><Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#fff',  backgroundImage: `url(${Image})`}}></CardTitle>
    <CardText>
        Participation on a music website working with react.
    </CardText>
    <CardActions border>
       <a href="https://www.soundtracktor.com/en"><Button colored>Check out</Button></a>
    </CardActions>
</Card></Cell>
        <Cell col={4}><Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
    <CardTitle expand style={{color: '#fff', backgroundImage: `url(${Image2})`}}></CardTitle>
    <CardText>
       My personal Portfolio and blog, its a website that i'm working on it using react and node.js
    </CardText>
    <CardActions border>
        <a href="http://www.viluma.dk/"><Button colored>Check out</Button></a>
    </CardActions>
</Card></Cell>
    </Grid>
  </div>


<div><p class="">I'm available for work, get in touch
 </p></div>


</div>
    
</div>

  </div>
);
export default MyComponent;