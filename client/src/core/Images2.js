import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import I1 from '../img/bg_1.jpg'
import I2 from '../img/big2.jpg'
import I3 from '../img/big8.jpg'
import I4 from '../img/img1.jpg'

const Images2 = () => {
  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={10}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={I1}
                alt="First slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={I2}
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={I3}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src={I4}
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(49).jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="6">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(50).jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="7">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(52).jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="8">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(52).jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="9">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(52).jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="10">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(52).jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default Images2;