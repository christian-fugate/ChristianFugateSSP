import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Obi wan Kenobi"
        src="https://ichef.bbci.co.uk/news/704/cpsprodpb/11CFB/production/_117755927_obi-wan-kenobi-revenge-of-the-sith.jpg"
      />
    </Layout>
  )
}

export default IndexPage
