import styled from 'styled-components';
import { Card } from 'react-bootstrap';

export const Avatar = styled.img`
    width: 100px;
    height: 100px;
    margin-right: 15px;
    border: 0;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
`;

export const CardBody = styled(Card.Body)`
    display: flex;
`;

export const CardComponent = styled(Card)`
    margin: 5%;
    background-color: #f7f7f7;
`;

export const Rating = styled.div`
    display: block;
    text-align: -webkit-center;
    font-size: 1.25rem;
`; 

export const ReviewText = styled.div`
    margin-left: 25px;
`;

export const Average = styled.div`
    font-size: 3.75rem;
    text-align: -webkit-center;
    display: flex;
    margin-top: 4%;
`;

export const Stars = styled.div`
    display: block;
    text-align: -webkit-center;
    display: flex;
    margin-left: 25%;
`;

export const CommentContainer = styled.div`
    width: 50%;
    margin-left: 25%;
    margin-top: 5%;
    display: block;
    text-align: -webkit-center;
    margin-bottom: 3%;
`;

export const Line = styled.hr`
    width: 50%;
`;