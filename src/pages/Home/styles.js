import styled from 'styled-components';

const Container = styled.div`
    header {
        padding: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin-bottom: 100px;
        color: #000;

        > svg {
            width: 86px;
            margin-right: 20px;
        }

        > div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;

            h1 {
                font-size: 24px;
                font-weight: normal;
            }

            h2 {
                font-size: 18px;
                font-weight: 100;
            }
        }
    }

    .icons-block {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        align-items: baseline;

        > .icon {
            flex: 0 0 33.33%;
            padding: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: baseline;

            > svg {
                height: 150px;
                margin: 20px 0;
            }

            > span {
                padding: 10px 40px;
                text-align: center;
                font-weight: 100;
            }
        }
    }

    .gallery-block {
        width: 100%;
        display: flex;
        flex-direction: column;

        h2 {
            text-align: center;
            font-size: 32px;
            font-weight: normal;
            padding: 30px 0;
        }

        > .gallery-item {
            display: flex;
            flex-direction: row;

            > .gallery-image {
                width: 60%;
                height: 400px;
                background-size: cover;
                background-position: center;

                &.galleries {
                    background-image: url(https://www.hq.nasa.gov/office/pao/History/alsj/a11/ap11-69-HC-616.jpg);
                }

                &.magazines {
                    background-image: url(https://www.hq.nasa.gov/office/pao/History/alsj/a11/AS11-36-5299.jpg);
                }
            }

            > .gallery-text {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                > h3 {
                    font-weight: normal;
                    font-size: 24px;
                }

                > h4 {
                    font-weight: 100;
                    font-size: 18px;
                }

                > div {
                    padding: 20px;

                    > a {
                        text-decoration: none;
                        color: #555;
                        text-transform: uppercase;
                    }
                }
            }
        }
    }

    .about-block {
        margin: 20px 0;
        padding: 20px;

        p {
            text-align: justify;
            font-weight: 100;
            font-size: 18px
        }
    }

    @media screen and (max-width: 900px) {
        .icons-block {
            > .icon {
                flex: 0 0 50%;
            }
        }
    }

    @media screen and (max-width: 500px) {
        .icons-block {
            > .icon {
                flex: 0 0 100%;
            }
        }

        .gallery-block {
            .gallery-item {
                flex-wrap: wrap;

                .gallery-image {
                    width: 100% !important;
                    margin: 10px 0;
                }

                &:last-of-type {
                    flex-direction: column-reverse;
                }
            }
        }
    }
`;

export default Container;
