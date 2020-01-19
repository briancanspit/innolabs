import React from "react"
import styled, { keyframes } from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Fade } from "react-reveal"

import { Container } from "../global"

const Contact = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "product" }, name: { eq: "message" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <HeaderWrapper id="contact">
      <Container>
      <TopContainer>
      <Fade duration={300} bottom>
      <Subtitle>Contact Us</Subtitle>
      </Fade>
      <Fade duration={300} top>
      <SectionTitle>We would love to hear from you</SectionTitle>
      </Fade>
      </TopContainer>
        <Flex>
          <Fade duration={300} left>
            <HeaderForm>
              <Label>What's your full name?</Label>
              <HeaderInput placeholder="Full name" />
              <Label>How can we reach you?</Label>
              <HeaderInput placeholder="Email address" />
              <Label>Leave us a message.</Label>
              <TextAreaInput placeholder="Your message" />
              <HeaderButton>Send Message</HeaderButton>
            </HeaderForm>
          </Fade>
          <Fade duration={300} right>
            <Text>
              {data.file.childImageSharp !== null ? (
                <Float>
                  <StyledImage fluid={data.file.childImageSharp.fluid} />
                </Float>
              ) : (
                <span></span>
              )}
              <br />
            </Text>
          </Fade>
        </Flex>
      </Container>
    </HeaderWrapper>
  )
}

export default Contact

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.background.light};
  padding: 225px 0 250px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
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

const TopContainer = styled.div`
  margin-top: -150px;
`

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const Flex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-content: center;
  margin-top: 100px;
  @media (max-width: ${props => props.theme.screen.md}) {
    display: grid;
    justify-content: space-between;
    align-content: center;
    grid-template-columns: 1fr 1fr;
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: flex;
    justify-content: center;
  }
`

const Label = styled.label`
  color: #333;
  margin-left: 2.5px;
  margin-top: 2.5px;
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

const HeaderForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  width: 400px;
  margin-top: -60px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
    width: 80vw;
  }
`

const HeaderInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  line-height: 42px;
  margin: 5px 0;
  width: 100%;
  text-align: left;
  height: 60px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.color.secondary};
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  outline: 0px;
  &:focus {
    box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    margin-bottom: 8px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`

const TextAreaInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  line-height: 42px;
  margin: 5px 0;
  width: 100%;
  text-align: left;
  height: 120px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.color.secondary};
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  outline: 0px;
  &:focus {
    box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    margin-bottom: 8px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`

const HeaderButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-top: 20px;
  text-transform: uppercase;
  width: 100%;
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
  }
`
