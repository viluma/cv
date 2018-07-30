import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './main';
import { Link } from 'react-router-dom';
import CssModules from 'react-css-modules';
import styles from './Resume.css';
import {Layout, Content, Header, Navigation, Drawer, Footer, FooterLinkList, FooterSection, Grid, Cell } from 'react-mdl'
import Welcome from './Welcome';



class App extends Component {
  render() {
    return (    <div>


<div style={{height: '300px', position: 'relative'}}>
<div>
          
    <Layout fixedHeader>

        <Header transparent title={<span><span >  </span><strong><a href="/" class="titul">Vivian Seerup</a></strong></span>}>

            <Navigation >
               
                <Link to= "/" style={{ color: 'orange'
                 }}>Welcome</Link>
                <Link to="/Resume" >Resume</Link>
                
            </Navigation>
            

        </Header>
        <Drawer title="Title">
            <Navigation >
               <Link to="/">Welcome</Link>
                <Link to="/Resume">Resume</Link>
                
            </Navigation>
        </Drawer>
        <Content >
        <div className="page-content" />
         
           </Content> 
    </Layout>
     <Main/>

     <div>

<Footer size="mini">
    <FooterSection type="left" logo="">
        <FooterLinkList><div class="si">

<div >

    
    <Grid className="demo-grid-ruler"><p class="si">
        <Cell col={4}> <a href="https://www.linkedin.com/in/vivian-luisa-seerup-24a792bb/"><i class="fa fa-linkedin si"></i></a></Cell>
        <Cell col={4}> <a href="https://www.facebook.com/profile.php?id=100007712745224"><i class="fa fa-facebook"></i></a></Cell>
        <Cell col={4}> <i class="fa fa-envelope">vivianseerup@gmail.com</i></Cell>
        <Cell col={4}> <i class="fa fa-phone-square">+4553638035</i></Cell></p>
    </Grid>
    
</div>


           
            </div>
        </FooterLinkList>
    </FooterSection>
</Footer>

</div>
</div> </div>




 </div>

    );
  }
}

export default App;
