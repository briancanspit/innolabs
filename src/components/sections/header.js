import React from "react"
import styled, {keyframes} from "styled-components"
import { graphql, useStaticQuery, Link } from "gatsby"
import Img from "gatsby-image"

import { Container } from "../global"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "product" }, name: { eq: "credit_card" }) {
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
    <HeaderWrapper id="top">
      <Container>
        <Flex>
          <HeaderTextGroup>
            <Subtitle>Be in control</Subtitle>
            <h1>
              Transfer your funds
              <br />
              without a hassle
            </h1>
            <h2>
              We understand how frustrating sending money can be.
              That's why we make it easier and more secure.
            </h2>
            <HeaderForm onSubmit={handleSubmit}>
              <HeaderButton>Learn More</HeaderButton>
              <HeaderButton>Create Account</HeaderButton>
            </HeaderForm>
            <FormSubtitle>
              Already have an account?{" "}
              <FormSubtitleLink to="/">Sign in instead</FormSubtitleLink>
            </FormSubtitle>
          </HeaderTextGroup>
          <Text>
            {data.file.childImageSharp !== null ? <Float><StyledImage fluid={data.file.childImageSharp.fluid}/></Float>:<span></span>}
            <br />
          </Text>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Header

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.background.light};
  padding: 160px 0 200px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 125px 0 70px 0;
  }
`

const floating = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(6px);
  }
  100%{
    transform: translateY(0px);
  }
`

const Float = styled.div`
  animation: ${floating} 3.5s linear infinite;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 16px;
`

const HeaderTextGroup = styled.div`
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
    @media (max-width: ${props => props.theme.screen.md}) {
      font-size: 34px;
    }
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

const HeaderForm = styled.form`
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

const HeaderButton = styled.button`
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
  margin-top: -40px;
  width: 500px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`
