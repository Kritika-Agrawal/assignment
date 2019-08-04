import React, { Component } from 'react'
import DatePicker from './DatePicker'
import { addDays, compareAsc } from 'date-fns'

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
        // let minDate = compareAsc(new Date(), startDate) > 0 ? new Date() : addDays(startDate, 1)
        return(
            <React.Fragment>
                <div className="search-input-item" style={{ width: 150 }}>
                    <p>{startLabel}</p>
                    <DatePicker value = {startDate} disablePast = {true} onChange = {this.onChange.bind(this, 'startDate')}/>
                </div>
                <div className="search-input-item" style={{ width: 150 }}>
                    <p>{endLabel}</p>
                    <DatePicker value={endDate} minDate={minDate} onChange={this.onChange.bind(this, 'endDate')}/>
                </div>
            </React.Fragment>

        )
    }

}

DateRange.propTypes = {
    onChange : PropTypes.func,
    startLabel : PropTypes.string,
    endLabel: PropTypes.string
}
