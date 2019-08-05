import React from 'react'

import CustomButton from '../../Button'

const Navigation = (props) => {
        return (
            <div className="navigation">
                <div className="inner-nav">
                    <div className="logo">
                        <img src="/assets/logo.png" />
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

export default Navigation
