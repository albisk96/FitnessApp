import React, {Fragment} from 'react';
import Moment from 'react-moment';
import { Badge } from 'react-bootstrap'
import { TimeLineContainer, Container, LeftContainer, RightContainer, ContentContainer, BigText } from './dateflow.styles.jsx'
import { connect } from 'react-redux';
import { deleteAchievements } from '../../../redux/profile/api';

const Achievements = ({ achievements }) => {
    return(
        <div>
            <TimeLineContainer>
            {achievements.map((a, index) => (
                <Container key={index + 1}>
                {index % 2 ? 
                    <RightContainer>
                    <ContentContainer>
                        <BigText>
                        <Moment format="YYYY">{a.date}</Moment>
                        </BigText>
                        <p>Achievement: {a.title}</p>
                    </ContentContainer>
                </RightContainer>
                :
                <LeftContainer>
                <ContentContainer>
                    <BigText>
                    <Moment format="YYYY">{a.date}</Moment>
                    </BigText>
                    <p>Achievement: {a.title}</p>
                </ContentContainer>
            </LeftContainer> 
                }
            </Container>
            ))}
            </TimeLineContainer>
        </div>
    )
}

export default connect(null, {deleteAchievements})(Achievements);