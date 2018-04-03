/*
 *
 * Connect
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import NavBar from 'components/NavBar';

export default class Connect extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Connect" meta={[ { name: 'description', content: 'Description of Connect' }]}/>
        <NavBar/>
        <div>
        <img src={require('../Images/SK.jpg')} alt={"Stephanie Keil"} className="image"/>
        </div>
      </div>
    );
  }
}
