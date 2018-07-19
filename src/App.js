import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Layout, Drawer, Navigation, Content, Header } from 'react-mdl';
import Main from './main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (

      <div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <Header transparent title="Vivian Machindano" style={{color: 'white'}}>
            <Navigation>
                 <Link to="/Welcome">Welcome</Link>
                <Link to="/Resume">Resume</Link>
                <Link to="/Blog">Blog</Link>
                <Link to="/Portfolio">Portfolio</Link>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                 <Link to="/Welcome">Welcome</Link>
                <Link to="/Resume">Resume</Link>
                <Link to="/Blog">Blog</Link>
                <Link to="/Portfolio">Portfolio</Link>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>


    );
  }
}

export default App;
