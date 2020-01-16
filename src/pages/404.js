import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"
import ErrorPage from "../components/sections/404"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Navigation />
    <ErrorPage />
  </Layout>
)

export default NotFoundPage