import React from 'react'
import Link from 'gatsby-link'
import { ItemCard, ItemCardWrapper } from '@lerna-monorepo/shared-ui'

const BlogPage = ({ data }) => {
  const edges = data.allBlogJson.edges

  return (
    <div>
      <h1>Blog Page</h1>
      <ItemCardWrapper>
        {edges && edges.map(edge => <ItemCard key={edge.node.id} data={edge.node} slug="post" />)}
      </ItemCardWrapper>
      <a href={process.env.SHOP_URL}>Back to Shop</a>
    </div>
  )
}

export default BlogPage

export const query = graphql`
  query BlogPostsQuery {
    allBlogJson {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`