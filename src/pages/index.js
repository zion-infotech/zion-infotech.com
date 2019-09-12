import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div class="intro">
      <div class="hello">hello!</div>
      <div class="text">
        we’re a young team
        <br />
        with <span class="big">BIG</span> ideas!
      </div>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      {/* <Image /> */}
    </div>
  </Layout>
)

export default IndexPage
