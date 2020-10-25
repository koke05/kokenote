import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

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
    <header>
        <div className="header">
            <Link to={`/`}>
                <h1>
                {data.site.siteMetadata.title}
                </h1>
            </Link>
            <p>
                勉強したことや好きなことを自分ようにメモするブログ
            </p>
        </div>
    </header>
    <main>
        {children}
    </main>
    </div>
)
}