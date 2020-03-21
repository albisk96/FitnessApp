import styled from 'styled-components';

export const TimeLineContainer = styled.div`
position: relative;
max-width: 1200px;
margin: 0 auto;
::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: white;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
}
    @media screen and (max-width: 600px) {
        ::after {
        left: 31px;
      }
    }
`;

export const Container = styled.div`
padding: 10px 40px;
position: relative;
background-color: inherit;
width: 50%;
::after{
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: -13px;
    background-color: white;
    border: 4px solid #FF9F55;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
}
    @media screen and (max-width: 600px) {
        width: 100%;
        padding-left: 70px;
        padding-right: 25px;
        ::after {
            left: 20px;
            content: '';
            position: absolute;
            width: 25px;
            height: 25px;
            background-color: white;
            border: 4px solid #FF9F55;
            top: 15px;
            border-radius: 50%;
            z-index: 1;
        }
    }
`;

export const LeftContainer = styled.div`
left: 0;
::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    right: 30px;
    border: medium solid white;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent white;
}
    @media screen and (max-width: 600px) {
        ::after{
            left: 15px;
        }
    }
`;

export const RightContainer = styled.div`
width: 24vw;
margin-left: 122%;
::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    margin-left: 104%;
    z-index: 1;
    left: 30px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
}
::after {
    left: -16px;
}
    @media screen and (max-width: 600px) {
        left: 0%;
        width: auto;
        margin-left: 0;
        ::after{
            left: 15px;
        }
    }
`;

export const ContentContainer = styled.div`
    padding: 20px 30px;
    background-color: white;
    position: relative;
    border-radius: 6px;
`;
