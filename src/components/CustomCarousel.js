import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';
import '../style/Carousel.css'; // Import your custom CSS for styling

const CustomCarousel = () => {
  return (
    <div className="main-banner-slider">
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000}
        showThumbs={false}
      >
        <div className="slide">
          <div className="carousel-image">
            <img src='image/test.jpg' alt="Background" />
          </div>
          <div className="carousel-overlay">
            <Link to="">
              <img src='image/test.jpg' alt="Pizza 1" />
            </Link>
          </div>
        </div>
        <div className="slide">
          <div className="carousel-image">
            <img src='image/background.jpg' alt="Background" />
          </div>
          <div className="carousel-overlay">
            <Link to="">
              <img src='image/test.jpg' alt="Pizza 2" />
            </Link>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default CustomCarousel;
