import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket, FaRegImages, FaSatellite, FaMobileAlt } from 'react-icons/fa';

import Container from './styles';

import about from './text';

export default function Home() {
    return (
        <Container>
            <header>
                <FaRocket />
                <div>
                    <h1>Galeria de Imagens</h1>
                    <h2>Missão Apollo</h2>
                </div>
            </header>
            <div className="gallery-block">
                <h2>Galerias</h2>
                <div className="gallery-item">
                    <div className="gallery-image galleries" />
                    <div className="gallery-text">
                        <h3>Galerias</h3>
                        <h4>Ordenadas por missão</h4>
                        <div>
                            <Link to="/g">Ver Galerias</Link>
                        </div>
                    </div>
                </div>
                <div className="gallery-item">
                    <div className="gallery-text">
                        <h3>Magazines</h3>
                        <h4>Rolos de câmeras Hasselblad</h4>
                        <div>
                            <Link to="/m">Ver Magazines</Link>
                        </div>
                    </div>
                    <div className="gallery-image magazines" />
                </div>
                <h2>Sobre</h2>
            </div>
            <div className="about-block">
                {about.map((text) => (
                    <p key={text}>{text}</p>
                ))}
            </div>
            <div className="gallery-block">
                <h2>Funcionalidades</h2>
            </div>
            <div className="icons-block">
                <div className="icon">
                    <FaRegImages />
                    <span>
                        Galerias ordenadas por programa, missão e rolos de câmeras disponíveis.
                    </span>
                </div>
                <div className="icon">
                    <FaSatellite />
                    <span>
                        Imagens carregadas diretamente do site da NASA.
                    </span>
                </div>
                <div className="icon">
                    <FaMobileAlt />
                    <span>
                        Interface ajustada para visualização em smartphones.
                    </span>
                </div>
            </div>
        </Container>
    );
}
