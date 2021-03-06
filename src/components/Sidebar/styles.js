import styled, { css } from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled(animated.div)`
    width: 200px;
    height: 100vh;
    position: fixed;
    background: #fff;
    left: 0;
    top: 0;

    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;

    padding: 10px 20px;

    z-index: 50;

    a.social {
        width: 42px;
        height: 42px;
        margin: 0 5px !important;
        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            width: 32px;
            height: 32px;
            max-width: 32px;
            fill: #555;
        }
    }

    @media screen and (max-width: 700px) {
        width: 300px;
        padding-top: 80px;
        justify-content: flex-start;
    }

    @media screen and (max-width: 300px) {
        width: 200px;
    }

    > h3 {
        font-size: 14px;
        font-weight: 100;
        margin-bottom: 10px;
        text-transform: uppercase;
    }

    > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-bottom: 30px;

        a {
            color: #555;
            text-decoration: none;
            margin: 5px 0;
        }

        &.social-area {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;
            align-items: center;
        }
    }
`;

export const Toggler = styled.button`
    position: fixed;
    left: 10px;
    top: 10px;
    z-index: 100;
    border: 0;
    background: transparent;
    cursor: pointer;
    color: #555;
    background: #FFF;
    padding: 5px;
    border-radius: 4px;

    ${(props) => props.visible && css`
        @media screen and (max-width: 700px) {
            svg {
                transform: rotate(-90deg);
            }
        }
    `}

    svg {
        width: 32px;
        height: 32px;
        fill: #555;
        transition: ease 0.5s;
    }
`;
