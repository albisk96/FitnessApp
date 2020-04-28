import styled from 'styled-components';
import { Jumbotron, Tabs, Tab, Nav } from 'react-bootstrap'
import Background from '../../img/background.jpg';

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

export const Center = styled.div`
    display: block;
    text-align: -webkit-center;
`;

export const Avatar = styled.img`
    width: 300px;
    height: 300px;
    margin-right: 15px;
    border: 0;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
`;

export const ProfileInfoContainer = styled(Jumbotron)`
    color: white;
    background: #000000ab;
    border-radius:20px!important;
    background-size: cover;
    margin-top: 5%;
`;

export const Line = styled.hr`
    width: 50%;
    color: white;
`;

export const PortfolioContainer = styled.div`
    justify-content: space-between;
    margin: 0 40%;
    display: flex;
`;

export const BackgroundImage = styled(Jumbotron)`
    border: 0px;
    height: 95vh;
    margin-top: -5px;
    margin-bottom: -5px;
    background-image: url('https://images.pexels.com/photos/685530/pexels-photo-685530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
`;
