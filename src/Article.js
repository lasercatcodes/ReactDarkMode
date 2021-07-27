import moment from 'moment'
import React from 'react'

export default function Article({title, date, snippet}) {
  return (
    <article className="article-post">
        <h2 className="article-title">{title}</h2>
        <div className="article-info">
          <span>{moment(date).format('dd Do, YYYY')}, </span>
          <span>{title.length} min read</span>
        </div>
        <p>{snippet}</p>
    </article>
  )
}
