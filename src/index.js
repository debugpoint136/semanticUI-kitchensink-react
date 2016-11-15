import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Match, Miss }  from 'react-router';
import App from './App';
import './index.css';
import '../semantic/dist/semantic.min.css';
import ContainerExampleText from './ContainerExampleText';
import NotFound from './NotFound';

const Root = (props) => {
  return (
      <BrowserRouter>
        <div>
          <Match exactly pattern="/" component={App}/>
          <Match pattern="/example" component={ContainerExampleText}/>
          <Miss component={NotFound}/>
        </div>
      </BrowserRouter>
    )
}


export default Root;


render(
  <Root />,
  document.getElementById('root')
);
