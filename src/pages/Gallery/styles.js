import styled from 'styled-components';
import { animated } from 'react-spring';

export const Container = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    > h2 {
        margin: 20px 0;
        text-align: center;
        font-size: 24px;
    }
`;

export const ImageList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: baseline;
    justify-content: space-evenly;
`;

export const ModalOverlay = styled(animated.div)`
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 500;
    background: rgba(0, 0, 0, 0.5);

    padding: 50px 100px;
    
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 900px) {
        padding: 10px !important;
    }

    @media (max-width: 700px) {
        .content {
            flex-direction: column;
        }
    }

    .content {
        background: #FFF;

        width: 100%;
        height: 100%;

        display: flex;
        align-items: stretch;
        justify-content: space-between;

        .image-container {
            flex: 1;

            background-color: #000;

            background-repeat: no-repeat;
            background-size: contain;
            background-position: center;
        }

        .desc-container {
            width: 300px;

            padding: 10px;
            
            display: flex;
            flex-direction: column;
            align-items: stretch;

            .row + .row{
                margin-top: 10px;
            }

            .row {
                span {
                    font-weight: bold;
                }
            }

            .fit {
                flex: 1;
            }

            .buttons a {
                display: flex;
                align-items: center;
                color: #222;
                text-decoration: none;

                svg {
                    margin-right: 5px;
                }
            }
        }
    }

    .close-button {
        position: fixed;
        right: 10px;
        top: 10px;
        width: 32px;
        height: 32px;
        cursor: pointer;
        
        svg {
            width: 32px;
            height: 32px;
            fill: #FFF;
        }
    }
`;
