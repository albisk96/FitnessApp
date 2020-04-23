import styled from 'styled-components';
import { Button, Jumbotron } from 'react-bootstrap';

export const FormContainer = styled.div`
    width: 50%;
    margin-left: 25%;
    margin: -3% 25%;
`;
export const SubmitButton = styled(Button)`
    margin: 5% 35%;
`;

export const Center = styled.div`
    display: block;
    text-align: -webkit-center;
`;

export const JumboContainer = styled(Jumbotron)`
    position: absolute;
    color: white;
    background: #000000ab;
    border-radius:20px!important;
    border: 1px solid #00000030;
    width: 65%;
    background-size: cover;
    margin-top: 1%;
`;