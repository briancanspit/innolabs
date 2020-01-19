import React from "react"
import styled, {keyframes} from "styled-components"
import {CheckCircle} from "styled-icons/boxicons-solid/CheckCircle"
import {XCircle} from "styled-icons/boxicons-solid/XCircle"
import {Fade} from "react-reveal"

import { Section } from "../global"

const Pricing = () => (
  <Section id="pricing" style={{marginTop: -80}}>
    <StyledContainer>
      <Fade duration={300} bottom>
        <Subtitle>Pricing</Subtitle>
      </Fade>
      <Fade duration={300} top>
        <SectionTitle>Choose the best plan for you</SectionTitle>
      </Fade>
      <PricingGrid>
        <Fade duration={300} left>
        <PricingItem>
          <PricingTitle>Free</PricingTitle>
          <PricingValue>$0.00 / month</PricingValue>
          <PerksHolder>
            <CheckGreen size={22} />
            <PricingText>24 hour support</PricingText>
          </PerksHolder>
          <PerksHolder>
            <CheckGreen size={22} />
            <PricingText>Weekly discounts</PricingText>
          </PerksHolder>
          <PerksHolder>
            <CheckRed size={22} />
            <PricingText>Link up to 2 banks</PricingText>
          </PerksHolder>
          <PerksHolder style={{marginBottom: 40}}>
            <CheckRed size={22} />
            <PricingText>$1000 monthly limit</PricingText>
          </PerksHolder>
          <HeaderButton>Get Free Plan</HeaderButton>
        </PricingItem>
        </Fade>
        <Fade duration={300} right>
        <PricingItem>
          <PricingTitle>Pro</PricingTitle>
          <PricingValue>$9.99 / month</PricingValue>
          <PerksHolder>
            <CheckGreen size={22} />
            <PricingText>24 hour support</PricingText>
          </PerksHolder>
          <PerksHolder>
            <CheckGreen size={22} />
            <PricingText>Weekly discounts</PricingText>
          </PerksHolder>
          <PerksHolder>
            <CheckGreen size={22} />
            <PricingText>Link up to 5 banks</PricingText>
          </PerksHolder>
          <PerksHolder style={{marginBottom: 40}}>
            <CheckGreen size={22}/>
            <PricingText>No monthly limit</PricingText>
          </PerksHolder>
          <HeaderButton>Get Pro Plan</HeaderButton>
        </PricingItem>
        </Fade>
      </PricingGrid>
    </StyledContainer>
  </Section>
)

export default Pricing

const StyledContainer = styled(Section)`
  background-color: ${props => props.theme.color.background.white};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0px 0px 120px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
`

const enlarge = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 0 70px;
  }
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const PricingGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 10vw;
  }
`

const PricingItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 1px solid #e6e6e6;
  padding: 0 10px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 1px 1px 15px #f3f3f3;
  width: 300px;
  &:hover {
    animation: ${enlarge} 0.5s linear;
    cursor: pointer;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 250px;
  }
`

const PricingTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin: 25px;
`

const PricingValue = styled.p`
  color: #098c8c;
  font-weight: bold;
  font-size: 25px;
  margin: 0;
  padding: 0;
  margin-bottom: 35px;
`

const PerksHolder = styled.div`
  display: flex;
  flex-direction: row;
`

const PricingText = styled.p`
  
  padding: 0 25px 0 5px;
  margin: 10px 0px 10px 0;
`

const CheckGreen = styled(CheckCircle)`
  color: mediumseagreen;
  margin-top: 8px;
`

const CheckRed = styled(XCircle)`
  color: red;
  margin-top: 8px;
`

const HeaderButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin: 0;
  text-transform: uppercase;
  width: 300px;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.secondary};
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
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
    width: 250px;
  }
`