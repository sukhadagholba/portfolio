import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';



const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appbar:{
    position:"relative",
    webkitfontSmoothing: 'antialiased',
    backgroundColor: '#202124',
    boxShadow: '0 2px 4px rgba(0, 0, 0, .5)',
  },

  appbarTitle:{
    fontFamily: "Roboto mono, monospace",
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    }
  },

  linkStyle:{
    textDecoration: 'none',
  },

  linkText: {
    display: 'flex',
    paddingRight: 50,
    textDecoration: 'none',
    //marginLeft: 'auto',
    //paddingLeft: 100,
    color: 'white',
    fontFamily: "Roboto, sans-serif",
    fontWeight: 100,
    fontSize: 14,
    '&:hover': {
      color: 'gray'
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
      padding: 2,
      marginLeft: 25,
    },
  },
});

function NavBar(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" className={classes.appbar}>
        <Toolbar>
          <CssBaseline />
          <Typography className={classes.appbarTitle} variant="h6" color="inherit">
            SUKHADA GHOLBA
          </Typography>

          <a  href='/about' className={classes.linkStyle}>
            <p className={classes.linkText}>ABOUT</p>
          </a>
          <a href='/projects' className={classes.linkStyle}>
            <p className={classes.linkText}>PROJECTS</p>
          </a>
          <a href='/contact' className={classes.linkStyle}>
            <p className={classes.linkText}>CONTACT</p>
          </a>

        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);

