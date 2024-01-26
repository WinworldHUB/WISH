import lightLogo from "/src/assets/img/site-logo/logo-light.png";
import footerLightPath from "/src/assets/img/svg/footer-light-path.svg";
import footerLightTriangle from "/src/assets/img/svg/Trianglelineshape.svg";

const PageFooter: React.FC = () => {
  return (
    <footer className="enpix-footer-light">
      <img src={footerLightPath} alt="enpix" className="footer-path" />
      <img src={footerLightTriangle} alt="enpix" className="footer-triangle" />
      <div className="container footer-container enpix-border-top">
        <div className="row">
          <div className="col-lg-4 mb-30">
            <div className="company-info">
              <img src={lightLogo} alt="enpix" />
              <div className="footer-mail mt-30 mb-15">
                <a href="/cdn-cgi/l/email-protection#a4c7cbc9d4c5caddcdcac2cbe4c9c5cdc88ac7cbc9">
                  <span
                    className="__cf_email__"
                    data-cfemail="73101c1e03121d0a1a1d151c331e121a1f5d101c1e"
                  >
                    [email&#160;protected]
                  </span>
                </a>
              </div>
              <div className="footer-phone mb-25">
                <a href="tel:+919660112628">+91 966011 2628</a>
              </div>
              <div className="social-icons">
                <a href="https://facebook.com">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://twitter.com">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://pinterest.com">
                  <i className="fa-brands fa-pinterest-p"></i>
                </a>
                <a href="https://dribbble.com">
                  <i className="fa-brands fa-dribbble"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-6 mb-30">
            <div className="footer-menu">
              <h2>Links</h2>
              <ul>
                <li>
                  <a href="about.html">Company Details</a>
                </li>
                <li>
                  <a href="blog.html">Our Newsfeed</a>
                </li>
                <li>
                  <a href="services.html">Service Standard</a>
                </li>
                <li>
                  <a href="team.html">Team Members</a>
                </li>
                <li>
                  <a href="404.html">Pricing Standard</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-6 mb-30">
            <div className="footer-menu">
              <h2>Legal</h2>
              <ul>
                <li>
                  <a href="index.html">Agency Minimal</a>
                </li>
                <li>
                  <a href="index-2.html">Creative Agency</a>
                </li>
                <li>
                  <a href="index-3.html">Creative Layout</a>
                </li>
                <li>
                  <a href="index-4.html">Dark Layout</a>
                </li>
                <li>
                  <a href="faq.html">FAQ with Filter</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-6">
            <div className="footer-menu">
              <h2>Projects</h2>
              <ul>
                <li>
                  <a href="portfolio.html">Projects Common</a>
                </li>
                <li>
                  <a href="portfolio.html">Projects Creative</a>
                </li>
                <li>
                  <a href="portfolio.html">Projects Standard</a>
                </li>
                <li>
                  <a href="index-4.html">Dark Layout</a>
                </li>
                <li>
                  <a href="404.html">eCommerce</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright-area enpix-border-top">
          <p className="text-center">Copyright 2024.</p>
        </div>
      </div>
    </footer>
  );
};

export default PageFooter;
