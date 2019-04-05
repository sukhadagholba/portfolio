import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NavBar from './NavBar';



const styles = theme => ({
  root: {
        height: "100vh",
	background: '#f5f5f5',  
  },
  
  title:{
         fontSize: 40,
         fontFamily:'Raleway',
         marginTop: '3%',   //4
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
    width: '160px',  //60
    height: '1px', //1.4
    backgroundColor: '#444649',
    marginBottom: 2,	  
  
  },	

  projectImage: {
  	padding: theme.spacing.unit * 3,
        height: '35%',
        width: '35%',

       [theme.breakpoints.down('sm')]: {
        height: '30%',
        width: '30%',
      }, 
        [theme.breakpoints.down('xs')]: {
        height: '40%',
        width: '50%',
      },  
  
  },	

  projectIntro: {
  	width: '30%',
        fontSize: 20,
        //fontWeight: 500,
        fontFamily:'Raleway',
        color: 'black',         //'#616161',

        [theme.breakpoints.down('sm')]: {
        fontSize: 15,
      },  

       [theme.breakpoints.down('xs')]: {
        fontSize: 13,
	width: '60%',       
      }, 
  },


  wrapper: {
  	display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
	 
	[theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
      },  
  
  },	

 container: {
 	display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
 },

 link: {
 	textDecoration: 'none',
 },	

});


class ProjectPage extends React.Component {
constructor(props){
       super(props);
       this.state = {
       }
}




  render() {
  const { classes } = this.props;


    return (
   	<div id="projects" className={classes.root}>
	   <NavBar />
	
	    <Typography className={classes.title} component='h2' variant='h5' gutterBottom>
                  Projects
             </Typography>
            <div className={classes.titleBar}></div>
	
	    <div className={classes.container}>
	    <a  className={classes.link}  href="https://labs10-webchat.netlify.com/">
	    <div  className={classes.wrapper}>
	    	<img
                  className={classes.projectImage}
                  src={require("./images/chattr.png")}
                  alt="chattr"
                  />

		<div className={classes.projectIntro}>Chattr is a live chat tool for B2C and B2B companies to connect with visitors on their website. Implemented Firebase for authentication, socket.io to connect customers with representatives into private chat rooms. Implemented webhooks for Stripe subscriptions, built various RESTful endpoints on the backend, added Redis to cache data, styled the Landing and Pricing page.
<p>Tech Stack: React, Material-ui, Node, Express, Postgresql, socket.io, Firebase, Stripe, Redis, Knex</p>	    
	    	</div>
		
	    </div>
	</a>

	<a className={classes.link}  href="https://knowledgetrybe.com/">
	   <div className={classes.wrapper}>
                <img
                  className={classes.projectImage}
                  src={require("./images/knowledgeTrybe.png")}
                  alt="kt"
                  />

                <div className={classes.projectIntro}>KnowledgeTrybe is a web app that allows users to share interesting articles with fellow readers. It is an article submission website like Hacker News where users can submit interesting articles across various fields for other users to read. 
<p>Tech Stack: HTML, CSS, JQuery, PHP, SQL, AWS.</p>
                </div>

            </div>
	</a>
	   </div>





	</div>    
    
    
    );
  }
}


ProjectPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectPage);



