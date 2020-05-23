import styled from 'styled-components';

export const AppContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 200px;

    @media screen and (max-width: 700px) {
        padding-left: 0;
        padding-top: 60px;
    }
`;

export const AppContent = styled.div`
    flex: 1;
`;
