import React from 'react'

import CustomButton from '../../Button'
import Grid from '@material-ui/core/Grid'

const Navigation = (props) => {
        return (
            <Grid container direction = {'row'} justify = {'space-between'}>
                <Grid item xs = {12} sm = {12} md = {2}>
                    <div className="logo">
                        <img src="/assets/logo.png" />
                    </div>
                </Grid>
                <Grid item xs = {12} sm={12} md={10}>
                    <Grid container justify = {'flex-end'} direction = {'row'} alignItems = {'baseline'}>
                        <Grid item xs={6} sm={4} md={2}>
                            <div className="nav-items active">Home</div>
                        </Grid>
                        <Grid item xs={6} sm={4} md={2}>
                            <div className="nav-items">Destinations</div>
                        </Grid>
                        <Grid item xs={6} sm={4} md={2}>
                            <div className="nav-items">How it works</div>
                        </Grid>
                        <Grid item xs={6} sm = {6} md={2}>
                            <div className="nav-items">Login</div>
                        </Grid>
                        <Grid item xs={12} sm={6} md={2}>
                            <div className="nav-items button">
                                <CustomButton>Sign Up</CustomButton>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
}

export default Navigation
