import Carousel from 'react-bootstrap/Carousel';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    root: {
    //   marginTop: "-20px",
      height: "200px"
    },
    action: {
        marginTop: "0px"
    },
    media: {
        height: 0,
        paddingTop: "56.25%", //16:9
    },
  });


function Corousel() {
    const classes = useStyles();
  return (
    <Carousel   >
      <Carousel.Item className={classes.action}>
        <img
        //   className="d-block w-100"
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2018/05/31/10/07/network-3443547_960_720.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Leo</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={classes.action}>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2018/05/31/10/07/network-3443547_960_720.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Yudid</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item >
      <Carousel.Item className={classes.action}>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2018/05/31/10/07/network-3443547_960_720.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Rut</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Corousel;