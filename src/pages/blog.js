import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"
// ...GatsbyImageSharpFluid

const Blog = ({ data }) => {
  const {
    allStrapiBlogs: { nodes: blogs },
  } = data
  return (
    <Layout>
      <section className="blog-page">
        <Blogs blogs={blogs} title="blogs" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        category
        date(formatString: "Do MMM, YY")
        desc
        id
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        slug
      }
    }
  }
`

export default Blog
