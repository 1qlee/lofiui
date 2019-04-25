import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`card`, `maker`, `app`]} />
    <Main />
  </Layout>
)

export default IndexPage
