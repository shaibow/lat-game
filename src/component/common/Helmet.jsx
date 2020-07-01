import React, { Component } from "react";
import {Helmet} from 'react-helmet'

class PageHelmet extends Component{
    render(){
        return(
            <React.Fragment>
                <Helmet>
                    <title>{this.props.pageTitle} || Connecting Game Developers with Publisher </title>
                    <meta name="description" content="LAT GAME - We are a platform matching game developers with game publisher. We help teams to align their game with publishers criteria and them connect them." />
                </Helmet>
            </React.Fragment>
        )
    }
}


export default PageHelmet;
