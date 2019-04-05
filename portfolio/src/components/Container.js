import React, { Component } from "react";
import LandingPage from './LandingPage';
import ProjectPage from './Projects';


class Container extends React.Component {
constructor(props){
       super(props);
       this.state = {
       }
}




  render() {

    return (
            <div>
		<LandingPage/>
	        <ProjectPage/>
           </div>
    );
  }
}



export default Container;
