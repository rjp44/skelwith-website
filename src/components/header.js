import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React, { Component } from "react";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: false
    };
  }

  render() {
    const { data, header } = this.props;
    const { menu } = this.state;
    return (
      <header className={`site-header ${menu ? "active" : ""}`}>
        <div className="container">
          <div className="header-main">
            <div className="logo">
              <Link to="/">
                {data.logo.gatsbyImageData ? (
                  <GatsbyImage image={getImage(data.logo)} alt="logo" style={{ height: 30 }}/>
                ) : (
                  <span>{data.siteName}</span>
                )}
              </Link>
            </div>
            <div
              className="responsive-menu"
              onClick={() => {
                this.setState({
                  menu: !menu
                });
              }}
            >
              <span></span>
            </div>
              <div className="menu">
                <ul
                  onClick={() => {
                    this.setState({
                      menu: false
                    });
                  }}
                >
                  <li key="home">
                    <Link to="/#home">Home</Link>
                  </li>
                  {data.menus
                    .filter(item => item === "About")
                    .map(t => {
                      return (
                        <li key="About">
                          <Link to={`/#About`}>About</Link>
                        </li>
                      );
                    })}

                  {data.menus
                    .filter(item => item === "Blogs")
                    .map(t => {
                      return (
                        <li key="Blogs">
                          <Link to={`/#Blogs`}>Hall</Link>
                        </li>
                      );
                    })}

                  {data.menus
                    .filter(item => item === "Photos")
                    .map(t => {
                      return (
                        <li key="Photos">
                          <Link to={`/#Photos`}>Photos</Link>
                        </li>
                      );
                    })}
                  {data.menus
                    .filter(item => item === "Contact")
                    .map(t => {
                      return (
                        <li key="Contact">
                          <Link to={`/#Contact`}>Contact</Link>
                        </li>
                      );
                    })}
                </ul>
              </div>
          </div>
        </div>
      </header>
    );
  }
}
