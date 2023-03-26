import Carousel from 'react-bootstrap/Carousel';
import './css/SliderX.css';



function SliderX() {
  return (
    <Carousel>
      <Carousel.Item> 





      <img src='https://images3.alphacoders.com/649/649974.jpg' className='img-fluid shadow-4 ' alt='...' />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://images3.alphacoders.com/649/649974.jpg' className='img-fluid shadow-4' alt='...' />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='https://images3.alphacoders.com/649/649974.jpg' className='img-fluid shadow-4' alt='...' />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default SliderX;