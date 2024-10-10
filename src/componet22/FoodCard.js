import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'; // Import makeStyles from @mui/styles

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 20,
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  media: {
    height: 200,
  },
});

const FoodCard = ({ dishName, dishCategory, dishPrice, dishImage, dishRating }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        component="img"
        image={dishImage}
        alt={dishName}
      />
      <CardContent>
        <Typography variant="h6" component="h2">
          {dishName}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Category: {dishCategory}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Price: {dishPrice}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Rating: {dishRating}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FoodCard;
