/**
*
* NavBar
*
*/

import React from 'react';
import {Link} from 'react-router-dom';



import './style.css';
import './styleM.css'; 



export default class NavBar extends React.PureComponent {
  render() {
    return (
    <div>
    <div className="page">
    <div className ="header"> Stephanie Keil</div>
      <div className="navbar">
        <nav className="nav">
          <Link to ="/Connect" >Connect</Link>
          <Link to = "/Travel" >Travels</Link>
          <Link to = "/Experience" >Experience</Link>
          <Link to = "/" >Home</Link>


        </nav>
      </div>
    </div>
    </div>

    );
  }
}
