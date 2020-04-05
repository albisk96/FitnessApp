import styled from 'styled-components';
import { Button, Jumbotron } from 'react-bootstrap';

export const FormContainer = styled.div`
    width: 50%;
    margin-left: 25%;
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
    background: #F7F7F7;
    border-radius:20px!important;
    width: 65%;
    background-size: cover;
    margin-top: 5%;
`;