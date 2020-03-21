import React from 'react';
import { TimeLineContainer, Container, LeftContainer, RightContainer, ContentContainer } from './experience.styles.jsx'

const Experience = () => {
    return(
        <div>
            <TimeLineContainer>
                <Container>
                    <LeftContainer>
                        <ContentContainer>
                            <h2>2017</h2>
                            <p>Lorem ipsum..</p>
                        </ContentContainer>
                    </LeftContainer>
                </Container>
                <Container>
                    <RightContainer>
                        <ContentContainer>
                            <h2>2017</h2>
                            <p>Lorem ipsum..</p>
                        </ContentContainer>
                    </RightContainer>
                </Container>
                <Container>
                    <LeftContainer>
                        <ContentContainer>
                            <h2>2017</h2>
                            <p>Lorem ipsum..</p>
                        </ContentContainer>
                    </LeftContainer>
                </Container>
            </TimeLineContainer>
        </div>
    )
}

export default Experience;