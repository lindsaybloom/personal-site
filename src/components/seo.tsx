import React from "react"
import Helmet from "react-helmet"
import { ContentfulHero } from "../types/contentful"
import config from "../config"

type Meta = Array<{ name?: string; property?: string; content?: string }>

export interface SEOProps {
  hero: ContentfulHero
  title?: string
  description?: string
  meta?: Meta
}

function SEO(props: SEOProps) {
  const {
    title,
    description = config.siteDescription,
    hero,
    meta: customMeta = [],
  } = props
  const imageShare = hero ? hero.file.url.substring(2) : ""
  const pageTitle = title
    ? `${title} | ${config.siteTitle}`
    : `${config.siteTitle} | ${description}`
  const imageDetails = hero ? hero.file.details.image : null

  const meta: Meta = [
    {
      name: `description`,
      content: description,
    },
    {
      property: `og:title`,
      content: pageTitle,
    },
    {
      property: `og:description`,
      content: description,
    },
    {
      property: "og:image",
      content: imageShare,
    },
    {
      property: "og:image:width",
      content: imageDetails ? imageDetails.width?.toString() : "",
    },
    {
      property: "og:image:height",
      content: imageDetails ? imageDetails.height?.toString() : "",
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: config.twitterHandle,
    },
    {
      name: `twitter:title`,
      content: pageTitle,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    {
      property: "twitter:image",
      content: imageShare,
    },
    ...customMeta,
  ]

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="robots" content="max-image-preview:large"></meta>
      {meta.map(m => (
        <meta {...m} />
      ))}
    </Helmet>
  )
}

export default SEO
