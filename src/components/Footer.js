import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import twitter from "../img/social/twitter.svg";
import vimeo from "../img/social/vimeo.svg";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="">
        <div className="">
          <img
            src={logo}
            alt="CodeFund"
            style={{ width: "14em", height: "10em" }}
          />
        </div>
        <div className="">
          <div className="">
            <div className="">
              <div className="">
                <section className="">
                  <ul className="">
                    <li>
                      <Link to="/" className="">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link className="" to="/about">
                        About
                      </Link>
                    </li>
                    <li>
                      <Link className="" to="/products">
                        Products
                      </Link>
                    </li>

                    <li>
                      <a
                        className=""
                        href="/admin/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Admin
                      </a>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="">
                <section>
                  <ul className="">
                    <li>
                      <Link className="" to="/blog">
                        Latest Stories
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="">
                <a title="facebook" href="https://facebook.com">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="twitter" href="https://twitter.com">
                  <img
                    className=""
                    src={twitter}
                    alt="Twitter"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="vimeo" href="https://vimeo.com">
                  <img
                    src={vimeo}
                    alt="Vimeo"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
