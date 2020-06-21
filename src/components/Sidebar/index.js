import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Toggler, Container, SocialButton } from './styles';

export default function Sidebar() {
    const [toggleState, setToggleState] = useState(false);

    function handleSidebarToggle() {
        setToggleState(!toggleState);
    }

    return (
        <>
            <Toggler mobileVisible={toggleState} onClick={handleSidebarToggle}>
                <i className="libre" data-icon="gui-menu" data-color="true" />
            </Toggler>
            <Container mobileVisible={toggleState}>
                <h3>O Site</h3>
                <div>
                    <Link to="/">Início</Link>
                </div>
                <h3>Galerias Disponíveis</h3>
                <div>
                    <Link to="/g">Galerias</Link>
                    <Link to="/m">Rolos de Câmera</Link>
                </div>
                <h3>Criador</h3>
                <div className="social-area">
                    <SocialButton href="https://eduardojm.github.io/" target="blank">
                        <i className="libre" data-icon="gui-link" />
                    </SocialButton>
                    <SocialButton href="https://www.instagram.com/edu.js.o/" target="blank">
                        <i className="libre" data-icon="social-instagram" />
                    </SocialButton>
                    <SocialButton href="https://www.linkedin.com/in/edujso" target="blank">
                        <i className="libre" data-icon="social-linkedin" />
                    </SocialButton>
                    <SocialButton href="https://github.com/eduardojm/" target="blank">
                        <i className="libre" data-icon="social-github" />
                    </SocialButton>
                </div>
                <h3>Código-Fonte</h3>
                <div className="social-area">
                    <SocialButton href="https://github.com/EduardoJM/apollo-gallery" target="blank">
                        <i className="libre" data-icon="social-github" />
                    </SocialButton>
                </div>
            </Container>
        </>
    );
}
