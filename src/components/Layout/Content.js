import React, { Component, Fragment } from "react"
import PropTypes from 'prop-types'

import Carousel from '../Carousel'
import StaticContent from '../StaticContent'
import staticContent from '../../../resources/data/static'

export default class Content extends Component {
    constructor(props){
        super(props)
    }

    render() {
        let {accomodationList} = this.props
        return(
            <Fragment>
                <StaticContent data={staticContent}/>
                <Carousel data={accomodationList}/>   
            </Fragment>  
        )
    }
}

Content.propTypes = {
    setAccomodations: PropTypes.func
}
