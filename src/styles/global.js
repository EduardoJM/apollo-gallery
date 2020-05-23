import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap');
    
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background: #FFF;
        color: #7c8081;
        font-family: 'Roboto', sans-serif;
    }
`;