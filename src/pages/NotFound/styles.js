import styled from 'styled-components';

const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    i.libre {
        width: 256px;
        height: 256px;
        margin-bottom: 20px;

        svg {
            width: 256px !important;
            height: 256px !important;
        }
    }

    h1 {
        font-size: 32px;
        font-weight: normal;
        margin-bottom: 10px;
        text-align: center;
    }

    h2, h3 {
        font-size: 24px;
        font-weight: 100;
        margin-bottom: 10px;
        text-align: center;

        a {
            text-decoration: none;
            color: #555;
        }
    }

    @media screen and (max-width: 700px) {
        height: auto;
        padding-top: 100px;
    }
`;

export default Container;
