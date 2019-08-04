import React, { Component } from 'react'
import 'date-fns'
import PropTypes, { func } from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
import InputBase from '@material-ui/core/InputBase'
import { withStyles } from '@material-ui/core/styles'
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers'

const styles = { grid: { width: '60%' } }

const TComponent = function({ InputProps, helperText, margin, ...props }) {
    return <InputBase {...props} disabled className="datepicker-input" />
} 

class MaterialUIPickers extends Component {
    constructor() {
        super()
        this.state = {
            selectedDate: new Date(),
        }
    }

    handleDateChange = date => {
        this.setState({ selectedDate: date })
    }

    render() {
        const { classes } = this.props
        const { selectedDate } = this.state

        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    margin="normal"
                    value={selectedDate}
                    TextFieldComponent={TComponent}
                    onChange={this.handleDateChange}
                />
            </MuiPickersUtilsProvider>
        )
    }
}

MaterialUIPickers.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(MaterialUIPickers)