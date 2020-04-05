import styled from 'styled-components';

import { Jumbotron, Tabs, Tab, Nav } from 'react-bootstrap'

export const JumboContainer = styled(Jumbotron)`
    width: 100vw;
    height: 40%;
    padding: 0;
    margin: 0;
    position: absolute;
    background-image: url("https://picsum.photos/id/1021/1800/500");
    border-top-width: 0;
    border-bottom-width: 2px;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
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
    margin-top: 10%;
`;

export const ProfileInfoContainer = styled(Jumbotron)`
    position: absolute;
    background: white;
    border-radius:20px!important;
    width: 65%;
    background-size: cover;
    margin-top: 60vh;
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
`
