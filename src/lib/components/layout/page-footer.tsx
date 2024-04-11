import { FC } from "react";

const PageFooter: FC = () => {
  return (
    <footer id="footer-2" className="footer division">
      <div className="container">
        {/* FOOTER CONTENT */}
        <div className="row">
          {/* FOOTER LINKS */}
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="footer-links mb-40">
              {/* Title */}
              <h6 className="h6-xl">Company</h6>
              {/* Footer Links */}
              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="demo-13.html#">About Us</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="demo-13.html#">Careers</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="demo-13.html#">Press &amp; Media</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="demo-13.html#">Contact Us</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* FOOTER LINKS */}
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="footer-links mb-40">
              {/* Title */}
              <h6 className="h6-xl">Discover</h6>
              {/* Footer List */}
              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="demo-13.html#">Our Blog</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="demo-13.html#">Advertising</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="demo-13.html#">Plans &amp; Pricing</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="demo-13.html#">Testimonials</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* FOOTER LINKS */}
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="footer-links mb-40">
              {/* Title */}
              <h6 className="h6-xl">Legal</h6>
              {/* Footer List */}
              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="demo-13.html#">Terms of Use</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="demo-13.html#">Privacy Policy</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="demo-13.html#">Cookie Policy</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="demo-13.html#">Site Map</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* FOOTER LINKS */}
          <div className="col-sm-6 col-md-3 col-lg-2">
            <div className="footer-links mb-40">
              {/* Title */}
              <h6 className="h6-xl">Support</h6>
              {/* Footer Links */}
              <ul className="foo-links text-secondary clearfix">
                <li>
                  <p className="p-md">
                    <a href="demo-13.html#">FAQs</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="demo-13.html#">Editor Help</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="demo-13.html#">Community</a>
                  </p>
                </li>
                <li>
                  <p className="p-md">
                    <a href="demo-13.html#">Live Chatting</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>
          {/* FOOTER NEWSLETTER FORM */}
          <div className="col-md-7 col-lg-4">
            <div className="footer-form pl-30 mb-20">
              {/* Title */}
              <h6 className="h6-xl">Follow the Best</h6>
              {/* Newsletter Form Input */}
              <form className="newsletter-form mt-25">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email Address"
                    required={true}
                    id="s-email"
                  />
                  <span className="input-group-btn ico-15">
                    <button type="submit" className="btn violet-red-color">
                      <span className="flaticon-right-arrow-1" />
                    </button>
                  </span>
                </div>
                {/* Newsletter Form Notification */}
                <label htmlFor="s-email" className="form-notification" />
              </form>
            </div>
          </div>{" "}
          {/* END FOOTER NEWSLETTER FORM */}
        </div>{" "}
        {/* END FOOTER CONTENT */}
        <hr />
        {/* BOTTOM FOOTER */}
        <div className="bottom-footer">
          <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">
            {/* FOOTER COPYRIGHT */}
            <div className="col">
              <div className="footer-copyright">
                <p>© 2010 - 2021 OLMO. All Rights Reserved</p>
              </div>
            </div>
            {/* BOTTOM FOOTER LINKS */}
            <div className="col">
              <ul className="bottom-footer-list text-secondary text-end">
                <li className="first-li">
                  <p>
                    <a href="demo-13.html#">Facebook</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="demo-13.html#">Twitter</a>
                  </p>
                </li>
                <li>
                  <p>
                    <a href="demo-13.html#">LinkedIn</a>
                  </p>
                </li>
                <li className="last-li">
                  <p>
                    <a href="demo-13.html#">Dribbble</a>
                  </p>
                </li>
              </ul>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* BOTTOM FOOTER */}
      </div>
    </footer>
  );
};

export default PageFooter;
