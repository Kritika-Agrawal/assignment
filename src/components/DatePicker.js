
import React, { Component } from 'react'
import 'date-fns'
import PropTypes from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
import InputBase from '@material-ui/core/InputBase'
import { withStyles } from '@material-ui/core/styles'
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers'

const styles = { grid: { width: '60%' } }

const TComponent = function ({ InputProps, helperText, margin, ...props }) {
  return <InputBase {...props} disabled className="datepicker-input" />
}

TComponent.propTypes = {
  InputProps : PropTypes.object,
  helperText : PropTypes.string,
}

class MaterialUIPickers extends Component {
  constructor(props) {
    super(props)
  }

    handleDateChange = (date) => {
      this.props.onChange(date)
    }

    render() {
      const { value } = this.props
      return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            margin="normal"
            value={value}
            TextFieldComponent={TComponent}
            onChange={this.handleDateChange}
          />
        </MuiPickersUtilsProvider>
      )
    }
}

MaterialUIPickers.propTypes = {
  classes: PropTypes.object,
  type: PropTypes.string,
  onChange: PropTypes.func,
  disablePast: PropTypes.bool,
  minDate: PropTypes.object,
  value: PropTypes.object,
}

export default withStyles(styles)(MaterialUIPickers)
