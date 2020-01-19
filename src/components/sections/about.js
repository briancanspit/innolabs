import React from "react"
import styled, {keyframes} from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import {Fade} from "react-reveal"

import { Container } from "../global"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "product" }, name: { eq: "dream" }) {
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
    <HeaderWrapper id="about">
      <Container>
        <Flex>
          <Fade duration={300} left>
          <Text>
            {data.file.childImageSharp !== null ? <Float><StyledImage fluid={data.file.childImageSharp.fluid}/></Float>:<span></span>}
            <br />
          </Text>
          </Fade>
          
          <HeaderTextGroup>
            <Subtitle><Fade duration={300} bottom>
              About us
            </Fade></Subtitle>
            <Fade duration={300} top>
            <h1>
              Turning dreams
              <br />
              into reality
            </h1>
            </Fade>
            <Fade duration={500} clear>
            <h2>
              We are a dedicated team of professionals distributed across Africa
              with the sole intent of easening the money sending process.
            </h2>
            </Fade>
            <Fade duration={300} top>
            <HeaderForm onSubmit={handleSubmit}>
              <HeaderButton>Read more</HeaderButton>
            </HeaderForm>
            </Fade>
          </HeaderTextGroup>
          
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default About

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.background.white};
  padding: 225px 0 50px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 100px 0 50px 0;
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
  margin-top: -35px;
`

const HeaderTextGroup = styled.div`
  margin: 0 0 0 8vw;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0;
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
    padding-right: 10px;
  }

  p {
    margin-bottom: 48px;
  }
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 2fr;
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
  }
`

const HeaderButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 0px;
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
