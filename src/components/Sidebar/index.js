import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdMenu, MdLink } from 'react-icons/md';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTransition } from 'react-spring';

import { Toggler, Container } from './styles';

export default function Sidebar() {
    const [visible, setVisible] = useState(false);
    const transitions = useTransition(visible, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });

    function handleSidebarToggle() {
        setVisible(!visible);
    }

    return (
        <div>
            <Toggler visible={visible} onClick={handleSidebarToggle}>
                <MdMenu />
            </Toggler>
            {transitions.map(({ item, key, props }) => item && (
                <Container key={key} style={props}>
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
            ))}
        </div>
    );
}
