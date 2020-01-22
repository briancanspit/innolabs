import React from "react"
import styled from "styled-components"
import {Running} from "styled-icons/fa-solid/Running"
import {Security} from "styled-icons/material/Security"
import {CreditCard} from "styled-icons/icomoon/CreditCard"
import {Gift} from "styled-icons/boxicons-regular/Gift"
import {Fade} from "react-reveal"

import { Section } from "../global"

const Services = () => (
  <Section id="services">
    <StyledContainer>
      <Subtitle>Services</Subtitle>
      <SectionTitle>Here's what we offer</SectionTitle>
      <ServicesGrid>
        <Fade duration={300} left>
        <ServiceItem>
          <RunIcon size={42}/>
          <ServiceTitle>Swiftness</ServiceTitle>
          <ServiceText>
            Transact instantly and get your generated receipts sent to you on the fly.
          </ServiceText>
        </ServiceItem>
        </Fade>
        <Fade duration={300} right>
        <ServiceItem>
          <SecurityIcon size={42} />
          <ServiceTitle>Safety</ServiceTitle>
          <ServiceText>
            Your transactions adhere to the latest protocols for maximum safety.
          </ServiceText>
        </ServiceItem>
        </Fade>
        <Fade duration={300} left>
        <ServiceItem>
          <CreditCardIcon size={42} />
          <ServiceTitle>Variety</ServiceTitle>
          <ServiceText>Integrate different payment methods for quick transactions.</ServiceText>
        </ServiceItem>
        </Fade>
        <Fade duration={300} right>
        <ServiceItem>
          <GiftIcon size={42} />
          <ServiceTitle>Rewards</ServiceTitle>
          <ServiceText>
            Get bonuses and discount points every time you complete a transaction.
          </ServiceText>
        </ServiceItem>
        </Fade>
      </ServicesGrid>
    </StyledContainer>
  </Section>
)

export default Services

const StyledContainer = styled(Section)`
  background-color: ${props => props.theme.color.background.light};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px 0px 140px;
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

const ServicesGrid = styled.div`
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

const ServiceItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const ServiceTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
  margin-top: 10px;
`

const ServiceText = styled.p`
  text-align: center;
`

const RunIcon = styled(Running)`
color: #333;
margin: 0;
`

const SecurityIcon = styled(Security)`
color: #333;
margin: 0;
`

const CreditCardIcon = styled(CreditCard)`
  color: #333;
  margin: 0;
`

const GiftIcon = styled(Gift)`
  color: #333;
  margin: 0;
`