import React from "react";

export const SellCrypto = () => {
  return (
    <div className="grid-halves wf-section">
      <div className="bg-teal border-right no-overflow">
        <img
          src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619532e016b9ee57c1b529e6_home-feature-1.svg"
          loading="lazy"
          alt=""
          className="callout-image sell-anything"
        />
      </div>
      <div>
        <div className="column-padding">
          <div className="content-grid">
            <h3 className="text-2xl">Sell anything</h3>
            <div className="text-md">
              Video lessons. Monthly subscriptions. Physical products. Whatever!
              Gumroad was created to help you experiment with all kinds of ideas
              and formats.
            </div>
            <ul role="list" className="list-grid">
              <li className="arrow-list-item">Sell your Top 10 lists</li>
              <li className="arrow-list-item">Sell your crypto tips</li>
              <li className="arrow-list-item">Sell your fractal pack</li>
              <li className="arrow-list-item">Sell your keto cookbook</li>
              <li className="arrow-list-item">Sell your C4D scenes</li>
              <li className="arrow-list-item">Sell your new emojis</li>
              <li className="arrow-list-item">Seriously, sell anything!</li>
              <li className="arrow-list-item"></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
