import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Card from "../components/TOCCard";

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query HomepageTOC {
        site {
          siteMetadata {
            title
            subtitle
            description
            keywords
            courseImage
          }
        }
        allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
          edges {
            node {
              id
              frontmatter {
                order
                path
                title
                section
                description
                icon
              }
            }
          }
        }
      }
    `}
    render={(props) => (
      <div className="index">
        <div className="jumbotron">
          <div className="courseInfo">
            <div className="courseInfo-inner">
              <h1>{props.site.siteMetadata.title}</h1>
              <h2>{props.site.siteMetadata.subtitle}</h2>
              {/* <div className="author">
                <div className="image">
                  <img
                    className="image"
                    src={props.site.siteMetadata.authorImage}
                  />
                </div>
                <div className="info">
                  <div className="name">{props.site.siteMetadata.author}</div>
                  <div className="company">
                    {props.site.siteMetadata.authorSubtitle}
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="courseIcon">
            <img src={props.site.siteMetadata.courseImage} />
          </div>
        </div>

        <Card
          title="Table of Contents"
          content={props.allMarkdownRemark.edges}
        />
      </div>
    )}
  />
);

export default IndexPage;
