import React, { Component } from 'react';
import './Welcome.css';
import { Parallax, Background } from 'react-parallax';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, CardMenu, Button, IconButton} from 'react-mdl'
import Image from './assets/sound.png';
import Image1 from './assets/africa.png';
import Image2 from './assets/portfolio.png';

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

      <h1 class="aviso">LOOKING FOR A JUNIOR WEB DEVELOPER?<br/><br/>
      <a href="http://localhost:3000/Resume" > <button class="button1"  type="button">View Resume</button></a></h1> 
      </div>
    </Parallax>

</div>

<div class="carde">

 <p ><strong> JUNIOR WEB DEVELOPER | IT ENGINEER

</strong> </p>

<p>Hi, I’m Vivian. Nice to meet you.

I am 25 years old Junior web developer with a 5 years bachelors degree in IT
engineering seeking new challenges.
I am positive, organized and team oriented in the
way I work. My main focus has been React,
Wordpress and Ruby on Rails. 
During the studies, I worked a bit with php, java(Eclipse), C++, Matlab,
 what would make easier to quickly understand and learn the tools you a using at your company.</p>
<p>  As a recente Graduate, i'm looking forward to show all my skills in this new carreer.</p><br/> <br/>
  
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