import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NavBar from './NavBar';
import "./AboutPage.css";

const styles = theme => ({
  root: {
   	height: "100vh",
	  
  },
  
  title:{
	 fontSize: 40,
	 fontFamily:'Raleway',
	 marginTop: '4%',
	 display: 'flex',
         flexDirection: 'row',
         //alignItems: 'center',
         justifyContent: 'center', 
	
	[theme.breakpoints.down('sm')]: {
        //fontSize: 30,
	}, 
  },

 
  titleBar:{
    margin: 'auto',
    //marginTop: 1, 	  
    width: '150px',
    height: '1.5px',
    backgroundColor: '#444649',

  },	

  wrapper: {
  	display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
	
	[theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },  
  },	

  profileImage: {
  	padding: theme.spacing.unit * 3,
	height: '30%',
	width: '30%',  
	borderRadius: '50%', 

       [theme.breakpoints.down('sm')]: {
        height: '30%',
        width: '30%',
      }, 
	[theme.breakpoints.down('xs')]: {
        height: '40%',
        width: '50%',
      },  
 	 
  },

  bio: {
  	width: '50%',
	fontSize: 22,
	fontWeight: 500,  
        fontFamily:'Raleway',
	color: '#616161',  

	[theme.breakpoints.down('sm')]: {
        fontSize: 18,
      },  

       [theme.breakpoints.down('xs')]: {
      	fontSize: 16, 
      },  
  },

  slideAnimation: {
    position: 'absolute',
    left: '-200px',
    width: '100px',
    height: '100px',
    transition: '1s',
},	

	
});


class AboutPage extends React.Component {
constructor(props){
       super(props);
       this.state = {
       }
}




  render() {
  const { classes } = this.props;


    return (
            <div className={classes.root}>
	    	<NavBar />
	       <div>	
	       <div>	
	       <Typography className={classes.title} component='h2' variant='h5' gutterBottom>
                  About
       		</Typography>
	       <div className={classes.titleBar}></div>

	    <div className={classes.wrapper}>    
		  <img
	          className={classes.profileImage}
                  src={require("./images/profileimage.jpg")}
                  alt="profile-picture"
                  />

	   
	    <div className={classes.bio}>Hello, I am Sukhada Gholba. I am a Full-Stack web developer. I was born and raised in India and I have a degree in Electrical Engineering. I have always been passionate about Science and Technology since I was young. A year ago, I developed a deep passion for programming while watching my friends work on developing impactful applications and since then I have been working towards becoming a full-stack developer at Lambda School. I love developing applications in Node, Express, JavaScript, React and Postgresql. My experience as a co-founder / Product Manager at keereo helped me develop my skills in communications, team work, and leadership.
In my free time I am an avid reader, I enjoy cooking, traveling and studying history.	
	   </div>
	   </div> 
	</div>	
	 </div>   
            </div>
    );
  }
}


AboutPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AboutPage);



