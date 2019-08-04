import React, { Component } from "react";
import Grid from '@material-ui/core/Grid'

import Search from './Search'
import Navigation from './Navigation'
import PropTypes from 'prop-types'

export default class Header extends Component {
    constructor(props){
        super(props)
    }

    setAccomodations = (data) => {
        this.props.setAccomodations(data)
    }

    render() {
        return (
            <Grid item xs={12} className="banner">
                <Navigation />
                <Search setAccomodations = {this.setAccomodations}/>
            </Grid>
        )
    }

}

Header.propTypes = {
    setAccomodations : PropTypes.func
}
