import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 10px;

    margin-bottom: 30px;
    
    > div {
        > a, > span {
            display: block;
            padding: 4px;
            margin: 0 5px;
        }

        > span {
            color: #FFF;
            background: #7c8081;
            border-radius: 4px;
        }

        > a {
            text-decoration: none;
            color: #555;

            &:hover {
                background: #999;
                color: #FFF;
                border-radius: 4px;
            }
        }
    }
`;

export default Container;
