import React from 'react';
import {Navbar} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import Logo from './../../assets/moment_logHorizon_dark@2x.png'

import './../../styles/Header.css'


let Header = (props) =>
    <Navbar className="justify-content-center" id={"header"} >
        <LinkContainer to="/">
            <Navbar.Brand>
                <img
                    src={Logo}
                    className="d-inline-block align-top"
                    alt="Moment logo"
                    id={"header-title-img"}
                />
            </Navbar.Brand>
        </LinkContainer>
    </Navbar>;

export default Header;