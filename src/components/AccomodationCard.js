import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import { withStyles } from '@material-ui/core/styles'
import CustomButton from './Button'
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

    addToFavourites = () => {
       this.props.addToFavourites(this.props.data.id)
    }

    render(){
        let { classes, data : { id, imageUrl, title, cityName, area, rate }, favAccoms } = this.props
        let fabStyleSelected = {
            position: 'absolute',
            top: '180px',
            left: '200px',
            color: 'orangered',
        }
        let fabStyle = {
            position: 'absolute',
            top: '180px',
            left: '200px',
            color: '#FFFFFF',
        }

        return(
            <Card 
                classes = {{
                    root : classes.root
                }}
            >
                <CardMedia
                    image={imageUrl}
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
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', 'alignItems': 'center'}}> 
                        <div>
                            <Typography component="p" variant="overline">
                                From
                            </Typography>
                            <Typography component="p" variant="caption">
                                <b style = {{fontSize : '2em'}}>{rate}</b>/per night
                            </Typography>
                        </div>
                        <div style = {{ width : '60px'}}>
                            <CustomButton>View</CustomButton>
                            {/* <Button size={"medium"} style={{ position: 'absolute' }}>View</Button> */}
                        </div>
                    </div>
                </CardContent>
                <CardActions disableActionSpacing>
                    <Fab size = 'small' aria-label="like" classes = {{
                        root : classes.fabIcon
                    }}
                    style={favAccoms.includes(id) ? fabStyleSelected : fabStyle}
                    onClick = {this.addToFavourites}
                    >
                        <FavoriteIcon />
                    </Fab>
                </CardActions>
            </Card>
        )
    }

}

AccomodationCard.propTypes = {
    data: PropTypes.object,
    favAccoms : PropTypes.array,
    addToFavourites : PropTypes.func
}

export default withStyles(style)(AccomodationCard)
