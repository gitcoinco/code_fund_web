/* eslint-disable react/display-name */
import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import { Box } from "../components/primitives/Box.jsx";

class BlogRoll extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Box base="grid max-w-lg gap-5 mx-auto mt-12" lg="grid-cols-3 max-w-none">
        {posts &&
          posts.map(({ node: post }) => (
            <div
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
              key={post.id}
            >
              <article
                className={` ${
                  post.frontmatter.featuredpost ? "is-featured" : ""
                }`}
              >
                <header>
                  {post.frontmatter.featuredimage ? (
                    <div className="flex-shrink-0">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                          classes: `h-48 w-full object-cover`,
                        }}
                      />
                    </div>
                  ) : null}
                  {/* <p className="">
                    <Link className="" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <span className="">{post.frontmatter.date}</span>
                  </p> */}
                </header>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                  <div className="flex-1">
                    <p className="text-sm font-medium leading-5 text-indigo-600">
                      {/* TODO: Link to actual tags */}
                      <a href="#" className="hover:underline">
                        Tag
                      </a>
                    </p>
                    <Link className="block" to={post.fields.slug}>
                      <h3 className="mt-2 text-xl font-semibold leading-7 text-gray-900">
                        {post.frontmatter.title}
                      </h3>
                      <p className="mt-3 text-base leading-6 text-gray-500">
                        {post.excerpt}
                      </p>
                    </Link>
                  </div>
                  <div className="flex items-center mt-6">
                    <div className="ml-3">
                      <p className="text-sm font-medium leading-5 text-gray-900">
                        {/* TODO: Link to actual author */}
                        <a href="#" className="hover:underline">
                          Author
                        </a>
                      </p>
                      <div className="flex text-sm leading-5 text-gray-500">
                        {post.frontmatter.date}
                        <span className="mx-1">&middot;</span>
                        {/* TODO: Use actual read time */}
                        <span>6 min read</span>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          ))}
      </Box>
    );
  }
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default () => (
  <StaticQuery
    query={graphql`
      query BlogRollQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
        ) {
          edges {
            node {
              excerpt(pruneLength: 400)
              id
              fields {
                slug
              }
              frontmatter {
                title
                templateKey
                date(formatString: "MMMM DD, YYYY")
                featuredpost
                featuredimage {
                  childImageSharp {
                    fluid(maxWidth: 120, quality: 100) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={(data, count) => <BlogRoll data={data} count={count} />}
  />
);
