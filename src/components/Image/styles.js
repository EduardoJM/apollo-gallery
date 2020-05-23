import styled from 'styled-components';

const Container = styled.div`
    flex: 0 0 calc(33.33% - 50px);
    margin-bottom: 60px;

    @media screen and (max-width: 900px) {
        flex: 0 0 calc(50% - 50px);
    }

    @media screen and (max-width: 500px) {
        flex: 0 0 calc(100% - 50px);
    }

    > .header {
        height: 40px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-end;
        overflow: hidden;

        > h3 {
            font-weight: 100;
            font-size: 14px;
            text-align: right;
            margin: 5px 0;

            &:not(:first-of-type)::before {
                content: '-   ';
                margin-left: 6px;
            }
        }
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

    .image-container {
        width: 100%;
        height: 260px;
        background: ${(props) => `url(${props.image})`};
        background-position: center;
        background-size: cover;
        box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.6);
    }

    span {
        font-weight: 200;
        font-size: 13px;
    }
`;

export default Container;
