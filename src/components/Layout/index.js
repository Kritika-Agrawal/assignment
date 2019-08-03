import React, { Component } from "react";
import Grid from '@material-ui/core/Grid'

import Header from './Header'
import Footer from './Footer'
import Content from './Content'

export default class Layout extends Component{

    render(){
        return(
            <Grid container spacing={0}>
                <Header/>
                <Content/>
                <Footer/>
            </Grid>
        )
    }

}
