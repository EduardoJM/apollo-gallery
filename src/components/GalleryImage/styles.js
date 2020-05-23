import styled from 'styled-components';

const Container = styled.div`
    flex: 0 0 calc(33.33% - 50px);
    margin-bottom: 60px;

    @media screen and (max-width: 800px) {
        flex: 0 0 calc(50% - 50px);
    }

    @media screen and (max-width: 500px) {
        flex: 0 0 calc(100% - 50px);
    }

    > h2 {
        font-weight: normal;
        font-size: 15px;
        text-align: right;
        margin: 5px 0;

        a {
            color: #7c8081;
            text-decoration: none;
        }
    }

    > h3 {
        font-weight: 100;
        font-size: 14px;
        text-align: right;
        margin: 5px 0;
    }

    .image-container {
        width: 100%;
        height: 260px;
        background: ${(props) => `url(${props.image})`};
        background-position: center;
        background-size: cover;
        box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.6);
    }

    > .bottom-marker {
        margin: 0 auto;
        margin-top: 15px;
        width: 60%;
        height: 3px;
        border-radius: 50% 50%;
        background: rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.7);
    }
`;

export default Container;
