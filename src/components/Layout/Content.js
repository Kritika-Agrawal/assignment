import React, { Component } from "react"
import Carousel from '../Carousel'
import accomodationList from '../../../dist/resources/data/Accomodations'
import staticContent from '../../../dist/resources/data/static'
import StaticContent from '../StaticContent'

export default class Content extends Component {
    render() {
        console.log(accomodationList)
        return(
            <div className = "content">
                <StaticContent data = {staticContent}/>
                <Carousel data = {accomodationList}/>   
            </div>  
        )
    }
}
