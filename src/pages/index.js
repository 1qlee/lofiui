import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Preview from "../components/preview"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`card`, `maker`, `app`]} />
    <Preview />
  </Layout>
)

export default IndexPage
