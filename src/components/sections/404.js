import React from "react"
import styled, {keyframes} from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import { Container } from "../global"

const ErrorPage = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "product" }, name: { eq: "zeppelin" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <ErrorPageWrapper id="top">
      <Container>
        <Flex>
          <ErrorPageTextGroup>
            <Subtitle>Aw, geez.</Subtitle>
            <h1>
              Oops! Looks like
              <br />
              you've hit a dead end.
            </h1>
            <h2>
              You have navigated to a page that does not exist.
              Go back to our main page using this button.
            </h2>
            <ErrorPageForm onSubmit={handleSubmit}>
              <ErrorButtonWrapper><ErrorPageButton>Return to home page</ErrorPageButton></ErrorButtonWrapper>
            </ErrorPageForm>
            
          </ErrorPageTextGroup>
          <Text>
            <Float><StyledImage fluid={data.file.childImageSharp.fluid} /></Float>
            <br />
          </Text>
        </Flex>
      </Container>
    </ErrorPageWrapper>
  )
}

export default ErrorPage

const ErrorPageWrapper = styled.header`
  background-color: ${props => props.theme.color.background.light};
  padding: 160px 0 200px 0;
  position: relative;
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`

const floating = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(10px);
  }
  100%{
    transform: translateY(0px);
  }
`

const Float = styled.div`
  animation: ${floating} 1.5s linear infinite;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 16px;
`

const ErrorPageTextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    color: ${props => props.theme.color.primary};
  }

  h2 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const ErrorPageForm = styled.form`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
  }
`

const FormSubtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
`

const FormSubtitleLink = styled(Link)`
  color: ${props => props.theme.color.secondary};
  padding-bottom: 1px;
  margin-left: 8px;
  text-decoration: none;
  border-bottom: 1px solid ${props => props.theme.color.secondary};
`

const ErrorButtonWrapper = styled.a`
  text-decoration: none;
`

const ErrorPageButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
    margin-bottom: 10px;
  }
`
const Text = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: 500px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`
