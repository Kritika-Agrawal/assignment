import React, { Component } from 'react'
import Slider from "react-slick"
import PropTypes from 'prop-types'

import AccomodationCard from './AccomodationCard'

const PrevButton = ({ className, style, onClick }) => (
    <button
        className={['my-class-prev', className].join(' ')}
        style={{ ...style, backgroundColor: 'pink' }}
        onClick={onClick}
        aria-label="Go to previous slide"
    />
);
const NextButton = ({ className, style, onClick }) => (
    <button
        className={['my-class-next', className].join(' ')}
        style={{ ...style, backgroundColor: 'pink' }}
        onClick={onClick}
        aria-label="Go to next slide"
    />
);

export default class Carousel extends Component{
    constructor(props){
        super(props)
        this.state = {
            favAccomList: []
        }
    }

    componentWillReceiveProps = () => {
        this.setState({
            favAccomList: []
        })
    }
    addToFavourites = (accomId) => {
        console.log('clciked')
        this.setState((state) => {
            return { favAccomList: [...state.favAccomList, accomId] }
        })
    }
    render(){
        let { data } = this.props
        let settings = {
            infinite: false,
            speed: 300,
            slidesToScroll: 4,
            prevArrow: <PrevButton />,
            nextArrow: <NextButton />,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        };

        let sliderHtml = data.map((datum) => {
            return <AccomodationCard key={datum.id} data={datum} favAccoms = {this.state.favAccomList} addToFavourites = {this.addToFavourites}/>
        })

        return (
            <div className="carousel" style={{ width: 'calc(100% - 60px)', margin: 'auto' }}>
                <Slider {...settings}>
                    { sliderHtml }
                </Slider>
            </div>
        )
    }
}

Carousel.propTypes = {
    data : PropTypes.arrayOf(PropTypes.object)
} 
