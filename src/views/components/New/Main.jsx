import React from "react";
import { Link } from "react-router-dom";

export const Main = () => {
  return (
    <div className="wf-section">
      <div className="grid-halves">
        <div className="bg-pink border-right">
          <div className="column-padding">
            <div className="tablet-centered">
              <div className="content-grid home-hero">
                <h1>
                  Go from <span className="line-break-fixed">zero to $1</span>
                </h1>
                <p className="section-sub-head">
                  With Gumroad, anyone can earn their first dollar online. Just
                  start with what you know, see what sticks, and get paid. It’s
                  that easy.
                  <br />
                </p>
                <Link
                  to="/register"
                  className="shadow-button-wrap w-inline-block"
                >
                  <div className="shadow-button-text">Register</div>
                  <div className="shadow-button-shadow _2"></div>
                  <div className="shadow-button-shadow"></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-yellow-dark">
          <div className="column-padding centered">
            <div className="creator-description">
              Vegalia sells Procreate brushes
            </div>
            <div
              data-w-id="93fce5f4-684a-d6b6-427b-65c3c0d0ec62"
              className="callout-wrap"
            >
              <img
                src="./Gumroad – Sell what you know and see what sticks_files/61942b84ec3d406199f07d78_vegalia.png"
                loading="lazy"
                width="505"
                sizes="(max-width: 479px) 90vw, (max-width: 767px) 69vw, (max-width: 991px) 576px, (max-width: 1919px) 36vw, 575.9921875px"
                srcset="
                https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/61942b84ec3d406199f07d78_vegalia-p-500.png  500w,
                https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/61942b84ec3d406199f07d78_vegalia-p-800.png  800w,
                https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/61942b84ec3d406199f07d78_vegalia.png       1010w
              "
                alt=""
                className="callout-image creator"
              />
              <img
                src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619f97a0f047aaa46093f3b3_paint-brush.svg"
                loading="lazy"
                alt=""
                className="sticker home-02"
              />
              <img
                src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/6195275a9e5f4655891de886_gum-coins.svg"
                loading="lazy"
                alt=""
                className="sticker home-01"
              />
              <a href="#" target="_blank" className="name-tag w-inline-block">
                <div>Vegalia</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
