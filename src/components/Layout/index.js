import React, { Component } from "react";
import Grid from '@material-ui/core/Grid'

import Header from './Header'
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
            <div style={{ width: '100%' }}> 
                <div className = "banner" style = {{ width : '100%'}}>
                    <Header setAccomodations={this.setAccomodations}/>
                    
                </div>
                <Content accomodationList={this.state.accomodationList} />
            </div>
        )
    }

}
