import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types';

const style = {
    root : {
        height : '400px',
        width : '250px',
        marginBottom : '2px',
        position: 'relative'
    },
    cardMedia : {
        height: '200px',
        width: '250px'
    },
    title : {
        fontSize : '0.8em'
    },
    subheader : {
        marginTop : '10px',
        fontSize: '0.6em'
    },
    headerRoot : {
        paddingTop : '10px',
        paddingRight : '10px',
        paddingBottom: '20px',
        paddingLeft : '0px',

    },
    contentRoot : {
        paddingBottom : 0
    }
}

class AccomodationCard extends Component{
    constructor(props){
        super(props)
    }

    addToFavourites = (accomId) => {
       this.props.addToFavourites(accomId)
    }

    render(){
        let { classes, data : { id, title, cityName, area, rate } } = this.props
        return(
            <Card 
                classes = {{
                    root : classes.root
                }}
            >
                <CardMedia
                    image="/resources/images/hotel.jpeg"
                    classes = {{
                        root : classes.cardMedia
                    }}
                    title="hotelImage"
                />
                <CardContent classes = {{
                    root : classes.contentRoot
                }}>
                    <Typography variant="subtitle2" component="h3">
                        {title}
                    </Typography>
                    <CardHeader
                        title={cityName}
                        subheader={area}
                        classes = {{
                            root: classes.headerRoot,
                            title : classes.title,
                            subheader : classes.subheader
                        }}
                    />
                    <div style = {{ display : 'flex', flexDirection : 'row', justifyContent : 'space-between'}}> 
                        <div>
                            <Typography component="p" variant="overline">
                                From
                            </Typography>
                            <Typography component="p" variant="caption">
                                <b style = {{fontSize : '2em'}}>{rate}</b>/per night
                            </Typography>
                        </div>
                        <div style = {{ width : '60px'}}>
                            <Button size={"medium"} style={{ position: 'absolute' }}>View</Button>
                        </div>
                    </div>
                </CardContent>
                <CardActions disableActionSpacing>
                    <FavoriteIcon onClick={this.addToFavourites.bind(this, id)} style={{
                        position: 'absolute',
                        top: '186px',
                        left: '200px'}}/>
                </CardActions>
            </Card>
        )
    }

}

AccomodationCard.propTypes = {
    // title : PropTypes.string,
    // cityName: PropTypes.string,
    // area: PropTypes.string,
    // rate: PropTypes.string
    data: PropTypes.object,
    addToFavourites : PropTypes.func
}

export default withStyles(style)(AccomodationCard)
