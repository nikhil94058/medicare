import React from 'react';

export const ParentFrame = () => {
  return (
    <header className="parent-frame">
      <div className="parent-frame-child" />
      <div className="home-frame-parent">
        <img
          className="home-frame-icon"
          loading="eager"
          alt=""
          src="/3-1@2x.png"
        />
        <b className="ayur">AYUR</b>
        <b className="ayur-rectangle">++</b>
      </div>
      <div className="products-frame">
        <div className="about-frame">
          <div className="pricing-frame">
            <div className="pricing-frame-child" />
            <div className="home">Home</div>
          </div>
          <div className="pricing-frame1">
            <div className="pricing-frame-item" />
            <div className="products">Products</div>
          </div>
          <div className="pricing-frame2">
            <div className="pricing-frame-inner" />
            <div className="about">About</div>
          </div>
          <div className="pricing-frame3">
            <div className="rectangle-div" />
            <div className="pricing">Pricing</div>
            </div>
        </div>
        <button className="search-box">
          <img className="empty-frame-icon" alt="" src="/empty-frame.svg" />
          <div className="search-for-anything-container">
            <span className="search">{`Search `}</span>
            <span className="for-anything">for anything</span>
          </div>
        </button>
        <div className="image-parent">
          <img className="image-icon1" alt="" src="/image-1@2x.png" />
          <div className="frame-rohit-shetty">
            <div className="rohit-shetty">Rohit Shetty</div>
          </div>
        </div>
      </div>
    </header>)}

    export default ParentFrame;