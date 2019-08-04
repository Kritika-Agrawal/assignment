// import React, { Component } from 'react'
// import 'date-fns'
// import PropTypes, { func } from 'prop-types'
// import DateFnsUtils from '@date-io/date-fns'
// import InputBase from '@material-ui/core/InputBase'
// import { withStyles } from '@material-ui/core/styles'
// import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers'

// const styles = { grid: { width: '60%' } }

// const TComponent = function({ InputProps, helperText, margin, ...props }) {
//     return <InputBase {...props} disabled className="datepicker-input" />
// } 

// class MaterialUIPickers extends Component {
//     constructor() {
//         super()
//         this.state = {
//             selectedDate: new Date(),
//         }
//     }

//     handleDateChange = (date) => {
//         this.setState({ selectedDate: date }, () => {
//             this.props.onChange(date)
//         })
//     }

//     render() {
//         const { classes } = this.props
//         const { selectedDate } = this.state

//         return (
//             <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                 <DatePicker
//                     margin="normal"
//                     value={selectedDate}
//                     TextFieldComponent={TComponent}
//                     onChange={this.handleDateChange}
//                 />
//             </MuiPickersUtilsProvider>
//         )
//     }
// }

// MaterialUIPickers.propTypes = {
//     classes: PropTypes.object.isRequired,
//     type : PropTypes.string,
//     onChange : PropTypes.func
// }

// export default withStyles(styles)(MaterialUIPickers)


import React, { Component } from 'react'
import 'date-fns'
import PropTypes, { func } from 'prop-types'
import DateFnsUtils from '@date-io/date-fns'
import InputBase from '@material-ui/core/InputBase'
import { withStyles } from '@material-ui/core/styles'
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers'

const styles = { grid: { width: '60%' } }

const TComponent = function ({ InputProps, helperText, margin, ...props }) {
    return <InputBase {...props} disabled className="datepicker-input" />
}

class MaterialUIPickers extends Component {
    constructor(props) {
        super(props)
    }

    handleDateChange = (date) => {
        this.props.onChange(date)
    }

    render() {
        const { classes } = this.props
        const { value, disablePast, minDate } = this.props
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                    margin="normal"
                    value={value}
                    // disablePast={disablePast}
                    // minDate={minDate}
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
    onChange: PropTypes.func
}

export default withStyles(styles)(MaterialUIPickers)
