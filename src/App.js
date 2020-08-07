import React from 'react';
import { HashRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import AppContainer from './styles/app';
import Sidebar from './components/Sidebar';

import Routes from './routes';

function App() {
    return (
        <>
            <AppContainer>
                <HashRouter>
                    <Sidebar />
                    <div className="content">
                        <Routes />
                    </div>
                </HashRouter>
            </AppContainer>
            <GlobalStyle />
        </>
    );
}

export default App;
