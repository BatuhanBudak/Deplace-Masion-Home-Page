import React from "react";
import {
  Circle,
  FacebookLogo,
  InstagramLogo,
  NewsletterFace,
  RightArrow,
} from "./Icon";

export default function Footer() {
  return (
    <div className="footer-grid">
      <div className="f-col1">
        <div className="f-news">
          <h5 className="f-title">SUBSCRIBE&nbsp;TO&nbsp;NEWSLETTER</h5>
          <div className="f-icon">
            <NewsletterFace />
          </div>
        </div>
        <div className="f-news">
          <div className="form-block w-form">
            <form
              id="email-form"
              name="email-form"
              data-name="Email Form"
              method="post"
              action="https://deplacemaison.us20.list-manage.com/subscribe/post?u=1626dfe17b4b5e632b91faa1a&amp;amp;id=e041ae5540"
              className="form-grid"
              aria-label="Email Form"
            >
              <div className="form-wrap">
                <div className="form-content">
                  <label htmlFor="Newsletter" className="form-field-2">
                    SUBSRIBE&nbsp;TO&nbsp;OUR&nbsp;NEWSLETTER
                  </label>
                  <input
                    type="email"
                    className="form-input-2 w-input"
                    maxLength={256}
                    name="Newsletter"
                    data-name="Newsletter"
                    aria-label="newsletter"
                    placeholder="email address"
                    id="newsletter"
                    required
                  />
                </div>
                <div className="f-button-wrap">
                  <input
                    type="submit"
                    value="Submit"
                    data-wait="Please wait..."
                    className="f-button-2 w-button"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="f-col2">
        <div className="f-container f-down">
          <h5 className="f-title">info</h5>
          <a href="" className="f-wrap w-inline-block">
            <div className="f-inner">
              <div className="f-link f-face">FAQ</div>
              <div className="f-link f-side">FAQ</div>
            </div>
          </a>
          <a href="" className="f-wrap w-inline-block">
            <div className="f-inner">
              <div className="f-link f-face">returns</div>
              <div className="f-link f-side">returns</div>
            </div>
          </a>
          <a href="" className="f-wrap w-inline-block">
            <div className="f-inner">
              <div className="f-link f-face">contact</div>
              <div className="f-link f-side">contact</div>
            </div>
          </a>
        </div>
        <div className="f-container f-up">
          <a
            data-w-id="e05b02dc-48c9-b1d8-5f8c-d9b87e35ad30"
            href=""
            target="_blank"
            className="f-sign"
          >
            credits
          </a>
        </div>
      </div>
      <div className="f-col3">
        <div className="f-container f-down">
          <h5 className="f-title">policy</h5>
          <a href="" className="f-wrap w-inline-block">
            <div className="f-inner">
              <div className="f-link f-face">terms</div>
              <div className="f-link f-side">TERMS</div>
            </div>
          </a>
          <a href="" className="f-wrap w-inline-block">
            <div className="f-inner">
              <div className="f-link f-face">privacy</div>
              <div className="f-link f-side">privacy</div>
            </div>
          </a>
          <a href="" className="f-wrap w-inline-block">
            <div className="f-inner">
              <div className="f-link f-face">cookie</div>
              <div className="f-link f-side">TERMS</div>
            </div>
          </a>
        </div>
        <div className="f-container f-up">
          <h5 className="f-sign">© 2020 déplacé maison.</h5>
        </div>
      </div>
      <div className="f-col4">
        <div className="f-container">
          <a href="" className="back-top w-inline-block w--current">
            <Circle />
            <RightArrow />
          </a>
        </div>
        <div className="f-container f-up">
          <div className="f-social-wrap">
            <a href="" className="f-social w-inline-block">
              <FacebookLogo fill="#141414" classname="f-social-icon" />
            </a>
          </div>
          <div className="f-social-wrap fsw-2">
            <a href="" className="f-social w-inline-block">
              <InstagramLogo fill="#141414" classname="f-social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
