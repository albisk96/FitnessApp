import styled from 'styled-components';
import Background from '../../img/dumbbell.jpg';
import { Jumbotron, Tabs, Tab, Nav } from 'react-bootstrap'

export const JumboContainer = styled.div`
   width: 100%;
    height: 100vh;
    position: absolute;
    background-image: url(${Background});
    margin-bottom: -5px;
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    overflow: auto;
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

export const PlanContainer = styled(Jumbotron)`
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
`;

export const PortfolioContainer = styled.div`
    justify-content: space-between;
    margin: 0 40%;
    display: flex;
`;

export const StyledWrap = styled(Nav)`
    color: black;
`;

export const BackgroundImage = styled(Jumbotron)`
    border: 0px;
    height: 140vh;
    margin-top: -5px;
    margin-bottom: -5px;
    background-image: url('https://images.pexels.com/photos/685530/pexels-photo-685530.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
`;

