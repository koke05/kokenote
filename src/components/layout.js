import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import Head from "./head"

export default function Layout({ children }) {
const data = useStaticQuery(
    graphql`
        query {
            site {
            siteMetadata {
                title
            }
            }
        }
    `

)
return (
    <div>
    <Head/>
    <header>
        <div className="header">
            <Link to={`/`}>
                <h1>
                {data.site.siteMetadata.title}
                </h1>
            </Link>
            <p>
                勉強したことや好きなことをメモするブログ
            </p>
        </div>
    </header>
    <main>
        {children}
    </main>
    <footer>
    <small>©&nbsp;2020&nbsp;kokenote</small>
    </footer>
    </div>
)
}