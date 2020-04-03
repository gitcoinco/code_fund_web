import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { v4 } from "uuid";

import { Text } from "../components/primitives/Text.jsx";
import { Heading } from "../components/primitives/Heading.jsx";
import { Box } from "../components/primitives/Box.jsx";
import { Metric } from "../components/metric/Metric.jsx";
import { MetricGrid } from "../components/metric/MetricGrid.jsx";
import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";
import Landing from "../components/Landing";
import { ButtonLink } from "../components/button/ButtonLink.jsx";
import Testimonials from "../components/Testimonials";

export const IndexPageTemplate = ({ hero, mainpitch, intro, testimonials }) => (
  <Box>
    <Landing
      image={
        hero.image.childImageSharp
          ? hero.image.childImageSharp.fluid.src
          : hero.image
      }
      title={hero.title}
      subtitle={hero.subtitle}
      copy={hero.copy}
    />
    <Box
      component="section"
      base="relative pt-6 pb-12"
      sm="pb-16"
      md="pb-20"
      lg="pb-28"
      xl="pb-32"
    >
      <Testimonials testimonials={testimonials} />

      <Box base="max-w-screen-xl mx-auto px-4" sm="px-6">
        <Heading size="2">{mainpitch.title}</Heading>
        <Text>{mainpitch.description}</Text>
        <MetricGrid>
          {mainpitch.metrics.map((metric) => (
            <div key={v4()}>
              <Metric quantity={metric.quantity} unit={metric.unit} />
            </div>
          ))}
        </MetricGrid>
      </Box>

      <Features gridItems={intro.blurbs} />

      <Box base="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <Box base="relative max-w-7xl mx-auto">
          <Box base="text-center">
            <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
              From the blog
            </h2>
            <p className="max-w-2xl mx-auto mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </p>
          </Box>
        </Box>
        <BlogRoll />
        <ButtonLink route="/blog" type="md-primary">
          See more
        </ButtonLink>
      </Box>
    </Box>
  </Box>
);

IndexPageTemplate.propTypes = {
  mainpitch: PropTypes.object,
  hero: PropTypes.object,
  testimonials: PropTypes.array,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
};
// IndexPageTemplate.propTypes = {
//   image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
//   title: PropTypes.string,
//   subheading: PropTypes.string,
//   mainpitch: PropTypes.object,
//   hero: PropTypes.object,
//   testimonials: PropTypes.array,
//   intro: PropTypes.shape({
//     blurbs: PropTypes.array
//   })
// };

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        hero={frontmatter.hero}
        mainpitch={frontmatter.mainpitch}
        intro={frontmatter.intro}
        testimonials={frontmatter.testimonials}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        hero {
          title
          subtitle
          copy
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        mainpitch {
          title
          description
          metrics {
            unit
            quantity
          }
        }
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
        testimonials {
          author {
            name
            title
            company {
              name
              url
              logo
            }
          }
          quote
        }
      }
    }
  }
`;
