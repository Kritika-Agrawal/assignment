import React, { Component } from "react";
import Grid from '@material-ui/core/Grid'

import Search from './Search'
import Navigation from './Navigation'

export default class Header extends Component {

    render() {
        return (
            <Grid item xs={12} className="banner">
                <Navigation />
                <Search />
            </Grid>
        )
    }

}
