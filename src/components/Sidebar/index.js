import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu, MdLink } from 'react-icons/md';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';

import { Toggler, Container } from './styles';

export default function Sidebar() {
    const [toggleState, setToggleState] = useState(false);

    function handleSidebarToggle() {
        setToggleState(!toggleState);
    }

    return (
        <>
            <Toggler mobileVisible={toggleState} onClick={handleSidebarToggle}>
                <MdMenu />
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
                    <a
                        className="social"
                        href="https://eduardojm.github.io/"
                        target="blank"
                    >
                        <MdLink />
                    </a>
                    <a
                        className="social"
                        href="https://www.instagram.com/edu.js.o/"
                        target="blank"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        className="social"
                        href="https://www.linkedin.com/in/edujso"
                        target="blank"
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        className="social"
                        href="https://github.com/eduardojm/"
                        target="blank"
                    >
                        <FaGithub />
                    </a>
                </div>
                <h3>Código-Fonte</h3>
                <div className="social-area">
                    <a
                        className="social"
                        href="https://github.com/EduardoJM/apollo-gallery"
                        target="blank"
                    >
                        <FaGithub />
                    </a>
                </div>
            </Container>
        </>
    );
}
