import React from "react"
import styled from "styled-components"
import {Fade} from "react-reveal"

import { Container, Section } from "../global"

const About = () => (
  <StyledSection id="about">
    <Fade duration={300} bottom><Subtitle>About us</Subtitle></Fade>
    <AboutContainer>
      <Fade duration={300} top><AboutTitle>Who We Are</AboutTitle></Fade>
      <Fade duration={300} bottom>
      <FeaturesGrid>
      <FeatureItem>
          <FeatureTitle>InnoLabs is a leading provider of financial services aimed at lessening the complexity of online transactions. With our users in mind, we provide flexible solutions that revolutionize money transfer.</FeatureTitle>
      </FeatureItem>
      </FeaturesGrid>
      </Fade>
      <Fade duration={300} top>
      <TryItButton>Check out our services</TryItButton>
      </Fade>
    </AboutContainer>
  </StyledSection>
)

export default About

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.white};
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  padding-top: 120px;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: -65px;
  text-align: center;
`

const AboutContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 40px;
`

const AboutTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
`

const TryItButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  margin-top: 60px;
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
  }
`

const FeaturesGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 100px;
  text-align: center;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 50px;
  margin-bottom: 10px;
`
