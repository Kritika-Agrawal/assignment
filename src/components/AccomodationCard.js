import React, { Component } from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';


export default class AccomodationCard extends Component{

    render(){
        return(
            <Card>
                <CardMedia
                    image="/Users/kritika.a/Desktop/assignments/Dunzo/assignment/resources/images/hotel.jpeg"
                    style = {{height : "100px", width : "100px"}}
                    title="hotelImage"
                />
                <CardContent>
                    <Typography component="p">
                        content
                    </Typography>
                </CardContent>
                <CardActions disableActionSpacing>
                    <Icon>favorite</Icon>
                </CardActions>
            </Card>
        )
    }

}

