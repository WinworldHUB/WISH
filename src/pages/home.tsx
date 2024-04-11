import { FC } from "react";
import PageLayout from "../lib/components/layout/page-layout";

const Home: FC = () => {
  return (
    <PageLayout>
      <section id="hero-13" className="bg-scroll hero-section division">
        <div className="container">
          {/* HERO TITLE */}
          <div className="row">
            <div className="col-md-9 col-lg-8">
              <div className="hero-13-title mb-40">
                <h2 className="h2-lg">
                  Convert your ideas into workable solutions
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            {/* HERO TEXT */}
            <div className="col-md-6 col-lg-5">
              <div className="hero-13-txt">
                <p className="p-title-sm">Fringilla risus, luctus mauris</p>
                <p className="p-title-sm">Nemo ipsam egestas volute turpis</p>
                <p className="p-title-sm">Mauris in cubilia rutrum</p>
                <p className="p-title-sm">Mullam a donec nihil impedit</p>
                <p className="p-title-sm">Feugiat primis a ligula</p>
                {/* Tools List */}
                <div className="tools-list ico-40 mt-50">
                  {/* Text */}
                  <h6 className="h6-xl">Technologies We Use:</h6>
                  {/* Icons */}
                  <span className="flaticon-html-5" />
                  <span className="flaticon-css-3" />
                  <span className="flaticon-wordpress-logo" />
                  <span className="flaticon-js" />
                  <span className="flaticon-diamond-1" />
                </div>
              </div>
            </div>{" "}
            {/* END HERO TEXT */}
            {/* HERO IMAGE */}
            <div className="col-md-6 col-lg-7">
              <div className="hero-13-img video-preview">
                {/* Play Icon */}
                <a
                  className="video-popup1"
                  href="https://www.youtube.com/embed/SZEflIVnhH8"
                >
                  <div className="video-btn video-btn-xl bg-violet-red ico-90">
                    <div className="video-block-wrapper">
                      <span className="flaticon-play-button" />
                    </div>
                  </div>
                </a>
                {/* Preview Image */}
                <img
                  className="img-fluid"
                  src="/assets/images/dashboard-04.png"
                  alt="hero-image"
                />
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
      <section id="features-1" className="wide-60 features-section division">
        <div className="container">
          {/* FEATURES-1 WRAPPER */}
          <div className="fbox-1-wrapper text-center">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
              {/* FEATURE BOX #1 */}
              <div className="col">
                <div className="fbox-1 mb-40 wow fadeInUp">
                  {/* Icon */}
                  <div className="fbox-ico-center ico-60">
                    <span className="flaticon-web-browser" />
                  </div>
                  {/* Text */}
                  <div className="fbox-txt-center">
                    {/* Title */}
                    <h5 className="h5-sm">Cross-Platform</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Porta semper lacus cursus feugiat and primis ultrice
                    </p>
                  </div>
                </div>
              </div>
              {/* FEATURE BOX #2 */}
              <div className="col">
                <div className="fbox-1 mb-40 wow fadeInUp">
                  {/* Icon */}
                  <div className="fbox-ico-center ico-60">
                    <span className="flaticon-filter-1" />
                  </div>
                  {/* Text */}
                  <div className="fbox-txt-center">
                    {/* Title */}
                    <h5 className="h5-sm">Powerful Options</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Porta semper lacus cursus feugiat and primis ultrice
                    </p>
                  </div>
                </div>
              </div>
              {/* FEATURE BOX #3 */}
              <div className="col">
                <div className="fbox-1 mb-40 wow fadeInUp">
                  {/* Icon */}
                  <div className="fbox-ico-center ico-60">
                    <span className="flaticon-arrow" />
                  </div>
                  {/* Text */}
                  <div className="fbox-txt-center">
                    {/* Title */}
                    <h5 className="h5-sm">Extremely Flexible</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Porta semper lacus cursus feugiat and primis ultrice
                    </p>
                  </div>
                </div>
              </div>
              {/* FEATURE BOX #4 */}
              <div className="col">
                <div className="fbox-1 mb-40 wow fadeInUp">
                  {/* Icon */}
                  <div className="fbox-ico-center ico-60">
                    <span className="flaticon-web-programming" />
                  </div>
                  {/* Text */}
                  <div className="fbox-txt-center">
                    {/* Title */}
                    <h5 className="h5-sm">Easy to Embed</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Porta semper lacus cursus feugiat and primis ultrice
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* END FEATURES-1 WRAPPER */}
        </div>{" "}
        {/* End container */}
      </section>
      <section
        id="content-2"
        className="content-2 bg-snow wide-60 content-section division"
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6">
              <div className="rel img-block left-column wow fadeInRight">
                <img
                  className="img-fluid"
                  src="/assets/images/img-08.png"
                  alt="video-preview"
                />
              </div>
            </div>
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6">
              <div className="txt-block right-column wow fadeInLeft">
                {/* Section ID */}
                <span className="section-id txt-upcase">
                  Extremely Flexible
                </span>
                {/* Title */}
                <h2 className="h2-xs">Work smarter with powerful features</h2>
                {/* List */}
                <ul className="simple-list">
                  <li className="list-item">
                    <p className="p-lg">
                      Fringilla risus, luctus mauris orci auctor euismod iaculis
                      luctus magna purus pretium ligula purus undo quaerat
                      tempor sapien rutrum mauris quaerat ultrice
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      Quaerat sodales sapien euismod purus blandit
                    </p>
                  </li>
                  <li className="list-item">
                    <p className="p-lg">
                      Nemo ipsam egestas volute turpis dolores undo ultrice
                      aliquam quaerat at sodales sapien purus
                    </p>
                  </li>
                </ul>
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
      <section id="features-8" className="wide-60 features-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="section-title title-01 mb-70">
                {/* Title */}
                <h2 className="h2-md">Get Ready to Be Surprised</h2>
                {/* Text */}
                <p className="p-xl">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                  primis a libero tempus, blandit and cursus varius and magnis
                  sapien
                </p>
              </div>
            </div>
          </div>
          {/* FEATURES-8 WRAPPER */}
          <div className="fbox-8-wrapper text-center">
            <div className="row row-cols-1 row-cols-md-3">
              {/* FEATURE BOX #1 */}
              <div className="col">
                <div className="fbox-8 mb-40 wow fadeInUp">
                  {/* Image */}
                  <div className="fbox-img bg-whitesmoke-gradient">
                    <img
                      className="img-fluid"
                      src="/assets/images/img-21.png"
                      alt="feature-icon"
                    />
                  </div>
                  {/* Title */}
                  <h5 className="h5-md">Friendly Interface</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Feugiat primis ultrice semper lacus cursus feugiat undo
                    primis ultrice a ligula an auctor tempus magnis
                  </p>
                </div>
              </div>
              {/* FEATURE BOX #2 */}
              <div className="col">
                <div className="fbox-8 mb-40 wow fadeInUp">
                  {/* Image */}
                  <div className="fbox-img bg-whitesmoke-gradient">
                    <img
                      className="img-fluid"
                      src="/assets/images/img-22.png"
                      alt="feature-icon"
                    />
                  </div>
                  {/* Title */}
                  <h5 className="h5-md">Extremely Flexible</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Feugiat primis ultrice semper lacus cursus feugiat undo
                    primis ultrice a ligula an auctor tempus magnis
                  </p>
                </div>
              </div>
              {/* FEATURE BOX #3 */}
              <div className="col">
                <div className="fbox-8 mb-40 wow fadeInUp">
                  {/* Image */}
                  <div className="fbox-img bg-whitesmoke-gradient">
                    <img
                      className="img-fluid"
                      src="/assets/images/img-24.png"
                      alt="feature-icon"
                    />
                  </div>
                  {/* Title */}
                  <h5 className="h5-md">Extensions &amp; Addons</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Feugiat primis ultrice semper lacus cursus feugiat undo
                    primis ultrice a ligula an auctor tempus magnis
                  </p>
                </div>
              </div>
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* END FEATURES-8 WRAPPER */}
        </div>{" "}
        {/* End container */}
      </section>
      <hr className="divider" />
      <section id="statistic-2" className="wide-100 statistic-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-lg-6">
              <div className="txt-block right-column wow fadeInLeft">
                <h3 className="h3-xs">
                  More than 65,000 users around the world are already using OLMO
                  actively
                </h3>
              </div>
            </div>
            {/* STATISTIC BLOCK #1 */}
            <div className="col-sm-5 col-md-4 col-lg-3 offset-sm-1 offset-md-2 offset-lg-1">
              <div className="statistic-block wow fadeInUp">
                {/* Text */}
                <h2 className="h2-title-xs statistic-number">
                  <span className="count-element">65</span>K
                </h2>
                <p className="p-lg mt-20">
                  Active downloads <br /> from the community
                </p>
              </div>
            </div>
            {/* STATISTIC BLOCK #2 */}
            <div className="col-sm-5 col-md-4 col-lg-2">
              <div className="statistic-block wow fadeInUp">
                {/* Text */}
                <h2 className="h2-title-xs statistic-number">
                  <span className="count-element">4</span>.
                  <span className="count-element">86</span>
                </h2>
                {/* Rating */}
                <div className="txt-block-rating ico-15 yellow-color">
                  <span className="flaticon-star-1" />
                  <span className="flaticon-star-1" />
                  <span className="flaticon-star-1" />
                  <span className="flaticon-star-1" />
                  <span className="flaticon-star-half-empty" />
                </div>
                <p className="p-lg txt-400">8,376 Rating</p>
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
      <hr className="divider" />
      <section
        id="content-6"
        className="content-6 wide-60 content-section division"
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-md-6 col-lg-5">
              <div className="txt-block left-column wow fadeInRight">
                {/* TEXT BOX */}
                <div className="txt-box mb-30">
                  {/* Title */}
                  <h5 className="h5-lg">Creative and Practical</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Quaerat sodales sapien euismod blandit undo vitae ipsum
                    primis and cubilia a laoreet augue and luctus magna dolor
                    egestas luctus sapien vitae nemo egestas volute and turpis
                  </p>
                </div>
                {/* TEXT BOX */}
                <div className="txt-box">
                  {/* Title */}
                  <h5 className="h5-lg">Multiplatform. Always Synced</h5>
                  {/* List */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        Fringilla risus, luctus mauris an auctor purus euismod
                        iaculis luctus magna purus pretium ligula and quaerat
                        luctus magna
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Nemo ipsam egestas volute turpis dolores undo ultrice
                        aliquam quaerat sodales
                      </p>
                    </li>
                  </ul>
                </div>{" "}
                {/* END TEXT BOX */}
              </div>
            </div>
            {/* IMAGE BLOCK */}
            <div className="col-md-6 col-lg-7">
              <div className="img-block right-column wow fadeInLeft">
                <img
                  className="img-fluid"
                  src="/assets/images//img-19.png"
                  alt="content-image"
                />
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
      <section
        id="content-9"
        className="content-9 bg-04 pt-100 content-section division"
      >
        <div className="container white-color">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="section-title title-02 mb-60">
                {/* Section ID */}
                <span className="section-id txt-upcase">
                  Handling With Ease
                </span>
                {/* Title */}
                <h2 className="h2-xs">
                  Discover powerful features to boost your productivity
                </h2>
              </div>
            </div>
          </div>
          {/* IMAGE BLOCK */}
          <div className="row">
            <div className="col">
              <div className="content-9-img video-preview wow fadeInUp">
                {/* Play Icon */}
                <a
                  className="video-popup1"
                  href="https://www.youtube.com/embed/SZEflIVnhH8"
                >
                  <div className="video-btn video-btn-xl bg-violet-red ico-90">
                    <div className="video-block-wrapper">
                      <span className="flaticon-play-button" />
                    </div>
                  </div>
                </a>
                {/* Preview Image */}
                <img
                  className="img-fluid"
                  src="/assets/images//dashboard-07.png"
                  alt="video-preview"
                />
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End container */}
      </section>
      <section id="features-4" className="wide-60 features-section division">
        <div className="container">
          {/* FEATURES-4 WRAPPER */}
          <div className="fbox-4-wrapper fbox-4-wide">
            <div className="row row-cols-1 row-cols-md-2">
              {/* FEATURE BOX #1 */}
              <div className="col">
                <div className="fbox-4 pr-25 mb-40 wow fadeInUp">
                  {/* Icon */}
                  <div className="fbox-ico">
                    <div className="fbox-ico-center ico-65">
                      <span className="flaticon-dashboard" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="fbox-txt">
                    {/* Title */}
                    <h5 className="h5-md">Friendly Interface</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Porta semper lacus cursus feugiat primis ultrice ligula
                      risus auctor tempus feugiat impedit undo auctor felis
                      augue mauris aoreet tempor
                    </p>
                  </div>
                </div>
              </div>
              {/* FEATURE BOX #2 */}
              <div className="col">
                <div className="fbox-4 pl-25 mb-40 wow fadeInUp">
                  {/* Icon */}
                  <div className="fbox-ico">
                    <div className="fbox-ico-center ico-65">
                      <span className="flaticon-pantone" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="fbox-txt">
                    {/* Title */}
                    <h5 className="h5-md">Powerful Options</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Porta semper lacus cursus feugiat primis ultrice ligula
                      risus auctor tempus feugiat impedit undo auctor felis
                      augue mauris aoreet tempor
                    </p>
                  </div>
                </div>
              </div>
              {/* FEATURE BOX #3 */}
              <div className="col">
                <div className="fbox-4 pr-25 mb-40 wow fadeInUp">
                  {/* Icon */}
                  <div className="fbox-ico">
                    <div className="fbox-ico-center ico-65">
                      <span className="flaticon-folder-3" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="fbox-txt">
                    {/* Title */}
                    <h5 className="h5-md">File Manager</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Porta semper lacus cursus feugiat primis ultrice ligula
                      risus auctor tempus feugiat impedit undo auctor felis
                      augue mauris aoreet tempor
                    </p>
                  </div>
                </div>
              </div>
              {/* FEATURE BOX #4 */}
              <div className="col">
                <div className="fbox-4 pl-25 mb-40 wow fadeInUp">
                  {/* Icon */}
                  <div className="fbox-ico">
                    <div className="fbox-ico-center ico-65">
                      <span className="flaticon-resize" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="fbox-txt">
                    {/* Title */}
                    <h5 className="h5-md">Convert Media Files</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Porta semper lacus cursus feugiat primis ultrice ligula
                      risus auctor tempus feugiat impedit undo auctor felis
                      augue mauris aoreet tempor
                    </p>
                  </div>
                </div>
              </div>
              {/* FEATURE BOX #5 */}
              <div className="col">
                <div className="fbox-4 pr-25 mb-40 wow fadeInUp">
                  {/* Icon */}
                  <div className="fbox-ico">
                    <div className="fbox-ico-center ico-65">
                      <span className="flaticon-share" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="fbox-txt">
                    {/* Title */}
                    <h5 className="h5-md">Files Sharing</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Porta semper lacus cursus feugiat primis ultrice ligula
                      risus auctor tempus feugiat impedit undo auctor felis
                      augue mauris aoreet tempor
                    </p>
                  </div>
                </div>
              </div>
              {/* FEATURE BOX #6 */}
              <div className="col">
                <div className="fbox-4 pl-25 mb-40 wow fadeInUp">
                  {/* Icon */}
                  <div className="fbox-ico">
                    <div className="fbox-ico-center ico-65">
                      <span className="flaticon-layers" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="fbox-txt">
                    {/* Title */}
                    <h5 className="h5-md">Extensions &amp; Addons</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Porta semper lacus cursus feugiat primis ultrice ligula
                      risus auctor tempus feugiat impedit undo auctor felis
                      augue mauris aoreet tempor
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* END FEATURES-4 WRAPPER */}
        </div>{" "}
        {/* End container */}
      </section>
      <section
        id="content-5"
        className="content-5 ws-wrapper content-section division"
      >
        <div className="container">
          <div className="content-5-wrapper bg-whitesmoke">
            <div className="row d-flex align-items-center">
              {/* TEXT BLOCK */}
              <div className="col-md-7 col-lg-6">
                <div className="txt-block left-column wow fadeInRight">
                  {/* Section ID */}
                  <span className="section-id txt-upcase">
                    Fast Performance
                  </span>
                  {/* Title */}
                  <h2 className="h2-xs">More productivity with less effort</h2>
                  {/* List */}
                  <ul className="simple-list">
                    <li className="list-item">
                      <p className="p-lg">
                        Fringilla risus, luctus mauris auctor euismod an iaculis
                        luctus magna purus pretium ligula purus and quaerat
                        sapien rutrum mauris auctor
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Quaerat sodales sapien euismod purus blandit
                      </p>
                    </li>
                    <li className="list-item">
                      <p className="p-lg">
                        Nemo ipsam egestas volute turpis dolores ligula and
                        aliquam quaerat at sodales sapien purus
                      </p>
                    </li>
                  </ul>
                </div>
              </div>{" "}
              {/* END TEXT BLOCK */}
              {/* IMAGE BLOCK */}
              <div className="col-md-5 col-lg-6">
                <div className="img-block right-column wow fadeInLeft">
                  <img
                    className="img-fluid"
                    src="/assets/images//img-10.png"
                    alt="content-image"
                  />
                </div>
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
      <section
        id="content-3"
        className="content-3 wide-60 content-section division"
      >
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="section-title title-01 mb-70">
                {/* Title */}
                <h2 className="h2-md">Beautiful Creative Solutions</h2>
                {/* Text */}
                <p className="p-xl">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                  primis a libero tempus, blandit and cursus varius and magnis
                  sapien
                </p>
              </div>
            </div>
          </div>
          {/* TOP ROW */}
          <div className="top-row pb-50">
            <div className="row d-flex align-items-center">
              {/* IMAGE BLOCK */}
              <div className="col-md-5 col-lg-6">
                <div className="img-block left-column wow fadeInRight">
                  <img
                    className="img-fluid"
                    src="/assets/images//img-06.png"
                    alt="content-image"
                  />
                </div>
              </div>
              {/* TEXT BLOCK */}
              <div className="col-md-7 col-lg-6">
                <div className="txt-block right-column wow fadeInLeft">
                  {/* Section ID */}
                  <span className="section-id txt-upcase">
                    Easy Integration
                  </span>
                  {/* Title */}
                  <h2 className="h2-xs">
                    Intuitive features, powerful results
                  </h2>
                  {/* Text */}
                  <p className="p-lg">
                    Quaerat sodales sapien euismod blandit purus a purus ipsum
                    primis in cubilia laoreet augue luctus magna dolor luctus
                    and egestas sapien egestas vitae nemo volute
                  </p>
                  {/* Text */}
                  <p className="p-lg">
                    Quaerat sodales sapien euismod blandit at vitae ipsum primis
                    undo and cubilia laoreet augue and luctus magna dolor luctus
                    at egestas sapien vitae nemo egestas volute and turpis
                    dolores aliquam quaerat sodales a sapien
                  </p>
                </div>
              </div>{" "}
              {/* END TEXT BLOCK */}
            </div>
          </div>{" "}
          {/* END TOP ROW */}
          {/* BOTTOM ROW */}
          <div className="bottom-row">
            <div className="row d-flex align-items-center">
              {/* TEXT BLOCK */}
              <div className="col-md-7 col-lg-6 order-last order-md-2">
                <div className="txt-block left-column wow fadeInRight">
                  {/* TEXT BOX */}
                  <div className="txt-box mb-20">
                    {/* Title */}
                    <h5 className="h5-lg">Advanced Performance Made Easy</h5>
                    {/* Text */}
                    <p className="p-lg">
                      Quaerat sodales sapien euismod blandit at vitae ipsum
                      primis undo and cubilia laoreet augue and luctus magna
                      dolor luctus at egestas sapien vitae nemo egestas volute
                      and turpis dolores aliquam quaerat sodales a sapien
                    </p>
                  </div>
                  {/* TEXT BOX */}
                  <div className="txt-box">
                    {/* Title */}
                    <h5 className="h5-lg">Creative Alternative Solutions</h5>
                    {/* List */}
                    <ul className="simple-list">
                      <li className="list-item">
                        <p className="p-lg">
                          Fringilla risus, luctus mauris auctor euismod an
                          iaculis luctus magna purus pretium ligula purus and
                          quaerat
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg">
                          Nemo ipsam egestas volute turpis dolores undo ultrice
                          aliquam quaerat at sodales sapien purus
                        </p>
                      </li>
                    </ul>
                  </div>{" "}
                  {/* END TEXT BOX */}
                </div>
              </div>{" "}
              {/* END TEXT BLOCK */}
              {/* IMAGE BLOCK */}
              <div className="col-md-5 col-lg-6 order-first order-md-2">
                <div className="img-block right-column wow fadeInLeft">
                  <img
                    className="img-fluid"
                    src="/assets/images//img-09.png"
                    alt="content-image"
                  />
                </div>
              </div>
            </div>
          </div>{" "}
          {/* END BOTTOM ROW */}
        </div>{" "}
        {/* End container */}
      </section>
      <section id="projects-2" className="pb-60 projects-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="section-title title-01 mb-70">
                {/* Title */}
                <h2 className="h2-md">We Care About The Details</h2>
                {/* Text */}
                <p className="p-xl">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                  primis a libero tempus, blandit and cursus varius and magnis
                  sapien
                </p>
              </div>
            </div>
          </div>
          {/* PROJECTS-2 WRAPPER */}
          <div className="row">
            <div className="col gallery-items-list">
              <div className="masonry-wrap grid-loaded">
                {/* PROJECT #1 */}
                <div className="project-details masonry-image">
                  {/* Image */}
                  <div className="project-preview rel">
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="/assets/images//projects/project-05.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="project-txt">
                    {/* Link */}
                    <h5 className="h5-md">
                      <a href="project-details.html">
                        A ligula risus auctor and justo tempus blandit
                      </a>
                    </h5>
                    {/* Text */}
                    <p className="p-md grey-color">Graphic Design</p>
                  </div>
                </div>{" "}
                {/* END PROJECT #1 */}
                {/* PROJECT #2 */}
                <div className="project-details masonry-image">
                  {/* Image */}
                  <div className="project-preview rel">
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="/assets/images//projects/project-02.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="project-txt">
                    {/* Link */}
                    <h5 className="h5-md">
                      <a href="project-details.html">
                        Integer urna turpis donec and ipsum porta justo
                      </a>
                    </h5>
                    {/* Text */}
                    <p className="p-md grey-color">UI, Interaction Design</p>
                  </div>
                </div>{" "}
                {/* END PROJECT #2 */}
                {/* PROJECT #3 */}
                <div className="project-details masonry-image">
                  {/* Image */}
                  <div className="project-preview rel">
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="/assets/images//projects/project-04.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="project-txt">
                    {/* Link */}
                    <h5 className="h5-md">
                      <a href="project-details.html">
                        Donec sapien augue undo integer turpis cursus
                      </a>
                    </h5>
                    {/* Text */}
                    <p className="p-md grey-color">UX, Illustration</p>
                  </div>
                </div>{" "}
                {/* END PROJECT #3 */}
                {/* PROJECT #4 */}
                <div className="project-details masonry-image">
                  {/* Image */}
                  <div className="project-preview rel">
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="/assets/images//projects/project-01.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="project-txt">
                    {/* Link */}
                    <h5 className="h5-md">
                      <a href="project-details.html">
                        Laoreet undo magna at suscipit undo magna
                      </a>
                    </h5>
                    {/* Text */}
                    <p className="p-md grey-color">Web Design</p>
                  </div>
                </div>{" "}
                {/* END PROJECT #4 */}
                {/* PROJECT #5 */}
                <div className="project-details masonry-image">
                  {/* Image */}
                  <div className="project-preview rel">
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="/assets/images//projects/project-03.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="project-txt">
                    {/* Link */}
                    <h5 className="h5-md">
                      <a href="project-details.html">
                        Donec sapien an augue integer turpis cursus
                      </a>
                    </h5>
                    {/* Text */}
                    <p className="p-md grey-color">Web Design</p>
                  </div>
                </div>{" "}
                {/* END PROJECT #5 */}
                {/* PROJECT #6 */}
                <div className="project-details masonry-image">
                  {/* Image */}
                  <div className="project-preview rel">
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="/assets/images//projects/project-06.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                    </div>
                  </div>
                  {/* Text */}
                  <div className="project-txt">
                    {/* Link */}
                    <h5 className="h5-md">
                      <a href="project-details.html">
                        Donec sapien an augue integer turpis cursus
                      </a>
                    </h5>
                    {/* Text */}
                    <p className="p-md grey-color">UI, Interaction Design</p>
                  </div>
                </div>{" "}
                {/* END PROJECT #6 */}
              </div>
            </div>
          </div>{" "}
          {/* END PROJECTS-1 WRAPPER */}
          {/* MORE PROJECTS */}
          <div className="row">
            <div className="col">
              <div className="more-btn mt-20">
                <a
                  href="projects.html"
                  className="btn btn-violet-red tra-grey-hover"
                >
                  View More Projects
                </a>
              </div>
            </div>
          </div>{" "}
          {/* END DOWNLOAD BUTTON */}
        </div>{" "}
        {/* End container */}
      </section>
      <div
        id="statistic-1"
        className="bg-01 pt-70 pb-70 statistic-section division"
      >
        <div className="container white-color">
          {/* STATISTIC-1 WRAPPER */}
          <div className="statistic-1-wrapper">
            <div className="row justify-content-md-center row-cols-1 row-cols-md-3">
              {/* STATISTIC BLOCK #1 */}
              <div id="sb-1-1" className="col">
                <div className="statistic-block wow fadeInUp">
                  {/* Digit */}
                  <h2 className="h2-xl statistic-number">
                    <span className="count-element">28</span>%
                  </h2>
                  {/* Text */}
                  <h5 className="h5-lg">Faster Access</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Enim nullam tempor at sapien gravida donec a blandit integer
                    posuere porta justo velna
                  </p>
                </div>
              </div>
              {/* STATISTIC BLOCK #2 */}
              <div id="sb-1-2" className="col">
                <div className="statistic-block wow fadeInUp">
                  {/* Digit */}
                  <h2 className="h2-xl statistic-number">
                    <span className="count-element">54</span>%
                  </h2>
                  {/* Text */}
                  <h5 className="h5-lg">Productivity</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Enim nullam tempor at sapien gravida donec a blandit integer
                    posuere porta justo velna
                  </p>
                </div>
              </div>
              {/* STATISTIC BLOCK #3 */}
              <div id="sb-1-3" className="col">
                <div className="statistic-block wow fadeInUp">
                  {/* Digit */}
                  <h2 className="h2-xl statistic-number">
                    <span className="count-element">36</span>%
                  </h2>
                  {/* Text */}
                  <h5 className="h5-lg">Secure Access</h5>
                  {/* Text */}
                  <p className="p-lg">
                    Enim nullam tempor at sapien gravida donec a blandit integer
                    posuere porta justo velna
                  </p>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* END STATISTIC-1 WRAPPER */}
        </div>{" "}
        {/* End container */}
      </div>
      <section id="reviews-1" className="wide-100 reviews-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="section-title title-01 mb-70">
                {/* Title */}
                <h2 className="h2-md">Stories From Our Customers</h2>
                {/* Text */}
                <p className="p-xl">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                  primis a libero tempus, blandit and cursus varius and magnis
                  sapien
                </p>
              </div>
            </div>
          </div>
          {/* TESTIMONIALS CONTENT */}
          <div className="row">
            <div className="col">
              <div className="owl-carousel owl-theme reviews-1-wrapper">
                {/* TESTIMONIAL #1 */}
                <div className="review-1">
                  {/* Quote Icon */}
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <p className="p-lg">
                      Etiam sapien sagittis congue augue massa varius egestas
                      ultrice varius magna a tempus aliquet undo cursus suscipit
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/assets/images//review-author-1.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">Scott Boxer</h6>
                        <p className="p-md">@scott_boxer</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Testimonial Author */}
                  </div>{" "}
                  {/* End Text */}
                </div>{" "}
                {/* END TESTIMONIAL #1 */}
                {/* TESTIMONIAL #2 */}
                <div className="review-1">
                  {/* Quote Icon */}
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <p className="p-lg">
                      At sagittis congue augue and egestas magna ipsum vitae a
                      purus ipsum primis in cubilia laoreet augue egestas luctus
                      and donec diam ultrice ligula magna suscipit lectus gestas
                      augue into cubilia
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/assets/images//review-author-2.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">Joel Peterson</h6>
                        <p className="p-md">Internet Surfer</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Testimonial Author */}
                  </div>{" "}
                  {/* End Text */}
                </div>{" "}
                {/* END TESTIMONIAL #2 */}
                {/* TESTIMONIAL #3 */}
                <div className="review-1">
                  {/* Quote Icon */}
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <p className="p-lg">
                      Mauris donec magnis sapien etiam sapien congue augue
                      egestas et ultrice vitae purus diam integer a congue magna
                      ligula undo egestas magna at suscipit feugiat primis
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/assets/images//review-author-3.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">Marisol19</h6>
                        <p className="p-md">@marisol19</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Testimonial Author */}
                  </div>{" "}
                  {/* End Text */}
                </div>{" "}
                {/* END TESTIMONIAL #3 */}
                {/* TESTIMONIAL #4 */}
                <div className="review-1">
                  {/* Quote Icon */}
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <p className="p-lg">
                      Mauris donec a magnis sapien etiam sapien congue augue
                      pretium ligula lectus aenean a magna undo mauris lectus
                      laoreet tempor egestas
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/assets/images//review-author-4.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">Leslie D.</h6>
                        <p className="p-md">Web Developer</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Testimonial Author */}
                  </div>{" "}
                  {/* End Text */}
                </div>{" "}
                {/* END TESTIMONIAL #4 */}
                {/* TESTIMONIAL #5 */}
                <div className="review-1">
                  {/* Quote Icon */}
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <p className="p-lg">
                      An augue cubilia laoreet magna suscipit egestas and ipsum
                      a lectus purus ipsum primis and augue ultrice ligula and
                      egestas a suscipit lectus gestas undo auctor tempus
                      feugiat impedit
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/assets/images//review-author-5.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">Jennifer Harper</h6>
                        <p className="p-md">App Developer</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Testimonial Author */}
                  </div>{" "}
                  {/* End Text */}
                </div>{" "}
                {/* END TESTIMONIAL #5 */}
                {/* TESTIMONIAL #6 */}
                <div className="review-1">
                  {/* Quote Icon */}
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <p className="p-lg">
                      An augue cubilia laoreet undo magna ipsum semper suscipit
                      egestas magna ipsum ligula a vitae purus and ipsum primis
                      cubilia magna suscipit
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/assets/images//review-author-6.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">Jonathan Barnes</h6>
                        <p className="p-md">jQuery Programmer</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Testimonial Author */}
                  </div>{" "}
                  {/* End Text */}
                </div>{" "}
                {/* END TESTIMONIAL #6 */}
                {/* TESTIMONIAL #7 */}
                <div className="review-1">
                  {/* Quote Icon */}
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <p className="p-lg">
                      Augue egestas diam tempus volutpat egestas augue in
                      cubilia laoreet magna suscipit luctus dolor and blandit
                      vitae purus diam tempus an aliquet porta rutrum gestas
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/assets/images//review-author-7.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">Mike Harris</h6>
                        <p className="p-md">Graphic Designer</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Testimonial Author */}
                  </div>{" "}
                  {/* End Text */}
                </div>{" "}
                {/* END TESTIMONIAL #7 */}
                {/* TESTIMONIAL #8 */}
                <div className="review-1">
                  {/* Quote Icon */}
                  <div className="review-1-ico ico-25">
                    <span className="flaticon-left-quote" />
                  </div>
                  {/* Text */}
                  <div className="review-1-txt">
                    {/* Text */}
                    <p className="p-lg">
                      Augue at vitae purus tempus egestas volutpat augue undo
                      cubilia laoreet magna suscipit luctus dolor blandit at
                      purus tempus feugiat impedit
                    </p>
                    {/* Testimonial Author */}
                    <div className="author-data clearfix">
                      {/* Testimonial Avatar */}
                      <div className="review-avatar">
                        <img
                          src="/assets/images//review-author-8.jpg"
                          alt="review-avatar"
                        />
                      </div>
                      {/* Testimonial Author */}
                      <div className="review-author">
                        <h6 className="h6-xl">Evelyn Martinez</h6>
                        <p className="p-md">WordPress Consultant</p>
                        {/* Rating */}
                        <div className="review-rating ico-15 yellow-color">
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-1" />
                          <span className="flaticon-star-half-empty" />
                        </div>
                      </div>
                    </div>{" "}
                    {/* End Testimonial Author */}
                  </div>{" "}
                  {/* End Text */}
                </div>{" "}
                {/* END TESTIMONIAL #8 */}
              </div>
            </div>
          </div>{" "}
          {/* END TESTIMONIALS CONTENT */}
        </div>{" "}
        {/* End container */}
      </section>
      <div id="brands-2" className="pb-70 brands-section division">
        <div className="container">
          {/* BRANDS TITLE */}
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="brands-title text-center">
                <p className="p-xl">
                  This guys are using OLMO and they are more than happier ever
                </p>
              </div>
            </div>
          </div>
          {/* BRANDS-2 WRAPPER */}
          <div className="brands-2-wrapper">
            <div className="row justify-content-md-center row-cols-2 row-cols-sm-3 row-cols-md-5">
              {/* BRAND LOGO IMAGE */}
              <div className="col">
                <div className="brand-logo">
                  <a href="demo-13.html#">
                    <img
                      className="img-fluid"
                      src="/assets/images//brand-1.png"
                      alt="brand-logo"
                    />
                  </a>
                </div>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="col">
                <div className="brand-logo">
                  <a href="demo-13.html#">
                    <img
                      className="img-fluid"
                      src="/assets/images//brand-2.png"
                      alt="brand-logo"
                    />
                  </a>
                </div>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="col">
                <div className="brand-logo">
                  <a href="demo-13.html#">
                    <img
                      className="img-fluid"
                      src="/assets/images//brand-3.png"
                      alt="brand-logo"
                    />
                  </a>
                </div>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="col">
                <div className="brand-logo">
                  <a href="demo-13.html#">
                    <img
                      className="img-fluid"
                      src="/assets/images//brand-4.png"
                      alt="brand-logo"
                    />
                  </a>
                </div>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="col">
                <div className="brand-logo">
                  <a href="demo-13.html#">
                    <img
                      className="img-fluid"
                      src="/assets/images//brand-5.png"
                      alt="brand-logo"
                    />
                  </a>
                </div>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="col">
                <div className="brand-logo">
                  <a href="demo-13.html#">
                    <img
                      className="img-fluid"
                      src="/assets/images//brand-8.png"
                      alt="brand-logo"
                    />
                  </a>
                </div>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="col">
                <div className="brand-logo">
                  <a href="demo-13.html#">
                    <img
                      className="img-fluid"
                      src="/assets/images//brand-7.png"
                      alt="brand-logo"
                    />
                  </a>
                </div>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="col">
                <div className="brand-logo">
                  <a href="demo-13.html#">
                    <img
                      className="img-fluid"
                      src="/assets/images//brand-5.png"
                      alt="brand-logo"
                    />
                  </a>
                </div>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="col">
                <div className="brand-logo">
                  <a href="demo-13.html#">
                    <img
                      className="img-fluid"
                      src="/assets/images//brand-8.png"
                      alt="brand-logo"
                    />
                  </a>
                </div>
              </div>
              {/* BRAND LOGO IMAGE */}
              <div className="col">
                <div className="brand-logo">
                  <a href="demo-13.html#">
                    <img
                      className="img-fluid"
                      src="/assets/images//brand-2.png"
                      alt="brand-logo"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>{" "}
          {/* END BRANDS-2 WRAPPER */}
        </div>{" "}
        {/* End container */}
      </div>
      <section
        id="pricing-3"
        className="bg-lightgrey wide-60 pricing-section division"
      >
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="section-title title-01 mb-80">
                {/* Title */}
                <h2 className="h2-md">Simple And Flexible Pricing</h2>
                {/* Text */}
                <p className="p-xl">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                  primis a libero tempus, blandit and cursus varius and magnis
                  sapien
                </p>
              </div>
            </div>
          </div>
          {/* PRICING TABLES */}
          <div className="pricing-3-row pc-20">
            <div className="row row-cols-1 row-cols-md-3">
              {/* BASIC PLAN */}
              <div className="col">
                <div className="pricing-3-table bg-white mb-40 wow fadeInUp">
                  {/* Plan Price  */}
                  <div className="pricing-plan">
                    <h6 className="h6-xl">Basic</h6>
                    <sup className="dark-color">$</sup>
                    <span className="price dark-color">11</span>
                    <sup className="coins dark-color">99</sup>
                    <p className="p-lg">Monthly Payment</p>
                  </div>
                  {/* Plan Features  */}
                  <ul className="features">
                    <li>
                      <p className="p-md">
                        <span>10</span> Projects
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        <span>15</span> mySQL Database
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        <span>30 GB</span> of Storage
                      </p>
                    </li>
                    <li className="disabled-option">
                      <p className="p-md">No Ads. No Trackers</p>
                    </li>
                    <li className="disabled-option">
                      <p className="p-md">Daily Data Backup</p>
                    </li>
                    <li className="disabled-option">
                      <p className="p-md">Extra Features</p>
                    </li>
                    <li>
                      <p className="p-md">
                        <span>12/5</span> Free Support
                      </p>
                    </li>
                  </ul>
                  {/* Pricing Plan Button */}
                  <a
                    href="demo-13.html#"
                    className="btn btn-tra-grey tra-violet-red-hover"
                  >
                    Get Started
                  </a>
                </div>
              </div>{" "}
              {/* END BASIC PLAN */}
              {/* ADVANCED PLAN */}
              <div className="col">
                <div className="pricing-3-table bg-white rel mb-40 wow fadeInUp">
                  {/* Hightlight Badge */}
                  <div className="badge-wrapper">
                    <div className="highlight-badge bg-violet-red white-color">
                      <h6 className="h6-md">Most Popular</h6>
                    </div>
                  </div>
                  {/* Plan Price  */}
                  <div className="pricing-plan">
                    <h6 className="h6-xl">Advanced</h6>
                    <sup className="dark-color">$</sup>
                    <span className="price dark-color">24</span>
                    <sup className="coins dark-color">99</sup>
                    <p className="p-lg">Monthly Payment</p>
                  </div>
                  {/* Plan Features  */}
                  <ul className="features">
                    <li>
                      <p className="p-md">
                        <span>25</span> Projects
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        <span>40</span> mySQL Database
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        <span>100 GB</span> of Storage
                      </p>
                    </li>
                    <li>
                      <p className="p-md">No Ads. No Trackers</p>
                    </li>
                    <li>
                      <p className="p-md">Daily Data Backup</p>
                    </li>
                    <li className="disabled-option">
                      <p className="p-md">Extra Features</p>
                    </li>
                    <li>
                      <p className="p-md">
                        <span>24/7</span> Free Support
                      </p>
                    </li>
                  </ul>
                  {/* Pricing Plan Button */}
                  <a
                    href="demo-13.html#"
                    className="btn btn-violet-red tra-grey-hover"
                  >
                    Get Started
                  </a>
                </div>
              </div>{" "}
              {/* END ADVANCED PLAN */}
              {/* PREMIUM PLAN */}
              <div className="col">
                <div className="pricing-3-table bg-white mb-40 wow fadeInUp">
                  {/* Plan Price  */}
                  <div className="pricing-plan">
                    <h6 className="h6-xl">Premium</h6>
                    <sup className="dark-color">$</sup>
                    <span className="price dark-color">89</span>
                    <sup className="coins dark-color">99</sup>
                    <p className="p-lg">Monthly Payment</p>
                  </div>
                  {/* Plan Features  */}
                  <ul className="features">
                    <li>
                      <p className="p-md">
                        <span>50</span> Projects
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        <span>30</span> mySQL Database
                      </p>
                    </li>
                    <li>
                      <p className="p-md">
                        <span>500 GB</span> of Storage
                      </p>
                    </li>
                    <li>
                      <p className="p-md">No Ads. No Trackers</p>
                    </li>
                    <li>
                      <p className="p-md">Daily Data Backup</p>
                    </li>
                    <li>
                      <p className="p-md">Extra Features</p>
                    </li>
                    <li>
                      <p className="p-md">
                        <span>VIP</span> Support
                      </p>
                    </li>
                  </ul>
                  {/* Pricing Plan Button */}
                  <a
                    href="demo-13.html#"
                    className="btn btn-tra-grey tra-violet-red-hover"
                  >
                    Get Started
                  </a>
                </div>
              </div>{" "}
              {/* END PREMIUM PLAN */}
            </div>
          </div>{" "}
          {/* END PRICING TABLES */}
          {/* PRICING NOTICE TEXT */}
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="pricing-notice text-center mb-40">
                <p>
                  The above prices do not include applicable taxes based on your
                  billing address.The final price will be displayed on the
                  checkout page, before the payment is completed
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End container */}
      </section>
      <section id="faqs-2" className="wide-60 faqs-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="section-title title-02 mb-75">
                {/* Section ID */}
                <span className="section-id txt-upcase">
                  Frequently Asked Questions
                </span>
                {/* Title */}
                <h2 className="h2-xs">
                  Everything you need to know before getting started
                </h2>
              </div>
            </div>
          </div>
          {/* FAQs-2 QUESTIONS */}
          <div className="faqs-2-questions">
            <div className="row row-cols-1 row-cols-lg-2">
              {/* QUESTIONS HOLDER */}
              <div className="col">
                <div className="questions-holder pr-15">
                  {/* QUESTION #1 */}
                  <div className="question wow fadeInUp">
                    {/* Question */}
                    <h5 className="h5-md">
                      Can I see OLMO in action before purchasing?
                    </h5>
                    {/* Answer */}
                    <p className="p-lg">
                      Etiam amet mauris suscipit in odio integer congue metus
                      vitae arcu mollis blandit ultrice ligula egestas and magna
                      suscipit lectus magna suscipit luctus blandit vitae
                    </p>
                  </div>
                  {/* QUESTION #2 */}
                  <div className="question wow fadeInUp">
                    {/* Question */}
                    <h5 className="h5-md">
                      What are the requirements for using OLMO?
                    </h5>
                    {/* Answer */}
                    <p className="p-lg">
                      An enim nullam tempor sapien gravida a donec ipsum enim an
                      porta justo integer at velna vitae auctor integer congue
                      undo magna at pretium purus pretium
                    </p>
                  </div>
                  {/* QUESTION #3 */}
                  <div className="question wow fadeInUp">
                    {/* Question */}
                    <h5 className="h5-md">
                      Can I use OLMO on different devices?
                    </h5>
                    {/* Answer */}
                    <ul className="simple-list">
                      <li className="list-item">
                        <p className="p-lg">
                          Fringilla risus, luctus mauris orci auctor purus
                          ligula euismod pretium purus pretium rutrum tempor
                          sapien
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg">
                          Nemo ipsam egestas volute turpis dolores ut aliquam
                          quaerat sodales sapien undo pretium a purus
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>{" "}
              {/* END QUESTIONS HOLDER */}
              {/* QUESTIONS HOLDER */}
              <div className="col">
                <div className="questions-holder pl-15">
                  {/* QUESTION #4 */}
                  <div className="question wow fadeInUp">
                    {/* Question */}
                    <h5 className="h5-md">Do you have a free trial?</h5>
                    {/* Answer */}
                    <p className="p-lg">
                      Cubilia laoreet augue egestas and luctus donec curabite
                      diam vitae dapibus libero and quisque gravida donec and
                      neque. Blandit justo aliquam molestie nunc sapien
                    </p>
                  </div>
                  {/* QUESTION #5 */}
                  <div className="question wow fadeInUp">
                    {/* Question */}
                    <h5 className="h5-md">How does OLMO handle my privacy?</h5>
                    {/* Answer */}
                    <p className="p-lg">
                      Etiam amet mauris suscipit sit amet in odio. Integer
                      congue leo metus. Vitae arcu mollis blandit ultrice ligula
                    </p>
                    {/* Answer */}
                    <p className="p-lg">
                      An enim nullam tempor sapien gravida donec congue leo
                      metus. Vitae arcu mollis blandit integer at velna
                    </p>
                  </div>
                  {/* QUESTION #6 */}
                  <div className="question wow fadeInUp">
                    {/* Question */}
                    <h5 className="h5-md">I have an issue with my account</h5>
                    {/* Answer */}
                    <ul className="simple-list">
                      <li className="list-item">
                        <p className="p-lg">
                          Fringilla risus, luctus mauris orci auctor purus
                        </p>
                      </li>
                      <li className="list-item">
                        <p className="p-lg">
                          Quaerat sodales sapien euismod blandit purus and ipsum
                          primis in cubilia laoreet augue luctus
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>{" "}
              {/* END QUESTIONS HOLDER */}
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* END FAQs-2 QUESTIONS */}
          {/* MORE QUESTIONS BUTTON */}
          <div className="row">
            <div className="col">
              <div className="more-questions">
                <h5 className="h5-sm">
                  Have more questions?{" "}
                  <a href="contacts.html">Ask your question here</a>
                </h5>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End container */}
      </section>
      <section id="cta-6" className="bg-04 pt-70 pb-70 cta-section division">
        <div className="container">
          <div className="row justify-content-md-center">
            {/* BANNER TEXT */}
            <div className="col col-lg-8">
              <div className="cta-6-txt white-color text-center">
                {/* Title */}
                <h2 className="h2-sm">
                  Get started with OLMO today and improve your workflow
                </h2>
                {/* Buttons Group */}
                <div className="btns-group mb-30">
                  <a
                    href="download.html"
                    className="btn btn-md btn-violet-red tra-white-hover mr-15"
                  >
                    Start Free Trial
                  </a>
                  <a
                    href="pricing.html"
                    className="btn btn-md btn-tra-white white-hover"
                  >
                    View Pricing
                  </a>
                </div>
                {/* Advantages List */}
                <ul className="advantages text-center clearfix">
                  <li className="first-li">
                    <p>Free 30 days trial</p>
                  </li>
                  <li>
                    <p>Exclusive Support</p>
                  </li>
                  <li className="last-li">
                    <p>No Fees</p>
                  </li>
                </ul>
              </div>
            </div>{" "}
            {/* END BANNER TEXT */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>
    </PageLayout>
  );
};

export default Home;
