import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
//import Image from './images/w.png';
//import Image1 from './images/bt.jpeg';
import ScrollIntoView from 'react-scroll-into-view';
import AboutPage from './AboutPage';
import ProjectPage from './Projects';
import ContactPage from './ContactPage';
import './LandingPage.css';
import NavBar from './NavBar';


const styles = theme => ({
  root: {
  },
 
  imageContainer: {
        //backgroundImage: `url(${Image1})`,
  	backgroundSize: 'cover',
	background: 'black',
  	height: '100vh',
	//display: 'flex',
        //flexDirection: 'row',
        //alignItems: 'center',
        //justifyContent: 'center',  
	  
    },	

  windowImage: {
  	//backgroundImage: `url(${Image})`,
	//backgroundSize: 'auto',  
	//width: 'auto',
	//height: '600px',  
  
  
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
	color: 'white', //'#666666',
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
    backgroundColor: 'white', //'#888888',
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
	color: 'white',	

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
	    <div>

		<div className="container">
                <div className="centerDIV">
                <div className="frontBrowserWindowContainer">
                        <div className="frontBrowserWindow">
                                <div className="sukhi">Sukhada Gholba</div>
                                <hr/>
                                <div className="developer">Full Stack Developer</div>
                                <ScrollIntoView className={classes.scrollArrow}  selector="#footer">
	    				<i className="fas fa-arrow-down fa-3x arrow"></i>
	    			 </ScrollIntoView>
                        </div>
                </div>
                </div>
                </div>	
	    	</div> 
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
