import React, { Component } from 'react'
import PropTypes from 'prop-types'


export default class Select extends Component{

    constructor(props){
        super(props)
        this.state = {
            value : ''
        }
    }

    onChange = (event) => {
        let value = event.target.value
        this.setState({
            value
        }, () => {
            this.props.onChange(value)
        })
    }

    render(){
        let {options, defaultValue} = this.props
        return(
            <select value={this.state.value} className="custom-select" onChange = {this.onChange}>
                <option value="" disabled>{defaultValue}</option>
                {
                    options.map((datum, index) => {
                        return <option key = {index} value={datum}>{datum}</option>
                    })
                }
            </select>
        )
    }
}

Select.propTypes = {
    defaultValue : PropTypes.string,
    options : PropTypes.array,
    onChange : PropTypes.func
}

