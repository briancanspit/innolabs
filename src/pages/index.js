import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import About from "../components/sections/about"
import Services from "../components/sections/services"
import Footer from "../components/sections/footer"
import NewsLetter from "../components/sections/newsletter"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <About />
    <Services />
    <NewsLetter />
    <Footer />
  </Layout>
)

export default IndexPage
