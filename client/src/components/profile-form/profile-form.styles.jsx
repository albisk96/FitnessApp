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
    width: 100%;
    height: auto !important;
    position: absolute;
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(23,23,23,1) 31%, rgba(20,20,20,1) 62%, rgba(0,0,0,1) 93%);
    margin-bottom: -5px;
    margin-top: -5px;
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    -webkit-background-size: cover;
   -moz-background-size: cover;
   background-size: cover;
   -o-background-size: cover;
`;