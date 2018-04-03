/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';

import NavBar from 'components/NavBar';
import Slider from 'components/Slider';
import Dropdown from 'components/Dropdown';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>
        {/* <NavBar/> */}
        <Dropdown/>
        <Slider/>

      </div>
    );
  }
}
