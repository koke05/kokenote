import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default function BlogPost({ data }) {
const post = data.markdownRemark
return (
    <Layout>
    <div className="post_contents">
        <div className="post_data">
            <h2>{post.frontmatter.title}</h2>
            <p>{post.frontmatter.category}</p>
            <p>{post.frontmatter.date}</p>
        </div>
        <div className="post_contents_text" dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
    </Layout>
)
}

export const query = graphql`
query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
    html
    frontmatter {
        title
        date(formatString: "YYYY/MM/DD")
        category
    }
    }
}
`