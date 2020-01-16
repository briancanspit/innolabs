import React from "react"
import styled from "styled-components"

import { Section } from "../global"

const Contact = () => (
  <Section id="contact" style={{marginTop: -150}}>
    <StyledContainer>
      <Subtitle>Contact Us</Subtitle>
      <SectionTitle>We'd love to hear from you</SectionTitle>
      <HeaderForm>
            <HeaderInput placeholder="Full name" />
            <HeaderInput placeholder="Email address" />
            <TextAreaInput placeholder="Your message" />
            <HeaderButton>Send Message</HeaderButton>
        </HeaderForm>
    </StyledContainer>
  </Section>
)

export default Contact

const StyledContainer = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 40px 0px 120px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
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

const HeaderForm = styled.form`
  display: flex;
  flex-direction: column;
  padding-bottom: 16px;
  width: 400px;
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