import React, { Component } from 'react'
import DatePicker from './DatePicker'
import { addDays, compareAsc } from 'date-fns'
import Grid from '@material-ui/core/Grid'

import PropTypes from 'prop-types'

export default class DateRange extends Component{

    constructor(props){
        super(props)
        this.state = {
            startDate : new Date(),
            endDate: addDays(new Date(),1)
        }
    }

    onChange = (prop, date) => {
        let { startDate, endDate } = this.state
        if (prop == "startDate" && compareAsc(date, endDate) >= 0){
            this.setState({
                startDate : date,
                endDate: addDays(date, 1)
            }, () => {
                this.props.onChange(prop, date)
            })
        } else if (prop == "endDate" && compareAsc(startDate, date) >= 0) {
            this.setState({
                startDate : addDays(date, -1),
                endDate: date
            }, () => {
                this.props.onChange(prop, date)
            })
        }
        else{
            this.setState({
                [prop] : date
            }, () => {
                this.props.onChange(prop, date)
            })
        }
        
    }

    render(){
        let {startDate, endDate} = this.state
        let { startLabel, endLabel } = this.props
        let minDate
        switch (compareAsc(new Date(), startDate)){
            case 1 : 
            case 0:  minDate = addDays(new Date(), 1)
                     break;
            case -1: minDate = addDays(startDate, 1)
        }
        return(
            <Grid container direction = {'row'} style = {{'height' : '100%'}}>
                <Grid item className='search-input-item-box' xs = {6} sm = {6} md = {6}>
                    <div className="search-input-item">
                        <p>{startLabel}</p>
                        <DatePicker value = {startDate} disablePast = {true} onChange = {this.onChange.bind(this, 'startDate')}/>
                    </div>
                </Grid>
                <Grid item xs={6} sm = {6} md = {6}>
                    <div className="search-input-item">
                        <p>{endLabel}</p>
                        <DatePicker value={endDate} minDate={minDate} onChange={this.onChange.bind(this, 'endDate')}/>
                    </div>
                </Grid>
            </Grid>

        )
    }

}

DateRange.propTypes = {
    onChange : PropTypes.func,
    startLabel : PropTypes.string,
    endLabel: PropTypes.string
}
