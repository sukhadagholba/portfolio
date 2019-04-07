import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Image from './images/background.png';
import ScrollIntoView from 'react-scroll-into-view';
import AboutPage from './AboutPage';
import ProjectPage from './Projects';
import ContactPage from './ContactPage';
import NavBar from './NavBar';


const styles = theme => ({
  root: {
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
 
  title:{
  	marginTop: '20%',
	fontFamily:'arial',
	fontSize: 40,
	color: '#666666',
 	marginBottom: '2%',
	
	[theme.breakpoints.down('xl')]: {
        marginTop: '15%',
        },

	[theme.breakpoints.down('lg')]: {
        marginTop: '18%',
        },  
	
	[theme.breakpoints.down('md')]: {
       	 marginTop: '23%',  //15
        //fontSize: 28,
        },

        [theme.breakpoints.down('sm')]: {
        marginTop: '30%',   //20
	fontSize: 28,
      	},

	[theme.breakpoints.down('xs')]: {
        marginTop: '50%',
	fontSize: 20,
      },  
  },

  titleBar:{
    margin: 'auto',
    width: '600px',
    height: '1px',
    backgroundColor: '#888888',
    marginBottom: '2%',	  
	
    [theme.breakpoints.down('xl')]: {
        height: '1.2px',
    },

    [theme.breakpoints.down('md')]: {
        width: '380px',
    },

    [theme.breakpoints.down('sm')]: {
	//width:'200px',
    },

    [theme.breakpoints.down('xs')]: {
     width: '140px',
     height: '0.8px',	    
    },  	  

  }, 	

  subTitle:{
	fontFamily:'Raleway',
        fontSize: 22,
	marginBottom: '3%',  
	
	[theme.breakpoints.down('xs')]: {
        fontSize: 15,
      },  
	 
	[theme.breakpoints.down('sm')]: {
	fontSize: 20,
         marginBottom: '5%',
	},  
  },	

  scrollArrow:{
  	display: 'flex',
  	flexDirection: 'row',
  	alignItems: 'center',
  	justifyContent: 'center',
	cursor: 'pointer',
  },	
  


});	



class LandingPage extends React.Component {
constructor(props){
       super(props);
       this.state = {
       }
}




  render() {
  const { classes } = this.props;


    return (
	    <div>
	    <div className={classes.imageContainer}>
             <NavBar/>
	    <div className={classes.titleWrapper}>
	    <div className={classes.title}>Sukhada Gholba</div>
	     <div className={classes.titleBar}></div>
	    <div className={classes.subTitle}>Full-Stack Web Developer</div>
	    </div>
	   
	    <ScrollIntoView className={classes.scrollArrow}  selector="#footer">
  		<i  className="fas fa-arrow-down fa-3x"  style={{color: 'gray'}}></i>
	    </ScrollIntoView>
	    </div>
	
	    <div id ="footer">
	    <AboutPage/>
	    </div>
	    <ProjectPage/>
	    <ContactPage/>
	  </div>
    );
  }
}


LandingPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LandingPage);
