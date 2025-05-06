import Carousel from "react-bootstrap/Carousel";

function CarouselGallery() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          src="https://picsum.photos/seed/picsum/1500/75"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://picsum.photos/seed/picsum/1500/75"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://picsum.photos/seed/picsum/1500/75"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselGallery;
