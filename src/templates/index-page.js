import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import { v4 } from "uuid";

// import { Image } from "../components/primitives/Image.jsx";
import { Text } from "../components/primitives/Text.jsx";
import { Box } from "../components/primitives/Box.jsx";
import { ButtonLink } from "../components/button/ButtonLink.jsx";
import { Metric } from "../components/metric/Metric.jsx";
import { MetricGrid } from "../components/metric/MetricGrid.jsx";
import BlogRoll from "../components/BlogRoll";
import Features from "../components/Features";
import Landing from "../components/Landing";
import Layout from "../components/Layout";
import Testimonials from "../components/Testimonials";
import { Heading } from "../components/primitives/Heading.jsx";

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
      <Box base="bg-gray-50 pt-12" sm="pt-16">
        <Box base="max-w-screen-xl mx-auto px-4" sm="px-6" lg="px-8">
          <Box base="max-w-4xl mx-auto text-center">
            <Heading level="3" align="center">
              {mainpitch.title}
            </Heading>
            <Text
              base="max-w-2xl mx-auto mt-3 sm:mt-4"
              size="xl"
              leading="7"
              color="gray-500"
              align="center"
            >
              {mainpitch.description}
            </Text>
          </Box>
        </Box>
        <Box base="mt-10 pb-12" sm="pb-16">
          <MetricGrid>
            {mainpitch.metrics.map((metric) => (
              <div key={v4()}>
                <Metric quantity={metric.quantity} unit={metric.unit} />
              </div>
            ))}
          </MetricGrid>
        </Box>
      </Box>
      <Features gridItems={intro.blurbs} />
      <Box
        base="relative bg-gray-50 pt-16 pb-20 px-4"
        sm="px-6"
        lg="pt-24 pb-28 px-8"
      >
        <Box base="relative max-w-7xl mx-auto">
          <Box base="max-w-4xl mx-auto text-center">
            <Heading level="3" align="center">
              From the blog
            </Heading>
            <Text
              base="max-w-2xl mx-auto mt-3 sm:mt-4"
              size="xl"
              leading="7"
              color="gray-500"
              align="center"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
              libero labore natus atque, ducimus sed.
            </Text>
          </Box>
        </Box>
        <BlogRoll />
        <Box base="w-full md:w-1/2 lg:w-1/4 mx-auto">
          <ButtonLink route="/blog" type="md-primary">
            See more
          </ButtonLink>
        </Box>
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
          marketingImage {
            image {
              childImageSharp {
                fluid(maxWidth: 2048, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            alt
          }
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
