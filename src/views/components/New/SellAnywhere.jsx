import React from "react";

export const SellAnywhere = () => {
  return (
    <div className="grid-halves wf-section">
      <div className="bg-yellow-dark border-right">
        <div className="column-padding centered">
          <img
            src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/61991f9baa14038b9c100d6c_home-feature-4.svg"
            loading="lazy"
            alt=""
            className="callout-image"
          />
        </div>
      </div>
      <div>
        <div className="column-padding">
          <div className="content-grid">
            <h3 className="text-2xl">Sell anywhere</h3>
            <div className="text-md">
              Create and customize your storefront with our all-in-one platform
              or choose to use your personal site instead. With Zapier, you can
              seamlessly connect your Gumroad account to thousands of apps in
              your current stack.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
