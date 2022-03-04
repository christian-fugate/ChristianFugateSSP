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
      <p> Obi Wan Kenobi, the Jedi that went through the most trials and remained on the Jedi way </p>
      <StaticImage
        alt="Master Chief"
        src="../images/Halo-3-Master-Chief.jpg"
        />
      <p>Master Chief, one of, if not the most efficient, and effective, Super Soldier the UNSC has</p>
    </Layout>
  )
}

export default IndexPage
