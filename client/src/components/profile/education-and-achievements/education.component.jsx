import React from 'react';
import Moment from 'react-moment';
import { TimeLineContainer, Container, LeftContainer, RightContainer, ContentContainer, BigText } from './dateflow.styles.jsx'

const Experience = ({ education }) => {
    return(
        <div>
            <TimeLineContainer>
            {education.map((e, index) => (
                <Container key={index + 1}>
                {index % 2 ? 
                    <RightContainer>
                    <ContentContainer>
                        <BigText>
                        <Moment format="YYYY/MM - ">{e.from}</Moment>
                        {!e.to ? 
                            'Now' :
                        <Moment format="YYYY/MM">{e.to}</Moment>
                        }
                        </BigText>
                        <p>Degree: {e.degree}</p>
                        <p>Description: {e.description}</p>
                    </ContentContainer>
                </RightContainer>
                :
                <LeftContainer>
                <ContentContainer>
                    <BigText>
                    <Moment format="YYYY/MM - ">{e.from}</Moment>
                    {!e.to ? 
                        'Now' :
                    <Moment format="YYYY/MM">{e.to}</Moment>
                    }
                    </BigText>
                    <p>Degree: {e.degree}</p>
                    <p>Description: {e.description}</p>
                </ContentContainer>
            </LeftContainer> 
                }
                
            </Container>
            ))}
            </TimeLineContainer>
        </div>
    )
}

export default Experience;