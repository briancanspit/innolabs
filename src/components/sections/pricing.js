import React from "react"
import styled from "styled-components"

import { Section } from "../global"

const Pricing = () => (
  <Section id="pricing" style={{marginTop: -80}}>
    <StyledContainer>
      <Subtitle>Pricing</Subtitle>
      <SectionTitle>Choose the best plan for you</SectionTitle>
      <PricingGrid>
        <PricingItem>
          <PricingTitle>Aggregation</PricingTitle>
          <PricingText>
            Integrate other financial providers to your account wallet.
          </PricingText>
        </PricingItem>
        <PricingItem>
          <PricingTitle>Payments</PricingTitle>
          <PricingText>Send money to friends and family with ease.</PricingText>
        </PricingItem>
        <PricingItem>
          <PricingTitle>Rewards</PricingTitle>
          <PricingText>
            Get bonuses and discount points every time you complete a transaction.
          </PricingText>
        </PricingItem>
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

const PricingGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const PricingItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const PricingTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const PricingText = styled.p`
  text-align: center;
`