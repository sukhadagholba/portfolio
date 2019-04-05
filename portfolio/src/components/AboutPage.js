import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NavBar from './NavBar';

const styles = theme => ({
  root: {
   	height: "100vh",
	padding: theme.spacing.unit * 4,  
	  
  },
  
  title:{
	 fontSize: 40,
	 fontFamily:'Raleway',
	 marginTop: '3%',
	 display: 'flex',
         flexDirection: 'row',
         //alignItems: 'center',
         justifyContent: 'center',
	 //color: '#C96830', 
	
	[theme.breakpoints.down('sm')]: {
        fontSize: 30,
        },

	[theme.breakpoints.down('xs')]: {
        fontSize: 22,	
	}, 
  },

 
  titleBar:{
    margin: 'auto',
    //marginTop: 1, 	  
    width: '150px',
    height: '1px',
    backgroundColor:'#444649',

    [theme.breakpoints.down('sm')]: {
      height: '1.5px',
    },
    
    [theme.breakpoints.down('xs')]: {
         width: '100px',
    },	  

  },	

  wrapper: {
  	display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
	
	[theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },  
  },	

  profileImage: {
  	padding: theme.spacing.unit * 3,
	height: '28%',
	width: '28%',  
	borderRadius: '50%', 

       [theme.breakpoints.down('sm')]: {
	padding: theme.spacing.unit * 1,       
        height: '20%',  //30
        width: '20%',
      }, 
	[theme.breakpoints.down('xs')]: {
        padding: theme.spacing.unit * 0,		
        height: '20%',
        width: '40%',
      },
  },	  

  titleWrapper: {
  	[theme.breakpoints.down('sm')]: {	  
  	marginBottom: '3%',
	},	
  },	  
 	 

  bio: {
  	width: '50%',
	fontSize: 22,
	fontWeight: 500,
        fontFamily:'Raleway',
	color: '#616161',
	padding: theme.spacing.unit * 5,  

	[theme.breakpoints.down('sm')]: {
        fontSize: 18,
        width: '78%',		
      },

       [theme.breakpoints.down('md')]: {
        //fontSize: 18,
        width: '88%',
      },	  

       [theme.breakpoints.down('xs')]: {
	padding: theme.spacing.unit * 2,       
      	width: '95%',
	fontSize: 15, 
      },  
  },
  linkStyle: {
  	textDecoration: 'none',
	cursor: 'pointer',
	color: '#616161',  
  
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
            <div id="about" className={classes.root}>
	      
	    <div className={classes.titleWrapper}>
	       <Typography className={classes.title} component='h2' variant='h5' gutterBottom>
                  About
       		</Typography>

	       <div className={classes.titleBar}></div>
	    </div>

	    <div className={classes.wrapper}>    
		  <img
	          className={classes.profileImage}
                  src={require("./images/profileimage.jpg")}
                  alt="profile"
                  />

	   
	    <div className={classes.bio}>Hello, I am Sukhada Gholba. I am a Full-Stack web developer. I was born and raised in India and I have a degree in Electrical Engineering. I have always been passionate about science and technology since I was young. I love developing applications in Node, Express, JavaScript, React and Postgresql. My experience as a Co-Founder and Product Manager at <a href="https://keereo.com/" className={classes.linkStyle}>keereo</a> helped me develop my skills in communications, team work, and leadership.

<p>In my free time I am an avid reader, I enjoy cooking, traveling and studying history.</p>	

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



