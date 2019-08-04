import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import RightIcon from '@material-ui/icons/ArrowRightAlt'
import { addDays } from 'date-fns'
import Button from '../../Button'
import DateRange from '../../DateRange'
import Select from '../../Select'

import accomodationList from '../../../../resources/data/Accomodations' 
import PropTypes from 'prop-types'


const CustomizedInputBase = (props) => {

  function onChange(prop, event){
      switch(prop){
          case 'startDate' : prop = 'checkInDate'
                    break;
          case 'endDate' : prop = 'checkOutDate'
                    break;
      }
      props.onInputSelect(prop, (['noOfGuests', 'checkInDate', 'checkOutDate'].includes(prop)) ? event : event.target.value)
  }

  return (
    <Paper className="search-input">
        <div className="search-input-item">
            <p>Where do you want to go?</p>
            <InputBase
                style={{ width: 250 }}
                placeholder="country, ZIP, postal code, city..."
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={onChange.bind(null, 'place')}
            />
        </div>
        <DateRange startLabel={"Check In"} endLabel = {"Check Out"} onChange={onChange} />
        <div className="search-input-item" style={{ width: 150 }}>
            <p>Guests</p>
              <Select options={["1", "2", "3", "3+"]} defaultValue={"Number of Guests"} onChange={onChange.bind(null, 'noOfGuests')}/>
        </div>
        <div className="search-input-item">
              <Button disabled={props.disableSearch}style={{ height: '100%', width: '100%', paddingLeft: 25, paddingRight: 25 }} onClick = {props.checkAvailability}>
                <RightIcon style={{ fontSize: 32 }} /> CHECK AVAILABILITY
            </Button>
        </div>
    </Paper>
  );
}

export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
            place : "",
            checkInDate : new Date(),
            checkOutDate : addDays(new Date(), 1),
            noOfGuests : "",
            disableSearch : true
        }
    }

    checkAvailability = () => {
        this.props.setAccomodations(accomodationList)
    }


    onInputSelect = (prop, value) => {
        this.setState({
            [prop]: value
        }, ()=> {
            let { place, checkInDate, checkOutDate, noOfGuests } = this.state
            if (place == "" || checkInDate == "" || checkOutDate == "" || noOfGuests == "") {
                this.setState({
                    disableSearch: true
                })
            } else {
                this.setState({
                    disableSearch: false
                })
            }
        })
    }

    render() {
        return (
            <div className="search">
                <div className="text">Book your perfect holiday rental, today</div>
                <div>
                    <CustomizedInputBase disableSearch={this.state.disableSearch} checkAvailability={this.checkAvailability} onInputSelect={this.onInputSelect}/>
                </div>
            </div>
        )
    }
}

Search.propTypes = {
    setAccomodations : PropTypes.func
}
