import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import NavBar from './NavBar';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  root: {
        height: "100vh",
	background: '#f5f5f5',
	padding: theme.spacing.unit * 3,  

	[theme.breakpoints.down('sm')]: {
        padding: theme.spacing.unit * 4,
        },
	  
  },
 	
  
  title:{
         fontSize: 40,
         fontFamily:'Raleway',
         marginTop: '3%',   //4
         display: 'flex',
         flexDirection: 'row',
         //alignItems: 'center',
         justifyContent: 'center',
        
        [theme.breakpoints.down('md')]: {
        fontSize: 34,
        marginTop: '3%',
        },

	[theme.breakpoints.down('sm')]: {
        fontSize: 30,
	marginTop: '3%',
        },

	[theme.breakpoints.down('xs')]: {
        fontSize: 22,
	marginTop: '8%',	
        },  
  },


  titleBar:{
    margin: 'auto',
    //marginTop: 1,       
    width: '180px',  //60
    height: '1px', //1.4
    backgroundColor: '#444649',
    marginBottom: 2,
	
    [theme.breakpoints.down('lg')]: {
      //width: '180px',
    },

    [theme.breakpoints.down('md')]: {
         //height: '1.5px',
	   width: '150px',
    },	

    [theme.breakpoints.down('sm')]: {
         height: '1px',
	  width: '150px',   
    },	  
    [theme.breakpoints.down('xs')]: {
         width: '100px',
	 height: '1.5px', 
    },
  },	

  projectImage: {
  	padding: theme.spacing.unit * 3,
        height: '26%',
        width: '26%',
	
	[theme.breakpoints.down('lg')]: {
        height: '32%',
        width: '32%',
      	},
	
	[theme.breakpoints.down('md')]: {
        height: '35%',
        width: '35%',
  	},

       [theme.breakpoints.down('sm')]: {
        height: '30%',
        width: '30%',
      }, 
        [theme.breakpoints.down('xs')]: {
         padding: theme.spacing.unit * 1,		
        height: '40%',
        width: '50%',
      },  
  
  },	

  projectIntro: {
  	width: '40%',
        fontSize: 22,
        fontFamily:'Raleway',
       	color: 'black',         //'#616161',
	padding: theme.spacing.unit * 2,  
	
	[theme.breakpoints.down('md')]: {
        fontSize: 20,
        width: '100%',                
      	},

        [theme.breakpoints.down('sm')]: {
	 //padding: theme.spacing.unit * 3,	
        fontSize: 18,
        //width: '100%',		
      	},  

       [theme.breakpoints.down('xs')]: {
	padding: theme.spacing.unit * 0,       
        fontSize: 15,
	width: '100%',       
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

 linkStyle: {
 	textDecoration: 'none',
	cursor: 'pointer', 
 },
 
 bio: {
        width: '50%',
        fontSize: 22,
        fontWeight: 500,
        fontFamily:'Raleway',
        color: '#616161',
        padding: theme.spacing.unit * 4,

        [theme.breakpoints.down('sm')]: {
        fontSize: 18,
        width: '88%',
	padding: theme.spacing.unit * 0,	
        //height: '12%',        
      }, 

       [theme.breakpoints.down('xs')]: {
        width: '85%',
        fontSize: 16,
      }, 
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
	    <Typography className={classes.title} component='h2' variant='h5' gutterBottom>
                  Projects
             </Typography>
            <div className={classes.titleBar}></div>
	    
	   <div className={classes.container}>
	    <a  className={classes.linkStyle}  href="https://labs10-webchat.netlify.com/">
	    <div  className={classes.wrapper}>
	    	<img
                  className={classes.projectImage}
                  src={require("./images/chattr.png")}
                  alt="chattr"
                  />

		<div className={classes.projectIntro}>Chattr is a live chat tool for B2C and B2B companies to connect with visitors on their website.
<p>Tech Stack: React, Material-ui, Node, Express, Postgresql, socket.io, Firebase, Stripe, Redis, Knex.</p>	    
	    	</div>
		
	    </div>
	</a>

	<a className={classes.linkStyle}  href="https://knowledgetrybe.com/">
	   <div className={classes.wrapper}>
                <img
                  className={classes.projectImage}
                  src={require("./images/knowledgeTrybe.png")}
                  alt="kt"
                  />

                <div className={classes.projectIntro}>KnowledgeTrybe is a Hacker News like web app that allows users to share interesting articles with fellow readers. 
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



