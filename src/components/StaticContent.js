import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid'
import { withStyles } from '@material-ui/core/styles'

const styles = {
    root: {
        height: "200px",
        width: "250px"
    },
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
        <Card classes = {{
            root : classes.root
        }}>
            <CardMedia
                image={datum.imageUrl}
                title="icon"
            />
            <CardContent classes = {{
                root : classes.cardContent
            }}>
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
            <div className = "static-content">
                {/* <Grid container justify="center" alignItems="center" spacing = {2} style = {{ width : "80%", margin : "auto"}}> */}
                {
                        data.map((datum, index) => {
                            return (
                                // <Grid item xs = {12} sm = {12} md = {4}>
                                    <StaticTile datum={datum} key={index}/>
                                // </Grid>
                            )
                        })
                }
                {/* </Grid> */}
            </div>
        )
    }
}

StaticContent.propTypes = {
    data : PropTypes.arrayOf(PropTypes.object)
}

