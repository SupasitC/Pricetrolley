import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, FormControl, FormGroup, Button, MenuItem} from 'react-bootstrap';

export default class TopBar extends React.Component{
  
  render(){
    const theme = require('../../styles/theme.css');
    return(
      <div>
        <header id="header" className={theme.header-narrow} data-plugin-option='{"stickyEnabled": true, "stickyEnableOnBoxed": true, "stickyEnableOnMobile": true, "stickyStartAt": 57, "stickySetTop": "-57px", "stickyChangeLogo": false}'>
        </header>
      </div>
    )
  }
}
