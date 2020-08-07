import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    > h1 {
        margin: 20px 0;
        text-align: center;
        font-size: 24px;
    }
`;

export const GalleryContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-evenly;
`;
