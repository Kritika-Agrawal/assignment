import React, { Component } from 'react'
import Slider from 'react-slick'
import PropTypes from 'prop-types'

import AccomodationCard from './AccomodationCard'

const NavButton = ({ className, style, onClick, slickClass, label }) => (
  <button
    className={[ slickClass, className ].join(' ')}
    style={{ ...style, backgroundColor: 'orangered' }}
    onClick={onClick}
    aria-label={label}
  />
)

NavButton.propTypes = {
  className : PropTypes.string,
  style: PropTypes.object,
  onClick : PropTypes.func,
  slickClass : PropTypes.string,
  label : PropTypes.string,
}

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
      if(this.state.favAccomList.includes(accomId)){
        this.setState((state) => {
          let newState = state.favAccomList.filter((accom) => accom!=accomId)
          return { favAccomList: newState }
        })
      }else{
        this.setState((state) => ({ favAccomList: [ ...state.favAccomList, accomId ] }))
      }
    }

    render(){
      let { data } = this.props
      let settings = {
        infinite: false,
        speed: 300,
        slidesToScroll: 4,
        prevArrow: <NavButton slickClass="my-class-prev" label={'Go to previous slide'}/>,
        nextArrow: <NavButton slickClass="my-class-next" label={'Go to next slide'}/>,
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
        ]
      }

      let sliderHtml = data.map((datum) => <AccomodationCard key={datum.id} data={datum} favAccoms = {this.state.favAccomList} addToFavourites = {this.addToFavourites}/>)

      return (
        <div className="carousel" style={{ width: 'calc(100% - 60px)', margin: 'auto', top : '-50px', position : 'relative' }}>
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
