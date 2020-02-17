import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';

import Routes from "./router/Routes"
import Layout from "./pages/Layout"

import './App.css';

function App() {
    return (

        <Router>
            <Layout>

            </Layout>

            <Routes/>

        </Router>
    );
}

export default App;
