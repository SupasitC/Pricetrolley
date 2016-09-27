import React from 'react';
import { Nav, Navbar, NavItem, NavDropdown, FormControl, FormGroup, Button, MenuItem} from 'react-bootstrap';
import classnames from 'classnames';

export default class TopBar extends React.Component{
  
  render(){
    const theme = require('./../../styles/theme.scss');
    
    return(
      <div>
        <header id="header" data-plugin-options='{"stickyEnabled": true, "stickyEnableOnBoxed": true, "stickyEnableOnMobile": true, "stickyStartAt": 57, "stickySetTop": "-57px", "stickyChangeLogo": true}'>
          <div className={theme['header-body']}>
            <div className={classnames(theme['header-container'],theme.container)}>
              <div className={theme['header-row']}>
                <div className={theme['header-column']}>
                  <div className={theme['header-logo']}>
                    <a href="/home">
                      <img alt="Porto" width="111" height="54" data-sticky-width="82" data-sticky-height="40" data-sticky-top="33" src={"./images/logo.png"}/>
                    </a>
                  </div>
                </div>
                <div className={theme['header-column']}>
                  <div className={theme['header-row']}>
                    <div className={classnames(theme['header-search'],theme['hidden-xs'])}>
                      <form id="searchForm" action="/products" method="get">
                        <div className={theme['input-group']}>
                          <input type="text" className={theme['form-control']} name="q" id="q" placeholder="Search..." required/>
                            <span className={theme['input-group-btn']}>
                              <button className={classnames(theme['btn'],theme['btn-default'])} type="submit">
                                <i className={classnames(theme['fa'],theme['fa-search'])}></i>
                              </button>
                            </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
