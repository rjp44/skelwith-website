import React, { Component } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default class Banner extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="banner">
        <GatsbyImage
          image={getImage(data.bannerImage)}
          objectFit="cover"
          objectPosition="50% 50%"
        />
        <div className="container">
          <div className="banner-details">
            <h1>{data.designation}</h1>
            <ul className="sub-data">
              {data.bannerList.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
            <ul className="social">
              {data?.facebook?.length && <li>
                <a
                  className="fab fa-facebook-f"
                  href={data.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>}
              {data?.twitter?.length && <li>
                <a
                  className="fab fa-twitter"
                  href={data.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>}
              {data?.instagram?.length && <li>
                <a
                  className="fab fa-instagram"
                  href={data.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>}
            {data?.linkdin?.length && <li>
              <a
                className="fab fa-linkedin-in"
                href={data.linkdin}
                target="_blank"
                rel="noopener noreferrer"
              ></a>
            </li>}
              {data?.github?.length && <li>
                <a
                  className="fab fa-github"
                  href={data.github}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              </li>}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
