import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import agile from "../assets/img/agile.png";
import agile2 from "../assets/img/agile2.png";
import merger from "../assets/img/merger.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Certificates = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="certificates" id="certificates">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>CERTIFICATES</h2>
              <p>
              My commitment to continuous learning is reflected in the certifications I have obtained. 
              These credentials validate my expertise in various aspects of software development, 
              including modern web technologies, database management, and application development. 
              Each certificate represents my dedication to staying updated with industry best practices 
              and delivering high-quality solutions.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={agile} alt="Agile Software Development: Clean Coding Practices" />
                  <h5>Agile Software Development: Clean Coding Practices</h5>
                </div>
                <div className="item">
                  <img src={agile2} alt="Agile Software Development: Refactoring" />
                  <h5>Agile Software Development: Refactoring</h5>
                </div>
                <div className="item">
                  <img src={merger} alt="Understanding the Impact of a Merger for IT Teams" />
                  <h5>Understanding the Impact of a Merger for IT Teams</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
