import React, { Component } from 'react'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import RightIcon from '@material-ui/icons/ArrowRightAlt'

import Button from '../../Button'
import DatePicker from '../../DatePicker'

function CustomizedInputBase() {
  return (
    <Paper className="search-input">
        <div className="search-input-item">
            <p>Where do you want to go?</p>
            <InputBase
                style={{ width: 250 }}
                placeholder="country, ZIP, postal code, city..."
                inputProps={{ 'aria-label': 'search google maps' }}
            />
        </div>
        <div className="search-input-item" style={{ width: 150 }}>
            <p>Check In</p>
            <DatePicker />
        </div>
        <div className="search-input-item" style={{ width: 150 }}>
            <p>Check Out</p>
            <DatePicker />
        </div>
        <div className="search-input-item" style={{ width: 150 }}>
            <p>Guests</p>
            <select value='' className="custom-select">
                <option value="" disabled>Number of Guests</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="3+">3+</option>
            </select>
        </div>
        <div className="search-input-item">
            <Button style={{ height: '100%', width: '100%', paddingLeft: 25, paddingRight: 25 }}>
                <RightIcon style={{ fontSize: 32 }} /> CHECK AVAILABILITY
            </Button>
        </div>
    </Paper>
  );
}

export default class Search extends Component {
    render() {
        return (
            <div className="search">
                <div className="text">Book your perfect holiday rental, today</div>
                <div>
                    <CustomizedInputBase />
                </div>
            </div>
        )
    }
}