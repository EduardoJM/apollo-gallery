import styled from 'styled-components';

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
