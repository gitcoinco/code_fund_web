import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

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
          <Metric quantity="196" unit="Properties" />
          <Metric quantity="45" unit="Campaigns" />
          <Metric quantity="0.21%" unit="Avg. Click Rate" />
        </MetricGrid>
      </Box>

      <Features gridItems={intro.blurbs} />
      <Box>
        <Heading size="3">Latest Stories</Heading>
        <BlogRoll />
        <ButtonLink route="/blog">See more</ButtonLink>
      </Box>
    </Box>
  </Box>
);

IndexPageTemplate.propTypes = {
  mainpitch: PropTypes.object,
  hero: PropTypes.object,
  testimonials: PropTypes.array,
  intro: PropTypes.shape({
    blurbs: PropTypes.array
  })
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
      frontmatter: PropTypes.object
    })
  })
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
