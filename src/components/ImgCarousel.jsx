import React from 'react';
import Slider from 'react-slick';

const ImgCarousel = ({ restaurantInfo }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Slider {...settings}>
        {restaurantInfo.attributes.image.data.map((img, idx) => (
          <div key={idx}>
            <img
              src={`http://localhost:1337${img.attributes.formats.small.url}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`http://localhost:1337${img.attributes.formats.small.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={img.attributes.alternativeText}
            />
          </div>
        ))}
      </Slider>
    </>
  );
};

export default ImgCarousel;
