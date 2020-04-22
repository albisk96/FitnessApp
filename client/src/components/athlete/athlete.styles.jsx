import styled from 'styled-components';
import { Jumbotron, Tabs, Tab, Nav } from 'react-bootstrap'
import Background from '../../img/background.jpg';

export const JumboContainer = styled(Jumbotron)`
    width: 100%;
    height: 150vh;
    position: absolute;
    background-image: url(${Background});
    margin-bottom: -5px;
    margin-top: -5px;
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
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
    position: absolute;
    color: white;
    background: #000000ab;
    border-radius:20px!important;
    width: 65%;
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
