import React, { Component } from 'react'
import Slider from "react-slick"
import AccomodationCard from './AccomodationCard'
import PropTypes from 'prop-types'
import ChevronRight from '@material-ui/icons/ChevronRight'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import Button from '@material-ui/core/Button';

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
            // slidePerRow : 4,
            // slidesToShow: 4,
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
            return <AccomodationCard key={datum.id} data={datum} addToFavourites = {this.addToFavourites}/>
        })
        return (
            <div className="carousel" style={{ width: '95%', margin: 'auto' }}>
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
