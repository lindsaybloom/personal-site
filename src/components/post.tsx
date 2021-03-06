import React from "react"
import { Heading, ResponsiveContext, Text } from "grommet"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { ContentfulBlogPostBySlug } from "../types/contentful"
import Image from "gatsby-image"
import SEO from "../components/seo"

type PostProps = {
  post: ContentfulBlogPostBySlug
}

const Post = ({ post }: PostProps) => {
  const size = React.useContext(ResponsiveContext)

  return (
    <article id="post">
      <ResponsiveContext.Consumer>
        {size => (
          <>
            <SEO
              hero={post.hero}
              title={post.title}
              description={post.description.description}
            />
            {post.hero && <Image fluid={post.hero.fluid} />}
            <Text>{post.date}</Text>
            <Heading margin={{ top: "medium" }}>{post.title}</Heading>
            {documentToReactComponents(post.body.json)}
          </>
        )}
      </ResponsiveContext.Consumer>
    </article>
  )
}

export default Post
