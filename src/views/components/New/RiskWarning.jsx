import React from "react";

export const RiskWarning = () => {
  return (
    <>
      <div className="grid-halves wf-section">
        <div className="bg-violet border-right">
          <div className="column-padding centered">
            <div className="text-2xl">
              Don’t take risks. <br />
              That’s scary!
            </div>
          </div>
        </div>
        <div className="bg-pink">
          <div className="column-padding centered">
            <div className="text-2xl">
              Place small bets. <br />
              That’s exciting!
            </div>
          </div>
        </div>
      </div>
      <div className="grid-halves wf-section">
        <div className="bg-black border-right">
          <div className="column-padding centered">
            <div className="relative">
              <img
                src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619b0e6332c6b058a1758f9e_book.svg"
                loading="lazy"
                data-w-id="faf5a689-0c5f-13bd-dde6-4d17c22557f6"
                alt=""
              />
              <div
                data-w-id="faf5a689-0c5f-13bd-dde6-4d17c22557f7"
                className="comic-bubble"
              >
                <div>Instead of selling a book...</div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-yellow-dark">
          <div className="column-padding centered">
            <div
              data-w-id="faf5a689-0c5f-13bd-dde6-4d17c22557fc"
              className="callout-wrap"
            >
              <img
                src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619b0e63179ab20e6c9d3bfd_blog-post.svg"
                loading="lazy"
                data-w-id="faf5a689-0c5f-13bd-dde6-4d17c22557fd"
                alt=""
              />
              <div
                data-w-id="faf5a689-0c5f-13bd-dde6-4d17c22557fe"
                className="comic-bubble"
              >
                <div>...start by selling a blog post!</div>
              </div>
              <img
                src="https://assets-global.website-files.com/6171b265e5c8aa59b42c3472/619d24928cd720d3395ff060_Exciting-Colors.svg"
                loading="lazy"
                alt=""
                className="sticker home-10"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
