import React, { Component } from "react";
import Grid from '@material-ui/core/Grid'

import Header from './Header'
import Footer from './Footer'
import Content from './Content'

export default class Layout extends Component{
    constructor(props){
        super(props)
        this.state = {
            accomodationList : []
        }
    }

    setAccomodations = (data) => {
        this.setState({
            accomodationList : data
        })
    }

    render(){
        return(
            <Grid container spacing={0}>
                <Header setAccomodations={this.setAccomodations}/>
                <Content accomodationList={this.state.accomodationList}/>
                <Footer/>
            </Grid>
        )
    }

}
