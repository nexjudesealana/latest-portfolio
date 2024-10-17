import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "LAKBAYAN",
      description:
        "A Travel-Social Itinerary Mobile Application with Derived Enhanced Simulated Annealing Algorithm",
      imgUrl: projImg2,
      projectLink:
        "https://www.sciencedirect.com/science/article/pii/S1877050924006501?dgcid=rss_sd_all",
    },
    {
      title: "WAISMAIS",
      description:
        "An IoT-Enhanced Corn Disease Diagnosis through a Mobile Application Using Decision Tree Classifier for Soil NPK Analysis and YOLOv8 for Disease Identification",
      imgUrl: projImg1,
      projectLink:
        "https://drive.google.com/file/d/1r9rUzeNv6GkTiKy6l6iQH5f5mThJrwxB/view?usp=sharing",
    },
    {
      title: "FIELDMATE",
      description:
        "A GPS-based field management system to aid farmers in managing crops through task scheduling, monitoring, and real-time updates.",
      imgUrl: projImg3,
      projectLink:
        "https://drive.google.com/file/d/1S5UHVhiMjdi0_qwXPx-BsmxyOikxPddO/view?usp=sharing",
    },
    {
      title: "KISLAP",
      description:
        "A beginner-friendly programming language designed to make coding accessible to Filipino speakers",
      imgUrl: projImg4,
      projectLink:
        "https://drive.google.com/file/d/1tck9Y4TeY0ZdZyMeIpbITon_WKAJgN3M/view?usp=sharing",
    },
    {
      title: "Facilities and Car Booking System",
      description:
        "An intuitive platform that streamlines resource requests and reservations",
      imgUrl: projImg5,
      projectLink: "https://github.com/jcpanggoy/ifo.git",
    },
    {
      title: "PizzaStop Inventory System",
      description:
        "Efficient inventory management system designed for PizzaStop to track stock levels, manage orders, and streamline supply chain operations.",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Explore a collection of innovative projects showcasing
                    skills in development, design, and technology integration.
                    Each project is crafted to deliver impactful solutions and
                    demonstrate creativity, efficiency, and technical expertise.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      {/* <Nav.Item>
                        <Nav.Link eventKey="first" className="custom-tab">
                          Innovative Solutions
                        </Nav.Link>
                      </Nav.Item> */}
                      {/* <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>
                          Explore a collection of innovative projects showcasing
                          skills in development, design, and technology
                          integration. Each project is crafted to deliver
                          impactful solutions and demonstrate creativity,
                          efficiency, and technical expertise.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
