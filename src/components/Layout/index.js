import React, { Component } from "react";

import Header from './Header'
import Footer from './Footer'
import Content from './Content'

export default class Layout extends Component{

    render(){
        return(
            <React.Fragment>
                <Header/>
                <Content/>
                <Footer/>
            </React.Fragment>
        )
    }

}
