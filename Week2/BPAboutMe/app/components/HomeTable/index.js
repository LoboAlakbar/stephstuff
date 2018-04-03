/**
*
* HomeTable
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class HomeTable extends React.PureComponent {
  render() {
    return (
    <div>
        
      {/*}<table style="width:75%" align="center">*/}
      <table>
        <tbody>
        <tr>
          <th className="subhead">About</th>
        </tr>
        <tr className="paragraph">
          <td>From:</td>
          <td>Spring Lake Park, Minnesota</td>
        </tr>
        <tr className="paragraph">
          <td>Pets:</td>
          <td>Darla</td>
        </tr>
        <tr className="paragraph">
          <td>Current Location</td>
          <td>Grovetown, GA</td>
        </tr>
        </tbody>
      </table>
      
      </div>
    );
  }
}
