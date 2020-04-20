import styled from 'styled-components';

import { Jumbotron, CardColumns, Tab, Nav } from 'react-bootstrap'

export const ContainerOne = styled(Jumbotron)`
    border: 0px;
    height: 95vh;
    margin-top: -5px;
    margin-bottom: -5px;
    background-image: url('https://images.pexels.com/photos/116077/pexels-photo-116077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
`;

export const ContainerTwo = styled(Jumbotron)`
    border: 0px;
    height: 95vh;
    margin-bottom: -5px;
    background-image: url('https://images.pexels.com/photos/416778/pexels-photo-416778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
`;

export const ContainerThree = styled(Jumbotron)`
    border: 0px;
    height: 80vh;
    margin-bottom: -5px;
    background-image: url('https://images.pexels.com/photos/1862785/pexels-photo-1862785.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
`;

export const TextDialogForAthlete = styled(Jumbotron)`
    opacity: 0.9;
    color: white;
    width: 35vw;
    margin: 10%;
    background: #0b0b0b;
`;

export const Chip = styled.div`
  display: inline-block;
  margin: 10px 5px;
  padding: 0 30px;
  height: 50px;
  font-size: 16px;
  line-height: 50px;
  border-radius: 25px;
  background-color: #c25454;
  color: white;
`;

export const TextDialogForCoach = styled(Jumbotron)`
    opacity: 0.9;
    color: white;
    width: 35vw;
    margin: 5% 50%;
    background: #0b0b0b;
`;
