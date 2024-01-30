import { Link } from "react-router-dom";
import PageLayout from "../lib/components/page-layout";
// @ts-expect-error Splide library lacks type export
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import NumberScroller from "number-scroller";

import path from "/src/assets/img/svg/Path.svg";
import rectangle from "/src/assets/img/svg/Rectangle.svg";
import oval from "/src/assets/img/svg/Oval.svg";
import triangleShape from "/src/assets/img/svg/Trianglelineshape.svg";

import banner1 from "/src/assets/img/home/banner/banner-1.png";
import banner2 from "/src/assets/img/home/banner/banner-2.png";
import banner3 from "/src/assets/img/home/banner/banner-3.png";

import ellipse13 from "/src/assets/img/svg/Ellipse13.svg";
import ellipse14 from "/src/assets/img/svg/Ellipse14.svg";
import group21 from "/src/assets/img/home/banner/Group21.svg";
import group34 from "/src/assets/img/home/services/Group34.svg";
import group34_svg from "/src/assets/img/svg/Group34.svg";

import logo1 from "/src/assets/img/home/companies-logo/Logo-1.svg";
import logo2 from "/src/assets/img/home/companies-logo/Logo-2.svg";
import logo3 from "/src/assets/img/home/companies-logo/Logo-3.svg";
import logo4 from "/src/assets/img/home/companies-logo/Logo-4.svg";
import logo5 from "/src/assets/img/home/companies-logo/Logo-5.svg";

import icon from "/src/assets/img/home/services/icon.svg";
import branding from "/src/assets/img/home/global-branding/branding.png";
import branding003_1 from "/src/assets/img/home/services/003-branding1.svg";
import pieChart1_004 from "/src/assets/img/home/services/004-pie-chart1.svg";
import shopify_sketch from "/src/assets/img/home/services/shopify-logo.png";
import handshake_sketch from "/src/assets/img/home/services/handshake-sketch.png";
import bulb_sketch from "/src/assets/img/home/services/bulb-sketch.png";
import announcement_sketch from "/src/assets/img/home/services/announcement-sketch.png";

import Rectangle8 from "/src/assets/img/svg/Rectangle8.svg";
import Rectangle920 from "/src/assets/img/home/speciality/Rectangle920.png";
import rectangle925 from "/src/assets/img/home/projects/Rectangle925.png";
import rectangle926 from "/src/assets/img/home/projects/Rectangle926.png";
import rectangle928 from "/src/assets/img/blog/Rectangle928.png";
import rectangle928_2 from "/src/assets/img/blog/Rectangle928(2).png";
import image from "/src/assets/img/home/projects/image.png";
import image1 from "/src/assets/img/home/projects/image(1).png";
import image2 from "/src/assets/img/home/projects/image(2).png";
import quote from "/src/assets/img/svg/quote.svg";
import imageBlog2 from "/src/assets/img/blog/image(2).png";

export default function Home() {
  return (
    <PageLayout activePageSlug="home">
      <main>
        <Splide
          options={{ rewind: true, autoplay: true, pagination: false }}
          className="enpix-bg-3"
        >
          <SplideSlide>
            <div className="banner-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-7">
                    <div className="d-flex align-items-center h-100 relative">
                      <div className="banner-text">
                        <h1>
                          Digital <span>apps</span> design agency
                        </h1>
                        <p className="enpix-subtitle-2">
                          We design next generation apps on your choice of
                          platforms. Checkout our apps in action in our{" "}
                          <span>Apps</span> section.
                        </p>
                        <Link to="/apps">Go to Apps</Link>
                      </div>

                      <img className="path-svg" src={path} alt="wish" />
                      <img
                        className="rectangle-svg"
                        src={rectangle}
                        alt="wish"
                      />
                      <img className="oval-svg" src={oval} alt="wish" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-5">
                    <div className="banner-image-area">
                      <img className="banner-image" src={banner1} alt="wish" />
                      <div className="banner-image-svg relative">
                        <img src={ellipse14} alt="wish" />
                        <img src={ellipse13} alt="wish" />
                      </div>

                      <img className="fill-255" src={group21} alt="wish" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="banner-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-7">
                    <div className="d-flex align-items-center h-100 relative">
                      <div className="banner-text">
                        <h1>
                          Pro <span>team</span> to work with you
                        </h1>
                        <p className="enpix-subtitle-2">
                          In need of <span>skilled resources</span> to work with
                          you, we got you covered. We provide professional
                          staffing, resource outsourcing and teaming services.
                        </p>
                        <Link to="/services">Our Services</Link>
                      </div>

                      <img className="path-svg" src={path} alt="wish" />
                      <img
                        className="rectangle-svg"
                        src={rectangle}
                        alt="wish"
                      />
                      <img className="oval-svg" src={oval} alt="wish" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-5">
                    <div className="banner-image-area">
                      <img className="banner-image" src={banner3} alt="wish" />
                      <div className="banner-image-svg relative">
                        <img src={ellipse14} alt="wish" />
                        <img src={ellipse13} alt="wish" />
                      </div>

                      <img className="fill-255" src={group21} alt="wish" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className="banner-area">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-7">
                    <div className="d-flex align-items-center h-100 relative">
                      <div className="banner-text">
                        <h1>
                          Need <span>product</span> funding?
                        </h1>
                        <p className="enpix-subtitle-2">
                          Talk to us for your next{" "}
                          <span>big dream project</span>. We can help you build
                          it hand-in-hand together at each step of the journey.
                        </p>
                        <a href="services.html">Contact us</a>
                      </div>

                      <img className="path-svg" src={path} alt="wish" />
                      <img
                        className="rectangle-svg"
                        src={rectangle}
                        alt="wish"
                      />
                      <img className="oval-svg" src={oval} alt="wish" />
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-5">
                    <div className="banner-image-area">
                      <img className="banner-image" src={branding} alt="wish" />
                      <div className="banner-image-svg relative">
                        <img src={ellipse14} alt="wish" />
                        <img src={ellipse13} alt="wish" />
                      </div>

                      <img className="fill-255" src={group21} alt="wish" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SplideSlide>
        </Splide>

        <section className="brands-logo-area pt-5 pb-70">
          <div className="container">
            <h2 className="heading-4 mb-70 text-center">
              Our prestigious partners and clients
            </h2>
            <Splide
              options={{
                rewind: true,
                perPage: 3,
                autoplay: true,
                pagination: false,
                arrows: false,
              }}
            >
              <SplideSlide>
                <img src={logo1} alt="wish" />
              </SplideSlide>
              <SplideSlide>
                <img src={logo2} alt="wish" />
              </SplideSlide>
              <SplideSlide>
                <img src={logo3} alt="wish" />
              </SplideSlide>
              <SplideSlide>
                <img src={logo4} alt="wish" />
              </SplideSlide>
              <SplideSlide>
                <img src={logo5} alt="wish" />
              </SplideSlide>
            </Splide>
          </div>
        </section>

        <section className="services-area pb-130 relative enpix-bg-1">
          <div className="container">
            <div className="row services-header pt-120 pb-80">
              <div className="col-xl-5 col-md-6 wow animate__animated animate__fadeInLeft">
                <h2 className="heading-1">
                  How we <span>can help</span>
                </h2>
              </div>
              <div className="col-xl-5 col-md-6 offset-xl-2 wow animate__animated animate__fadeInRight">
                <p className="enpix-subtitle-2 m-0">
                  Winworld Innovative Solutions Hub is a boutique technology
                  services company. We provide services spanning from product
                  designing and consulting to end to end delivery of software
                  solutions including comprehensive maintenance and support.
                </p>
              </div>
            </div>

            <div className="relative">
              <img className="circle-shape" src={group34} alt="wish" />
              <img className="triangle-shape" src={triangleShape} alt="wish" />
              <div className="row wow animate__animated animate__fadeInUp animate__delay-1s">
                <div className="col-xl-3 col-sm-6">
                  <div className="service-content">
                    <img src={icon} alt="wish" />
                    <h3 className="heading-5">
                      <a href="services.html">Mobile Apps</a>
                    </h3>
                    <p className="enpix-body-text-2">
                      Partner with us to <span>build mobile apps</span> for
                      yourself or your customers.
                    </p>
                    <Link to="/services">
                      <svg
                        width="37"
                        height="15"
                        viewBox="0 0 37 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.1667 13.5098L36 7.50977L30.1667 1.50977M1 7.50977H36H1Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <div className="service-content">
                    <img src={branding003_1} alt="wish" />
                    <h3 className="heading-5">
                      <a href="services.html">Websites & Web Apps</a>
                    </h3>
                    <p className="enpix-body-text-2">
                      We can help build, migrate, maintain, and even design your{" "}
                      <span>websites and web apps</span>.
                    </p>
                    <Link to="/services">
                      <svg
                        width="37"
                        height="15"
                        viewBox="0 0 37 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.1667 13.5098L36 7.50977L30.1667 1.50977M1 7.50977H36H1Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <div className="service-content">
                    <img src={shopify_sketch} alt="wish" />
                    <h3 className="heading-5">
                      <a href="services.html">Shopify Apps</a>
                    </h3>
                    <p className="enpix-body-text-2">
                      Checkout our Shopify App Catalog. We also do build{" "}
                      <span>tailored Shopify Solutions</span>.
                    </p>
                    <a href="services.html">
                      <svg
                        width="37"
                        height="15"
                        viewBox="0 0 37 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.1667 13.5098L36 7.50977L30.1667 1.50977M1 7.50977H36H1Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="col-xl-3 col-sm-6">
                  <div className="service-content">
                    <img src={pieChart1_004} alt="wish" />
                    <h3 className="heading-5">
                      <a href="services.html">Digital Marketing</a>
                    </h3>
                    <p className="enpix-body-text-2">
                      We can help your website grow with our{" "}
                      <span>digital marketing</span> and SEO services.
                    </p>
                    <Link to="/services">
                      <svg
                        width="37"
                        height="15"
                        viewBox="0 0 37 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M30.1667 13.5098L36 7.50977L30.1667 1.50977M1 7.50977H36H1Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="branding-area">
          <div className="container">
            <div className="row">
              <div className="col-md-6 wow animate__animated animate__fadeInLeft">
                <div className="branding-image-container relative">
                  <img
                    className="branding-image-shape"
                    src={group21}
                    alt="wish"
                  />
                  <img className="branding-image" src={banner2} alt="wish" />
                </div>
              </div>
              <div className="col-md-6 wow animate__animated animate__fadeInRight">
                <div className="branding-text">
                  <h2 className="heading-1">
                    We've been helping <span>customers</span> globally.
                  </h2>
                  <p className="enpix-subtitle-2 mt-50">
                    With our branch office and partner network we can support
                    your business wherever it is in the world. We are a{" "}
                    <span>diverse cultured</span> organization with a global
                    reach.
                  </p>
                  <Link
                    to="/about"
                    className="enpix-cta-transparent mt-80 d-inline-block wow animate__animated animate__flipInX animate__delay-1s"
                  >
                    More About Us
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4 col-6 mx-auto">
                <div className="countdown-box">
                  <div className="countdown">
                    <span>
                      <NumberScroller from={0} to={100} />
                    </span>
                    %
                  </div>
                  <div className="counter-text">
                    <p>
                      Satisfied <br /> clients
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-6 mx-auto">
                <div className="countdown-box">
                  <div className="countdown">
                    <span>
                      <NumberScroller from={0} to={26} />
                    </span>
                  </div>
                  <div className="counter-text">
                    <p>
                      Customer Apps <br /> deployed
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-6 mx-auto">
                <div className="countdown-box">
                  <div className="countdown">
                    <span>
                      <NumberScroller from={0} to={5000} step={20} />
                    </span>
                  </div>
                  <div className="counter-text">
                    <p>
                      hours of <br /> support provided
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="speciality-area enpix-bg-1">
          <div className="container">
            <div className="speciality-container pt-130 pb-130">
              <div className="row d-flex justify-content-between">
                <div className="col-xl-5 col-lg-6 wow animate__animated animate__fadeInLeft">
                  <div className="speciality-text">
                    <h2 className="heading-1">
                      Why you should choose <span>us</span>?
                    </h2>
                    <p className="enpix-subtitle-2 mt-50">
                      We are a team of multi-skilled professionals coming from
                      diverse industry background bringing together loads of
                      domain expertise.
                    </p>
                    <Link
                      to="/about"
                      className="mt-80 d-inline-block wow animate__animated animate__flipInX animate__delay-1s"
                    >
                      Partner with us
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 wow animate__animated animate__fadeInRight">
                  <div className="speciality-video-thumbnail-container relative">
                    <img
                      className="speciality-video-shape"
                      src={group21}
                      alt="wish"
                    />
                    <img
                      className="speciality-video-triangle"
                      src={Rectangle8}
                      alt="wish"
                    />
                    <img
                      className="speciality-video-thumbnail"
                      src={Rectangle920}
                      alt="wish"
                    />
                    <div className="video-play-icon">
                      <a
                        className="popup-video"
                        href="https://www.youtube.com/watch?v=d4FM0mITAx4"
                      >
                        <svg
                          width="28"
                          height="37"
                          viewBox="0 0 28 37"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M4.47652 1.75485C3.15096 0.826962 1.32959 1.77527 1.32959 3.39331V33.5311C1.32959 35.1491 3.15096 36.0975 4.47651 35.1696L26.0035 20.1007C27.1409 19.3045 27.1409 17.6199 26.0035 16.8237L4.47652 1.75485Z"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                    <div className="video-play-icon-layer-2"></div>
                    <div className="video-play-icon-layer-3"></div>
                  </div>
                </div>
              </div>
              <div className="speciality-features row pt-130 wow animate__animated animate__fadeInUp">
                <div className="col-md-4">
                  <div className="speciality-box">
                    <img src={handshake_sketch} alt="wish" />
                    <h3 className="heading-5 mt-35">Friendly Interface</h3>
                    <p className="enpix-body-text-2 mt-20">
                      Exercit ullamo quis nostrud ea laboris nisi ut aliqui duis
                      aut iru. Donec bibendum urna vel bibendum.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="speciality-box">
                    <img src={bulb_sketch} alt="wish" />
                    <h3 className="heading-5 mt-35">Quality Support</h3>
                    <p className="enpix-body-text-2 mt-20">
                      Exercit ullamo quis nostrud ea laboris nisi ut aliqui duis
                      aut iru. Donec bibendum urna vel bibendum.
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="speciality-box">
                    <img src={announcement_sketch} alt="wish" />
                    <h3 className="heading-5 mt-35">Great Pricing</h3>
                    <p className="enpix-body-text-2 mt-20">
                      Exercit ullamo quis nostrud ea laboris nisi ut aliqui duis
                      aut iru. Donec bibendum urna vel bibendum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-area pt-130 pb-130">
          <div className="container">
            <div className="projects-header">
              <div className="row">
                <div className="col-xl-7">
                  <h2 className="heading-1">
                    Our recent <span>projects</span>.
                  </h2>
                  <p className="mt-50 mb-0">
                    Aliquam tristique libero at dui sodales, et placerat orci
                    lobortis. Donec metus lorem, vulputate at sapien sit amet,
                    auctor iaculis lorem.
                  </p>
                </div>
                <div className="col-xl-5">
                  <div className="projects-link">
                    <a href="portfolio.html">
                      Show More Projects
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 13L17.5 10.5L15 8M2.5 10.5H17.5H2.5Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="projects-container pt-80">
              <div className="project-box">
                <div className="project-thumbnail">
                  <a href="portfolio-details.html">
                    <img src={rectangle925} alt="wish" />
                  </a>
                </div>
                <div className="project-details pt-35">
                  <div className="row">
                    <div className="col-9">
                      <div className="project-text">
                        <h3>
                          <a href="portfolio-details.html">
                            Plastic Credit Card
                          </a>
                        </h3>
                        <p className="enpix-body-text-2">Identity, Mockup</p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="project-url">
                        <a href="portfolio-details.html">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.75 6.73047V1.73047H13.75M1.25 19.2305L18.75 1.73047L1.25 19.2305Z"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-box">
                <div className="project-thumbnail">
                  <a href="portfolio-details.html">
                    <img src={rectangle926} alt="wish" />
                  </a>
                </div>
                <div className="project-details pt-35">
                  <div className="row">
                    <div className="col-9">
                      <div className="project-text">
                        <h3>
                          <a href="portfolio-details.html">3D Illustration</a>
                        </h3>
                        <p className="enpix-body-text-2">
                          Development, Mobile App
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="project-url">
                        <a href="portfolio-details.html">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.75 6.73047V1.73047H13.75M1.25 19.2305L18.75 1.73047L1.25 19.2305Z"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-box">
                <div className="project-thumbnail">
                  <a href="portfolio-details.html">
                    <img src={image} alt="wish" />
                  </a>
                </div>
                <div className="project-details pt-35">
                  <div className="row">
                    <div className="col-9">
                      <div className="project-text">
                        <h3>
                          <a href="portfolio-details.html">
                            Statistics Mobile App
                          </a>
                        </h3>
                        <p className="enpix-body-text-2">
                          Development, Mobile App
                        </p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="project-url">
                        <a href="portfolio-details.html">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.75 6.73047V1.73047H13.75M1.25 19.2305L18.75 1.73047L1.25 19.2305Z"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-box">
                <div className="project-thumbnail">
                  <a href="portfolio-details.html">
                    <img src={image1} alt="wish" />
                  </a>
                </div>
                <div className="project-details pt-35">
                  <div className="row">
                    <div className="col-9">
                      <div className="project-text">
                        <h3>
                          <a href="portfolio-details.html">
                            Color Blending Effect
                          </a>
                        </h3>
                        <p className="enpix-body-text-2">Design, Graphics</p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="project-url">
                        <a href="portfolio-details.html">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.75 6.73047V1.73047H13.75M1.25 19.2305L18.75 1.73047L1.25 19.2305Z"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="project-box">
                <div className="project-thumbnail">
                  <a href="portfolio-details.html">
                    <img src={image2} alt="wish" />
                  </a>
                </div>
                <div className="project-details pt-35">
                  <div className="row">
                    <div className="col-9">
                      <div className="project-text">
                        <h3>
                          <a href="portfolio-details.html">3D Animation</a>
                        </h3>
                        <p className="enpix-body-text-2">Design, Dimension</p>
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="project-url">
                        <a href="portfolio-details.html">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18.75 6.73047V1.73047H13.75M1.25 19.2305L18.75 1.73047L1.25 19.2305Z"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="reviews-area pt-130 pb-130 relative">
          <img src={group34_svg} alt="wish" className="review-shape-circle" />
          <img
            src={triangleShape}
            alt="wish"
            className="review-shape-triangle"
          />
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5">
                <div className="reviews-area-heading wow animate__animated animate__fadeInLeft">
                  <h2 className="heading-1">
                    What our <span>clients</span> say about us.
                  </h2>
                  <p className="enpix-subtitle-2 mt-50">
                    Aliquam tristique libero at dui sodales, et placerat orci
                    lobortis. Donec metus lorem, vulputate at sapien.
                  </p>
                </div>
              </div>
              <div className="col-xl-6 col-lg-7 offset-xl-1">
                <img src={quote} alt="wish" />
                <Splide
                  options={{
                    rewind: true,
                    autoplay: true,
                    pagination: false,
                    arrows: false,
                    pauseOnHover: false,
                  }}
                >
                  <SplideSlide>
                    <div className="reviews-container">
                      <div className="review-text">
                        <p>
                          5 stars design agency! If anyone wants an example of
                          what you can do with this theme, check out my site at
                          artishthemes.com.
                        </p>
                      </div>
                      <div className="review-author">
                        <h3 className="enpix-subtitle-3">Cooper Saris</h3>
                        <p className=" enpix-body-small-1">
                          Project Manager, Corder
                        </p>
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="reviews-container">
                      <div className="review-text">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Etiam a leo tellus.{" "}
                        </p>
                      </div>
                      <div className="review-author">
                        <h3 className="enpix-subtitle-3">John Doe</h3>
                        <p className=" enpix-body-small-1">
                          Project Manager, Corder
                        </p>
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="reviews-container">
                      <div className="review-text">
                        <p>
                          5 stars design agency! If anyone wants an example of
                          what you can do with this theme, check out my site at
                          artishthemes.com.
                        </p>
                      </div>
                      <div className="review-author">
                        <h3 className="enpix-subtitle-3">Cooper Saris</h3>
                        <p className=" enpix-body-small-1">
                          Project Manager, Corder
                        </p>
                      </div>
                    </div>
                  </SplideSlide>
                  <SplideSlide>
                    <div className="reviews-container">
                      <div className="review-text">
                        <p>
                          5 stars design agency! If anyone wants an example of
                          what you can do with this theme, check out my site at
                          artishthemes.com.
                        </p>
                      </div>
                      <div className="review-author">
                        <h3 className="enpix-subtitle-3">Cooper Saris</h3>
                        <p className=" enpix-body-small-1">
                          Project Manager, Corder
                        </p>
                      </div>
                    </div>
                  </SplideSlide>
                </Splide>
              </div>
            </div>
          </div>
        </section>

        <section className="blog-area pt-130 pb-130 enpix-bg-1">
          <div className="container">
            <div className="blog-area-header pb-80">
              <div className="row">
                <div className="col-xl-9">
                  <h2 className="heading-1">
                    Our inside <span>news</span>.
                  </h2>
                </div>
                <div className="col-xl-3">
                  <div className="projects-link">
                    <a href="blog.html">
                      Check Our All News
                      <svg
                        width="20"
                        height="21"
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 13L17.5 10.5L15 8M2.5 10.5H17.5H2.5Z"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-blog-grid">
              <div className="enpix-post-item m-0">
                <div className="relative">
                  <div className="post-thumbnail">
                    <a href="blog-details.html">
                      <img src={rectangle928} alt="enpix-blog" />
                    </a>
                    <a className="category-badge" href="blog.html">
                      Grid Layout
                    </a>
                  </div>
                  <div className="post-meta">
                    <div className="post-author">
                      <div className="author-thumbnail">
                        <img
                          src="./assets/img/blog/author/author3.png"
                          alt="enpix-blog"
                        />
                      </div>
                      <div className="author-name">
                        <p>
                          <a href="blog.html">Sanzary Rezvy</a>
                        </p>
                      </div>
                    </div>
                    <div className="post-date">
                      <i className="fa-regular fa-calendar"></i>
                      <p>
                        <a href="blog.html">December 20, 2021</a>
                      </p>
                    </div>
                  </div>
                  <div className="post-title">
                    <h2>
                      <a href="blog-details.html">
                        Designer's Checklist for Every UX Project.
                      </a>
                    </h2>
                  </div>
                  <div className="post-readmore">
                    <a href="blog-details.html">
                      Read more <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="enpix-post-item m-0">
                <div className="relative">
                  <div className="post-thumbnail">
                    <a href="blog-details.html">
                      <img src={rectangle928_2} alt="enpix-blog" />
                    </a>
                    <Link className="category-badge" to="">
                      Grid Layout
                    </Link>
                  </div>
                  <div className="post-meta">
                    <div className="post-author">
                      <div className="author-thumbnail">
                        <img
                          src="./assets/img/blog/author/author-1.png"
                          alt="enpix-blog"
                        />
                      </div>
                      <div className="author-name">
                        <p>
                          <a href="blog.html">Jaxson Geldit</a>
                        </p>
                      </div>
                    </div>
                    <div className="post-date">
                      <i className="fa-regular fa-calendar"></i>
                      <p>
                        <a href="blog.html">December 20, 2021</a>
                      </p>
                    </div>
                  </div>
                  <div className="post-title">
                    <h2>
                      <a href="blog-details.html">
                        Designer's Checklist for Every UX Project.
                      </a>
                    </h2>
                  </div>
                  <div className="post-readmore">
                    <a href="blog-details.html">
                      Read more <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="enpix-post-item m-0">
                <div className="relative">
                  <div className="post-thumbnail">
                    <a href="blog-details.html">
                      <img src={imageBlog2} alt="enpix-blog" />
                    </a>
                    <Link className="category-badge" to="">
                      Grid Layout
                    </Link>
                  </div>
                  <div className="post-meta">
                    <div className="post-author">
                      <div className="author-thumbnail">
                        <img
                          src="./assets/img/blog/author/author-2.png"
                          alt="enpix-blog"
                        />
                      </div>
                      <div className="author-name">
                        <p>
                          <a href="blog.html">Cooper Saris</a>
                        </p>
                      </div>
                    </div>
                    <div className="post-date">
                      <i className="fa-regular fa-calendar"></i>
                      <p>
                        <a href="blog.html">December 20, 2021</a>
                      </p>
                    </div>
                  </div>
                  <div className="post-title">
                    <h2>
                      <a href="blog.html">
                        Designer's Checklist for Every UX Project.
                      </a>
                    </h2>
                  </div>
                  <div className="post-readmore">
                    <a href="blog-details.html">
                      Read more <i className="fa-solid fa-arrow-right-long"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="subscribe-form-area bg-white">
          <img
            src={group34_svg}
            alt="wish"
            className="subscribe-shape-circle"
          />
          <div className="container">
            <div className="row">
              <div className="col-xl-5 col-lg-6">
                <h2 className="heading-3">
                  Get update by <span>signup</span> Newsletter.
                </h2>
              </div>
              <div className="col-xl-7 col-lg-6 d-flex align-items-center justify-content-end">
                <form action="#" className="enpix-subscribe-form">
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </PageLayout>
  );
}
