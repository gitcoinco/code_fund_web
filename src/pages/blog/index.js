import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className=""
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`
          }}
        >
          <h1 className="">Latest Stories</h1>
        </div>
        <section className="">
          <div className="">
            <div className="">
              <BlogRoll />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
