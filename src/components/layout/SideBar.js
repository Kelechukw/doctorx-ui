import React from "react";
import { Link, withRouter } from "react-router-dom";
// import { FontAwesomeIcon as FaIcon } from "@fortawesome/react-fontawesome";

const sideBarData = [
  {
    id: 1,
    name: "Tenant",
    url: "/tenant",
    icon: <i className="metismenu-icon pe-7s-rocket"></i>,
  },
  {
    id: 2,
    name: "Member Template Data",
    url: "/member-template",
    icon: <i className="metismenu-icon pe-7s-display2" />,
  },
];

const SideBar = (props) => {
  return (
    <div className="app-sidebar sidebar-shadow">
      <div className="app-header__logo">
        <div className="logo-src"></div>
        <div className="header__pane ml-auto">
          <div>
            <button
              type="button"
              className="hamburger close-sidebar-btn hamburger--elastic"
              // data-className="closed-sidebar"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>
        </div>
      </div>
      <div className="app-header__mobile-menu">
        <div>
          <button
            type="button"
            className="hamburger hamburger--elastic mobile-toggle-nav"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
      <div className="app-header__menu">
        <span>
          <button
            type="button"
            className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
          >
            <span className="btn-icon-wrapper">
              <i className="fa fa-ellipsis-v fa-w-6"></i>
            </span>
          </button>
        </span>
      </div>
      <div className="scrollbar-sidebar">
        <div className="app-sidebar__inner">
          <ul className="vertical-nav-menu">
            {sideBarData.map((sideBar) => (
              <li>
                <Link
                  to={sideBar.url}
                  className={`${
                    [props.location.pathname].find((url) => url === sideBar.url)
                      ? "mm-active"
                      : ""
                  } mt-3`}
                >
                  {sideBar.icon}
                  <div className="text-dark font-weight-bold font-size-h3 mb-2">
                    {sideBar.name}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SideBar);
