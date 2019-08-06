import React, { Component } from "react";
import Grid from '@material-ui/core/Grid'

import Search from './Search'
import Navigation from './Navigation'
import PropTypes from 'prop-types'
import { homePageContent } from './../../constants'    

export default class Header extends Component {
    constructor(props){
        super(props)
    }

    setAccomodations = (data) => {
        this.props.setAccomodations(data)
    }

    render() {
        
        return (
                <Grid container spacing = {8} direction={'row'} justify={'center'} style={{ width: '80vw', margin : 'auto' }}> 
                    <Grid item sm={12}>
                        <Navigation />
                    </Grid>
                    <Grid item sm = {12}>
                    <Search setAccomodations={this.setAccomodations} searchText={homePageContent.searchText} searchBtnText = {homePageContent.searchBtnText}/>
                    </Grid>
                </Grid>
        )
    }

}

Header.propTypes = {
    setAccomodations : PropTypes.func
}
