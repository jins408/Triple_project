import styled, { keyframes } from "styled-components";

import { colors } from "../style/style.js";

import TripLogo from "../assets/triple2x.png";

const animation = keyframes`
    0% {
        opacity: 0;
        transform: translate(0, 2%); 
    }
    100% {
        opacity: 1;
        transform: translate(0, 0);
    }
`;

export const MainWrapper = styled.div`
    width: 100%;
    height: 552px;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

export const TripLogoWrapper = styled.div`
    width: 400px;
    height: 338px;
    background: url(${TripLogo});
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 280px;
    text-align: center;
    font-size: 15px;
    color: ${colors['1']};
    animation: ${animation} 700ms ease-in-out 0s;
`;

export const MainRight = styled.div`
    width: 417px;
    display: flex;
    flex-direction: column;
    margin-top: -85px;
`;

export const CountingWrapper = styled.div`
    width: 417px;
    height: 190px;
    animation: ${animation} 700ms ease-in-out 0s;
    margin-bottom: ${props => (props.state < 2 && '84px')};
`;

export const CountingText = styled.div`
    font-size: 36px;
    margin-bottom: 20px;
    color: ${colors['0']};
`;

export const StoreWrapper = styled.div`
    width: 417px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 30px;
    animation: ${animation} 700ms ease-in-out 0s;
`;

export const PlayStore = styled.div`
    width: 54px;
    height: 54px;
    background: url(${(props) => props.src});
    background-size: cover;
    background-repeat: no-repeat;
`;

export const StoreText = styled.div`
    color: ${colors['2']};
    font-size: 14px;
    font-weight: bold;
    line-height: 22px;
    margin-left: 8px;
`;