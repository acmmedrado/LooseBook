// eslint-disable-next-line
import React, { Component } from 'react';
import './styles.css';
import Header from './components/Header';
import { withStyles } from "@material-ui/core/styles";

import Routes from './routes';


const styles = () => ({
  background: {
    position: "absolute",
    height: "100%",
    width: "100%",
    background:
    "url(https://i.imgur.com/DymLuKV.png) center center"
  }
});
const App = ({ classes }) => (
  <div className={classes.background} >
    <Header />
    <Routes />
  </div>
);

export default withStyles(styles)(App);


