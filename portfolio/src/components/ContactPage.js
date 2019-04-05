import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

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
        fontSize: 34,
        },
        
        [theme.breakpoints.down('xs')]: {
        fontSize: 28,
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

  },

  wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
	padding: theme.spacing.unit * 4,  
        
        [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
      },
  },

  iconWrapper: {
  	display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        //padding: theme.spacing.unit * 4,
  
  },	
	
  titleWrapper: {
        [theme.breakpoints.down('sm')]: {
        marginBottom: '3%',
        },     
  }, 

 info:{
 	//width: '50%',
        fontSize: 22,
        fontWeight: 500,
        fontFamily:'Raleway',
        color: '#616161',
        padding: theme.spacing.unit * 5,

        [theme.breakpoints.down('sm')]: {
        fontSize: 18,
        width: '78%',
      },

       [theme.breakpoints.down('xs')]: {
        width: '95%',
        fontSize: 15,
      },
 },	

 link:{
     color: 'black',
     textDecoration: 'none',	 
     cursor: 'pointer',
  },
 subText:{
 	textAlign: 'center',
 
 },	

});





class ContactPage extends React.Component {
constructor(props){
       super(props);
       this.state = {
       }
}


render() {
  const { classes } = this.props;


    return (
            <div id="contact" className={classes.root}>

            <div className={classes.titleWrapper}>
               <Typography className={classes.title} component='h2' variant='h5' gutterBottom>
                  Contact
                </Typography>

               <div className={classes.titleBar}></div>
            </div>

            <div className={classes.wrapper}>
		
            <div className={classes.info}>Below you can find my GitHub and Email. Have a question? 
		<p className={classes.subText}>Feel free to reach out to me any time!</p>
           </div>
		
	    	<a href="https://github.com/sukhadagholba" className={classes.link}>
                <i className="fab fa-github fa-3x"></i> <p>Github</p>
		</a>
	       
                <i className="fas fa-envelope fa-3x"></i><p>Email</p>
	        <div>sukhadagholb@gmail.com</div>
           </div>
        </div>
    );
  }
}



ContactPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContactPage);


