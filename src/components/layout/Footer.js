import React from "react";

const Footer = () => {
  return (
    <div className="app-wrapper-footer">
      <div className="app-footer">
        <div className="app-footer__inner">
          <div className="app-footer-right">
            <div>© {new Date().getFullYear()} LOLA Management portal</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
