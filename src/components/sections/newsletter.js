import React from "react"
import styled from "styled-components"
import {Fade} from "react-reveal"

import { Container, Section } from "../global"

const NewsLetter = () => {
  const handleSubmit = event => {
    event.preventDefault()
  }
  return (<StyledSection id="newsletter">
    <Fade duration={300} bottom><SubtitleTop>Newsletter</SubtitleTop></Fade>
    <NewsLetterContainer>
      <Fade duration={300} bottom><NewsLetterTitle>Keep track of our activities</NewsLetterTitle></Fade>
      <HeaderForm onSubmit={handleSubmit}>
        <Fade duration={300} left><HeaderInput placeholder="Your Email Address" /></Fade>
        <Fade duration={300} right><HeaderButton>Subscribe</HeaderButton></Fade>
      </HeaderForm>
      <Fade duration={300} top><Subtitle>Subscribing to our newsletter ensures you receive the latest updates.</Subtitle></Fade>
    </NewsLetterContainer>
  </StyledSection>)
}

export default NewsLetter

const StyledSection = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  clip-path: polygon(0 0, 100% 14%, 100% 100%, 0% 100%);
  margin-top: -150px;
  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`

const SubtitleTop = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: -65px;
  text-align: center;
  @media (max-width: ${props => props.theme.screen.sm}) {
    padding-top: 80px;
  }
`

const NewsLetterContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 0 0;
  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 80px 0 0;
    margin-top: 0px;
  }
`

const NewsLetterTitle = styled.h3`
  margin: 0 auto 32px;
  text-align: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    padding: 0 70px;
  }
`

const Subtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
  padding-top: 16px;
  font-size: 14px;
  color: ${props => props.theme.color.primary};
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: none;
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

const HeaderInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  line-height: 42px;
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
    width: 100%;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
    width: 100%;
  }
`