import React from 'react';
import { Link } from 'react-router-dom';
import { FaRocket } from 'react-icons/fa';

import Container from './styles';

export default function NotFound() {
    return (
        <Container>
            <FaRocket />
            <h1>Ops!</h1>
            <h2>Parece que o conteúdo que estava procurando não foi embarcado...</h2>
            <h3>
                <Link to="/">Início</Link>
            </h3>
        </Container>
    );
}
