import React from "react"
import styled, { keyframes } from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { Fade } from "react-reveal"
import AliceCarousel from "react-alice-carousel"
import "./../../styles/aliceCarouselOverride.css"

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(sourceInstanceName: { eq: "product" }, name: { eq: "dream" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      image2: file(sourceInstanceName: { eq: "product" }, name: { eq: "confirmed" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
      image3: file(sourceInstanceName: { eq: "product" }, name: { eq: "card" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <HeaderWrapper id="about">
      <AliceCarousel
        autoplay={true}
        autoPlayInterval={200}
        fadeOutAnimation={false}
        buttonsDisabled={false}
        dotsDisabled={true}
        stopAutoPlayOnHover={false}
        mouseTrackingEnabled
      >
        <Container>
          <Flex>
            <Fade duration={300} left>
              <Text>
                {data.image1.childImageSharp !== null ? (
                  <Float>
                    <StyledImage1 fluid={data.image1.childImageSharp.fluid} />
                  </Float>
                ) : (
                  <span></span>
                )}
                <br />
              </Text>
            </Fade>

            <HeaderTextGroup>
              <Subtitle>
                <Fade duration={300} bottom>
                  Who we are
                </Fade>
              </Subtitle>
              <Fade duration={300} top>
                <h1>
                  Turning dreams
                  <br />
                  into reality
                </h1>
              </Fade>
              <Fade duration={500} clear>
                <h2>
                  We are a professional team based in Kenya dedicated to bettering
                  payment processing to easen the complexity of transactions.
                </h2>
              </Fade>
            </HeaderTextGroup>
          </Flex>
        </Container>
        <Container>
          <Flex>
            <Fade duration={300} left>
              <Text>
                {data.image2.childImageSharp !== null ? (
                  <Float>
                    <StyledImage2 fluid={data.image2.childImageSharp.fluid} />
                  </Float>
                ) : (
                  <span></span>
                )}
                <br />
              </Text>
            </Fade>

            <HeaderTextGroup>
              <Subtitle>
                <Fade duration={300} bottom>
                  What we do
                </Fade>
              </Subtitle>
              <Fade duration={300} top>
                <h1>
                  Providing multiple
                  <br />
                  solutions
                </h1>
              </Fade>
              <Fade duration={500} clear>
                <h2>
                  Our 360 degree solution accommodates mobile money, debit/credit
                  cards and cash deposits, <br />all in a few clicks.
                </h2>
              </Fade>
              
            </HeaderTextGroup>
          </Flex>
        </Container>
        <Container>
          <Flex>
            <Fade duration={300} left>
              <Text>
                {data.image3.childImageSharp !== null ? (
                  <Float>
                    <StyledImage3 fluid={data.image3.childImageSharp.fluid} />
                  </Float>
                ) : (
                  <span></span>
                )}
                <br />
              </Text>
            </Fade>

            <HeaderTextGroup>
              <Subtitle>
                <Fade duration={300} bottom>
                  Why choose us
                </Fade>
              </Subtitle>
              <Fade duration={300} top>
                <h1>
                  Experience amazing
                  <br />
                  products
                </h1>
              </Fade>
              <Fade duration={500} clear>
                <h2>
                  We care about making payment processing easier, faster and more secure.
                  That's why we provide amazing service you can depend on.
                </h2>
              </Fade>
              
            </HeaderTextGroup>
          </Flex>
        </Container>
      </AliceCarousel>
    </HeaderWrapper>
  )
}

export default About

const HeaderWrapper = styled.header`
  background-color: ${props => props.theme.color.background.white};
  padding: 95px 0 50px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.sm}) {
    padding: 100px 0 50px 0;
  }
`

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  margin-top: 70px;
  padding: 0 16px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1200px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
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
  margin: 50px 0 0 8vw;
  text-align: left;
  padding: 0 70px 0 0px;
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
  @media (max-width: ${props => props.theme.screen.md}) {
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

const Text = styled.div`
  justify-self: end;
  align-self: center;
  padding-left: 50px;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage1 = styled(Img)`
  margin-top: -10px;
  width: 455px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`

const StyledImage2 = styled(Img)`
  margin-top: -30px;
  width: 400px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`

const StyledImage3 = styled(Img)`
  margin-top: -20px;
  width: 405px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`
