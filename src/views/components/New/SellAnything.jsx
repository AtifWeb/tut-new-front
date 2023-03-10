import React from "react";

export const SellAnything = () => {
  return (
    <div className="grid-halves wf-section">
      <div className="bg-black border-right">
        <div className="column-padding centered">
          <img
            src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619578e5eee7c6e8da61a827_home-feature-2.svg"
            loading="lazy"
            alt=""
            className="callout-image"
          />
        </div>
      </div>
      <div>
        <div className="column-padding">
          <div className="content-grid">
            <h3 className="text-2xl">Sell to anyone</h3>
            <div className="text-md">
              Build a loyal following with simple posts, email newsletters, and
              automated workflows. Plus let your customers pay what they want or
              choose between one-time, recurring, or fixed-length payments in
              your currency of choice. (We’ll handle the fine print, like VAT).
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
