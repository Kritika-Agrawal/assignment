import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    cardContent : {
        textAlign : 'center'
    },
    title : {
        fontSize : "1em"
    },
    subheaderRoot : {
        fontSize : "0.8em"
    }
}

let StaticTile = ((props) => {
    let { datum, classes } = props
    return (
        <Card className="card">
            <CardMedia image={datum.imageUrl} title="icon" />
            <CardContent classes = {{ root : classes.cardContent }}>
                <CardHeader
                    classes = {{
                        title : classes.title,
                        subheader : classes.subheader
                    }}
                    title={datum.title}
                    subheader={datum.content}
                />
            </CardContent>
        </Card>
    )
})

StaticTile = withStyles(styles)(StaticTile)

export default class StaticContent extends Component{

    constructor(props){
        super(props)
    }

    render(){
        let {data} = this.props
        return(
            <div className="content">
                <div className="static-content">
                    {data.map((datum, index) =>
                        <StaticTile datum={datum} key={index}/>
                    )}
                </div>
            </div>
        )
    }
}

StaticContent.propTypes = {
    data : PropTypes.arrayOf(PropTypes.object)
}

