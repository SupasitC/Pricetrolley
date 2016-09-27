import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, FormControl, FormGroup, Button, MenuItem} from 'react-bootstrap';

export default class TopBar extends React.Component{
  
  render(){
    const theme = require('./../../styles/theme.scss');
    return(
      <div>
        <header id="header" data-plugin-options='{"stickyEnabled": true, "stickyEnableOnBoxed": true, "stickyEnableOnMobile": true, "stickyStartAt": 57, "stickySetTop": "-57px", "stickyChangeLogo": true}'>
          <div className={theme.header-body}>
          </div>
        </header>
      </div>
    )
  }
}
