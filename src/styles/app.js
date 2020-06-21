import styled from 'styled-components';

const AppContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding-left: 200px;

    .content {
        flex: 1;
    }

    @media screen and (max-width: 700px) {
        padding-left: 0;
        padding-top: 60px;
    }
`;

export default AppContainer;
