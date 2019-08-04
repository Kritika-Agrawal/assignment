import React, { Component } from 'react'

import CustomButton from '../../Button'

export default class Navigation extends Component {
    render() {
        return (
            <div className="navigation">
                <div className="inner-nav">
                    <div className="logo">
                        chia travel
                    </div>
                    <div className="nav-items active">Home</div>
                    <div className="nav-items">Destinations</div>
                    <div className="nav-items">How it works</div>
                    <div className="nav-items">Login</div>
                    <div className="nav-items button">
                        <CustomButton>Sign Up</CustomButton>
                    </div>
                </div>
            </div>
        )
    }
}