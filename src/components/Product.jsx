// Todo esto es el card de nuetro producto
import * as React from 'react';
import { styled } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import accounting from 'accounting';



const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));



const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
    action: {
        marginTop: "1rem"
    },
    media: {
        height: 0,
        paddingTop: "56.25%", //16:9
    },

  });

export default function Product() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  return (
    <Card className={classes.root}>
            <CardHeader
                action={
                    <Typography
                        className={classes.action}
                        variant='h5'
                        color='textSecondary'
                    >
                        {accounting.formatMoney(80, "$")}
                    </Typography>
                }
                title="Arrachera"
                subheader="In Stock"
            />
            <CardMedia
                className={classes.media}
                image="https://media-cdn.tripadvisor.com/media/photo-s/0e/f7/e4/db/plato-de-arrachera-acompanado.jpg"
                title="arrachera"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary" component='p'>
                    Comida
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="Add to Cart">
                    <AddShoppingCartIcon fontSize='large' />
                </IconButton>
                {Array(4)
                    .fill()
                    .map((_, i) => (
                        <p>&#11088;</p>
                    ))}
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                   <Typography palagraph>"Carne de res"</Typography>
                </CardContent>
            </Collapse>
        </Card>
  );
}
