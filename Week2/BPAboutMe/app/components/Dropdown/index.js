/**
*
* Dropdown
*
*/

import React from 'react';

import './style.css';
import './styleM.css';

export default class Dropdown extends React.PureComponent {

  // const dropdownItems = [
  //   'Work', 'Travel' ]

  render() {
    return (
      <div>

    const navbar = (
        <Navbar>
            <NavbarHeader href="homepage.html" name="Website Name"/>
            <NavbarItems>
                <Item link="about.html" title="About" />
                <Item link="contact.html" title="Contact" />
                <Item link="services.html" title="Services" />
                <NavbarDropdown name="Features">
                      {/* <DropdownMenu menuItems={dropdownItems}/> */}
                </NavbarDropdown>
            </NavbarItems>
        </Navbar>
    );

        React.render(navbar, document.getElementById('navbar'));
      </div>
    );
  }
}
