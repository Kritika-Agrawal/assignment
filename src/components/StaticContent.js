import React, { PureComponent } from 'react'
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
    fontSize : '0.8em'
  },
  subheaderRoot : {
    fontSize : '0.8em',
    marginTop : '0.8em'
  },
  cardMedia : {
    height: '100px',
    width : '15vw'
  }
}

let StaticTile = ((props) => {
  let { datum, classes } = props
  return (
    <Card className="card">
      <CardMedia image={datum.imageUrl || "#"} classes = {{
        root : classes.cardMedia
      }}
      title="icon" />
      <CardContent className = "card-content" classes = {{ root : classes.cardContent }}>
        <CardHeader
          classes = {{
            title : classes.title,
            subheader: classes.subheaderRoot
          }}
          title={datum.title}
          subheader={datum.content}
        />
      </CardContent>
    </Card>
  )
})

StaticTile.propTypes = {
  datum : PropTypes.object,
  classes: PropTypes.object,
}

StaticTile = withStyles(styles)(StaticTile)

export default class StaticContent extends PureComponent{

  constructor(props){
    super(props)
  }

  render(){
    let { data } = this.props
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

