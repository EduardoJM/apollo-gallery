import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;

    .header {
        padding: 10px;
        display: flex;
        flex-direction: row;
        align-items: center;

        a {
            color: #555;
            margin-right: 15px;

            svg {
                width: 32px;
                height: 32px;
            }
        }
    }

    .image-container {
        width: 100%;
        height: 600px;
        background-image: url(${(props) => props.image});
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }

    .credits-line {
        display: flex;
        flex-direction: row;
        align-items: center;

        span {
            margin-right: 10px;

            &.fit{
                flex: 1;
            }
        }

        a {
            color: currentColor;
            margin-right: 10px;

            svg {
                width: 32px;
                height: 32px;
            }
        }
    }

    p {
        font-weight: 100;
    }
`;

export default Container;
