import * as React from 'react'
import { Link } from 'gatsby'
const AboutPage = () => {
	return (
		<main>
			<title>About Me</title>
			<h1>About me</h1>
			<Link to "/"> Back to Home</Link>
			<p>Hi there! I'm proud creator of this site, which i built with Gatsby.</p>
		</main>
	)
}
export default AboutPage