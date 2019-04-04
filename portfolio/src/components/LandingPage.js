import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Image from './images/Sukhada-Gholba-Portfolio-Background.png';
import ScrollIntoView from 'react-scroll-into-view';

const styles = theme => ({
  root: {
    //height: 180,
  },
 
  imageContainer: {
        backgroundImage: `url(${Image})`,
  	backgroundSize: 'cover',
  	height: '100vh',
	  
    },	

  titleWrapper:{
  	display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
  },	
 
  titleStyle:{
  	marginTop: '20%',
	fontFamily:'arial',
	fontSize: 40,
	color: '#666666',  
  },

  subTitle:{
	fontFamily:'Raleway',
        fontSize: 22,  
  },	

  scrollButtton:{
  	display: 'flex',
  	flexDirection: 'row',
  	alignItems: 'center',
  	justifyContent: 'center',
  },	
  
  footerStyle:{
  	marginTop: '60%',  
  },	


});	



class LandingPage extends React.Component {
constructor(props){
       super(props)
       this.state = {
       }
}




  render() {
  const { classes } = this.props;


    return (
	     <div className={classes.imageContainer}>
            <div className={classes.titleWrapper}>
	    <p className={classes.titleStyle}>Hello, I am Sukhada Gholba</p>
	    <p className={classes.subTitle}>I am a Full-Stack Web Developer</p>
	    </div>
	    
	    <ScrollIntoView className={classes.scrollButtton} selector="#footer">
  		<i  class="fas fa-arrow-down fa-3x"  style={{color: 'gray'}}></i>
	    </ScrollIntoView>


	    <div id="footer" className={classes.footerStyle}>Scroll target element</div>
	    </div>
    );
  }
}


LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingPage);
