import React from "react"
import { css } from "@emotion/core"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

export default function Home({ data }) {
  return (
    <Layout>
      <div className="contents">
        <div className="contens_main">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <article key={node.id} className="main_post">
            <Link
              to={node.fields.slug}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3>
                {node.frontmatter.title}{" "}
              </h3>
              <ul 
                css={css`
                list-style: none;
                display: flex;
                align-items: center;
              `}
              >
                <li>{node.frontmatter.date}</li>
                <li
                  css={css`
                  margin-left: 10px;
                `}
                >{node.frontmatter.category}</li>
              </ul>
            </Link>
          </article>
        ))}
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            category
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`