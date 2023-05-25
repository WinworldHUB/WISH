import React from "react";

const Header = () => {
    return <header className="header-bottom__transparent z-index-6 tp-header-height">

         <div className="header-top__area header-top__space z-index-3 d-none d-md-block tp-header-top-animation">
            <div className="container">
               <div className="row align-items-start">
                  <div className="col-6">
                     <div className="header-top__link">
                        <span>Offer <i>is going on till Friday, $2.99/mo.</i></span>
                        <a href="#">
                           <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.40918 9L5.591 5L1.40918 1" stroke="white" stroke-width="1.5"
                                 stroke-linecap="round" stroke-linejoin="round"/>
                           </svg>
                        </a>
                     </div>
                  </div>
                  <div className="col-6">
                     <div className="header-top__support text-end">
                        <span>Get Support: <a href="tel:806(000)88899">+806 (000) 888 99</a></span>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div id="header-sticky" className="header-bottom__area header-mob-space header-bottom__area-2 header-bottom__transparent z-index-5">
            <div className="container">
               <div className="row align-items-center">
                  <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                     <div className="header-bottom__logo">
                        <a href="index.html"><img src="assets/img/logo/logo-black.png" alt=""/></a>
                     </div>
                  </div>
                  <div className="col-xxl-6 col-xl-5 col-lg-5 d-none d-lg-block">
                     <div className="header-bottom__main-menu">
                        <nav id="mobile-menu">
                           <ul>
                              <li>
                                 <a href="index.html">Home</a>
                                 <ul className="submenu">
                                    <li><a href="index.html">Data analytics</a></li>
                                    <li><a href="index-2.html">Payment Gateway</a></li>
                                    <li><a href="index-3.html">CRM Software</a></li>
                                    <li><a href="index-4.html">Security Software</a></li>
                                    <li><a href="index-5.html">Saas</a></li>
                                 </ul>
                              </li>
                              <li>
                                 <a href="#">Pages</a>
                                 <ul className="submenu">
                                    <li><a href="about.html">About</a></li>
                                    <li><a href="service.html">Service</a></li>
                                    <li><a href="service-details.html">Service Details</a></li>
                                    <li><a href="team.html">Team</a></li>
                                    <li><a href="team-details.html">Team Details</a></li>
                                    <li><a href="career.html">Career</a></li>
                                    <li><a href="career-details.html">Career Details</a></li>
                                    <li><a href="integrations.html">Integrations</a></li>
                                    <li><a href="price.html">Price</a></li>
                                    <li><a href="register.html">Register</a></li>
                                    <li><a href="sign-in.html">Signin</a></li>
                                    <li><a href="404.html">404</a></li>
                                 </ul>
                              </li>
                              <li>
                                 <a href="blog-details.html">Blog</a>
                                 <ul className="submenu">
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="blog-list.html">Blog List</a></li>
                                    <li><a href="blog-details.html">Blog Details</a></li>
                                    <li><a href="blog-details-2.html">Blog Details 02</a></li>
                                 </ul>
                              </li>
                              <li>
                                 <a href="project-details.html">Projects</a>
                                 <ul className="submenu">
                                    <li><a href="project.html">Project</a></li>
                                    <li><a href="project-details.html">Project Details</a></li>
                                 </ul>
                              </li>
                              <li><a href="contact.html">Contact</a></li>
                           </ul>
                        </nav>
                     </div>
                  </div>
                  <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-8 col-6">
                     <div className="header-bottom__right d-flex align-items-center justify-content-end">
                        <div className="header-bottom__action">
                           <a className="d-none d-md-inline-block search-open-btn" href="javascript:void(0)">
                              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M8.6 16.2C12.7974 16.2 16.2 12.7974 16.2 8.6C16.2 4.40264 12.7974 1 8.6 1C4.40264 1 1 4.40264 1 8.6C1 12.7974 4.40264 16.2 8.6 16.2Z"
                                    stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                 <path d="M16.9999 17L15.3999 15.4" stroke="#292D32" stroke-width="1.5"
                                    stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                           </a>
                           <a className="d-none d-lg-inline-block last-child" href="register.html">
                              <svg width="14" height="16" viewBox="0 0 14 16" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                 <path
                                    d="M7 8C8.92882 8 10.4924 6.433 10.4924 4.5C10.4924 2.567 8.92882 1 7 1C5.07118 1 3.50757 2.567 3.50757 4.5C3.50757 6.433 5.07118 8 7 8Z"
                                    stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                 <path d="M13 15C13 12.291 10.3108 10.1 7 10.1C3.68917 10.1 1 12.291 1 15" stroke="currentColor"
                                    stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              </svg>
                              <span>Log In</span>
                           </a>
                        </div>
                        <div className="header-bottom__btn d-flex align-items-center">
                           <a className="tp-btn-white tp-btn-hover alt-color-black d-none d-md-inline-block" href="service-details.html">
                              <span className="white-text">Get Started</span>
                              <b></b>
                           </a>
                           <a className="header-bottom__bar d-lg-none tp-menu-bar" href="javascript:void(0)"><i className="fal fa-bars"></i></a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

      </header>
 }

export default Header;