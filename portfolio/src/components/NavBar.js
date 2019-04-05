import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import ScrollIntoView from 'react-scroll-into-view';


const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#202124',
    //marginBottom: '8%',	  
  },

  show: {
    transform: 'translateY(0)',
    transition: 'transform .5s',
  },
  hide: {
    transform: 'translateY(-110%)',
    transition: 'transform .5s',
  },
	
  appbar:{
    position:"static",
    webkitfontSmoothing: 'antialiased',
    backgroundColor: '#202124',
    boxShadow: '0 2px 4px rgba(0, 0, 0, .5)',
  },

  appbarTitle:{
    fontFamily: "Roboto mono, monospace",
    color: 'white',	  
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    }
  },

  linkStyle:{
     cursor: 'pointer',	  
  },

  linkText: {
    display: 'flex',
    paddingRight: 50,
    textDecoration: 'none',
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

class NavBar extends React.Component{
constructor(props) {
	super(props);
	    
	this.state = {
      		shouldShow: true,
    	};

    this.lastScroll = null;

}


componentDidMount() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = (evt)=> {
    const lastScroll = window.scrollY;

    if (lastScroll === this.lastScroll) {
      return;
    }

const shouldShow = (this.lastScroll !== null) ?  (lastScroll < this.lastScroll) : null;

    if (shouldShow !== this.state.shouldShow) {
      this.setState((prevState, props) => ({
        ...prevState,
        shouldShow,
      }));
    }

    this.lastScroll = lastScroll;
  }


render() {
  const { classes } = this.props;

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar  
	  position="fixed"
      	  color="default"
      	  className={
            `${classes.root} ${
              this.state.shouldShow === null ? '' : (
                this.state.shouldShow ? classes.hide : classes.show
              )
            }`
          }
	  >

        <Toolbar>
          <CssBaseline />
          <Typography className={classes.appbarTitle} variant="h6" color="inherit">
            SUKHADA GHOLBA
          </Typography>

	  <ScrollIntoView className={classes.linkStyle}  selector="#about">
            <p className={classes.linkText}>ABOUT</p>
	  </ScrollIntoView>

	  <ScrollIntoView className={classes.linkStyle}  selector="#projects">
            <p className={classes.linkText}>PROJECTS</p>
	  </ScrollIntoView>

	  <ScrollIntoView className={classes.linkStyle}  selector="#contact">
            <p className={classes.linkText}>CONTACT</p>
           </ScrollIntoView>

        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
}



NavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavBar);

