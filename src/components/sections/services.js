import React from "react"
import styled from "styled-components"
import {BellRing} from "styled-icons/boxicons-solid/BellRing"
import {Security} from "styled-icons/material/Security"
import {Auto} from "styled-icons/crypto/Auto"
import {Link} from "styled-icons/fa-solid/Link"
import {FileInvoiceDollar} from "styled-icons/fa-solid/FileInvoiceDollar"
import {Gift} from "styled-icons/boxicons-regular/Gift"

import { Section } from "../global"

const Services = () => (
  <Section id="services">
    <StyledContainer>
      <Subtitle>Services</Subtitle>
      <SectionTitle>Here's what we offer</SectionTitle>
      <ServicesGrid>
        <ServiceItem>
          <NotificationsIcon size={42}/>
          <ServiceTitle>Notifications</ServiceTitle>
          <ServiceText>
            Get informed about pending bills and invoices that are due.
          </ServiceText>
        </ServiceItem>
        <ServiceItem>
          <SecurityIcon size={42} />
          <ServiceTitle>Security</ServiceTitle>
          <ServiceText>
            We keep your data safe using the latest security protocols.
          </ServiceText>
        </ServiceItem>
        <ServiceItem>
          <IntegrateIcon size={42} />
          <ServiceTitle>Aggregation</ServiceTitle>
          <ServiceText>
            Integrate other financial providers to your account wallet.
          </ServiceText>
        </ServiceItem>
        <ServiceItem>
          <AutomateIcon size={42} />
          <ServiceTitle>Automation</ServiceTitle>
          <ServiceText>
            Set up recurring payments and schedule regular transactions.
          </ServiceText>
        </ServiceItem>
        <ServiceItem>
          <MoneyIcon size={42} />
          <ServiceTitle>Payments</ServiceTitle>
          <ServiceText>Send money to friends and family with ease.</ServiceText>
        </ServiceItem>
        <ServiceItem>
          <GiftIcon size={42} />
          <ServiceTitle>Rewards</ServiceTitle>
          <ServiceText>
            Get bonuses and discount points every time you complete a transaction.
          </ServiceText>
        </ServiceItem>
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

const NotificationsIcon = styled(BellRing)`
color: ${props => props.theme.color.secondary};
margin: 0;
`

const SecurityIcon = styled(Security)`
color: ${props => props.theme.color.secondary};
margin: 0;
`

const AutomateIcon = styled(Auto)`
color: ${props => props.theme.color.secondary};
margin: 0;
`

const IntegrateIcon = styled(Link)`
  color: ${props => props.theme.color.secondary};
  margin: 0;
`

const MoneyIcon = styled(FileInvoiceDollar)`
  color: ${props => props.theme.color.secondary};
  margin: 0;
`

const GiftIcon = styled(Gift)`
  color: ${props => props.theme.color.secondary};
  margin: 0;
`