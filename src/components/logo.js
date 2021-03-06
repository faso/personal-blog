import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"
import { Link, useStaticQuery, graphql } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 50px;
  box-shadow: none;

  @media (max-width: 768px) and (orientation: landscape) {
    flex: 0 1 25px;
  }
`
const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "android-chrome-192x192" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 50, quality: 100, webpQuality: 100) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  return (
    <LogoWrap as={Link} to="/">
      <Img
        fadeIn={false}
        loading="eager"
        fluid={data.file.childImageSharp.fluid}
        alt="logo"
      />
    </LogoWrap>
  )
}

export default Logo
