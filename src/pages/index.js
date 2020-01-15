import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/navigation"

import Header from "../components/sections/header"
import About from "../components/sections/about"
import Services from "../components/sections/services"
import Pricing from "../components/sections/pricing"
import Contact from "../components/sections/contact"
import NewsLetter from "../components/sections/newsletter"
import Footer from "../components/sections/footer"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <Header />
    <About />
    <Services />
    <Pricing />
    <Contact />
    <NewsLetter />
    <Footer />
  </Layout>
)

export default IndexPage
