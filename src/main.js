import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BlogPostPage from './views/BlogPostPage/BlogPostPage';
import Resume from './Resume';
import Blog from './Blog';
import Portfolio from './Portfolio';


const Main = () => (
  <Switch>
    <Route exact path="/" component={BlogPostPage} />
    <Route path="/Blog" component={Blog} />
    <Route path="/Resume" component={Resume} />
    <Route path="/Portfolio" component={Portfolio} />
    
  </Switch>
)

export default Main;