import React from 'react';
import {Container} from "react-bootstrap";
import Header from "../components/Headers/Header";

let Layout = (props) =>
    <div>
        <Header/>
        <Container/>
        {props.children}
    </div>;

export default Layout;