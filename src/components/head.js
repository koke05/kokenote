import React from 'react'
import Helmet from "react-helmet"

export default (props) => (
    <Helmet
        htmlAttributes={{
            lang: 'ja',
        }}
        title={ (props.title ? props.title + ' | ' : '') + "kokenote"  }
        meta={[
            {
                name: 'description',
                content: props.description || '学習したことをメモするブログ'
            }
        ]}   
    />
)