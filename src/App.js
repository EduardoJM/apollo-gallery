import React from 'react';
import { HashRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import { AppContainer, AppContent } from './styles/app';
import Sidebar from './components/Sidebar';

import Routes from './routes';

function App() {
    return (
        <>
            <AppContainer>
                <HashRouter>
                    <Sidebar />
                    <AppContent>
                        <Routes />
                    </AppContent>
                </HashRouter>
            </AppContainer>
            <GlobalStyle />
        </>
    );
}

export default App;
