import styled from 'styled-components';
import { CardColumns, Card } from 'react-bootstrap';

export const CardColumnsContainer = styled(CardColumns)`
    margin-top: 10%;
    padding-bottom: 50px;
`;

export const CardContainer = styled(Card)`
    padding-bottom: 50px;
`;

export const CardImage = styled(Card.Img)`

`;

export const CardBody = styled(Card.Body)`
    height: 15vh;
`;

export const CardFooter = styled(Card.Footer)`
    position: absolute;
    bottom: 0;
    width: 100%;
`;