import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    height: '100%',
    maxWidth: 345,
    flexDirection: 'column',
    justifyContent: 'space-between',
    display: 'flex',
  },
  media: {
    height: 140,
  },
})

export const Company = ({ companyName, specialty, city }) => {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://via.placeholder.com/280x690.png?text=${companyName}`}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {companyName}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {city}
            <br />
            {specialty}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}
