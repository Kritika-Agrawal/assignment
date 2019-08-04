import React, { Component } from "react"
import Carousel from '../Carousel'
import accomodationList from '../../../resources/data/Accomodations'
import staticContent from '../../../resources/data/static'
import StaticContent from '../StaticContent'
import PropTypes from 'prop-types'

export default class Content extends Component {
    constructor(props){
        super(props)
    }

    render() {
        let {accomodationList} = this.props
        return(
            <div className = "content">
                <StaticContent data = {staticContent}/>
                <Carousel data = {accomodationList}/>   
            </div>  
        )
    }
}

Content.propTypes = {
    setAccomodations: PropTypes.func
}
