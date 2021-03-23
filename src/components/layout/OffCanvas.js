import React from "react";
import PageHelmet from "../pageHelmet";

const OffCanvasPanel = ({ title, children, handleModalClose }) => {
  return (
    <>
      <PageHelmet title={title} />
      <div className="ui-theme-settings settings-open">
        <div className="theme-settings__inner">
          <div className="scrollbar-container ps ps--active-y">
            <div className="theme-settings__options-wrapper">
              <h3 className="themeoptions-heading">
                {title}
                <button
                  type="button"
                  className="ml-auto  btn-sm switch-header-cs-className"
                  onClick={handleModalClose}
                >
                  <i className="fa fa-times icon-md text-muted"></i>
                </button>
              </h3>
              <div className="p-3">{children}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="offcanvas-overlay" onClick={handleModalClose}></div>
    </>
  );
};

export default OffCanvasPanel;
