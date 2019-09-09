import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <Layout>
      <h2>I'm Divya, a full-stack developer and always a beginner</h2>
      <p>
        Need a developer? <Link to="/contact/">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
