import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import GalleryImage from '../../components/GalleryImage';
import { Container, GalleryContainer } from './styles';

export default function GalleryList({ identifier }) {
    const [galleries, setGalleries] = useState([]);
    const title = identifier === 'g' ? 'Galerias' : 'Magazines';

    useEffect(() => {
        async function loadPage() {
            const identifierStr = identifier === 'g' ? 'galleries' : 'magazines';
            const response = await fetch(`https://cdn.jsdelivr.net/gh/eduardojm/apollo-gallery-scrap@v1.0.3/storage/${identifierStr}.json`);
            const data = await response.json();
            const mapedData = data.map((gallery) => {
                const index = Math.floor(Math.random() * gallery.thumbs.length);
                return {
                    id: gallery.id.replace('/', '-'),
                    title: gallery.title,
                    thumb: gallery.thumbs[index],
                };
            });
            setGalleries(mapedData);
        }

        loadPage();
    }, [identifier]);

    if (identifier !== 'g' && identifier !== 'm') {
        return <Redirect to="/" />;
    }

    return (
        <Container>
            <h1>{title}</h1>
            <GalleryContainer>
                {galleries.map((gallery) => (
                    <GalleryImage
                        key={gallery.id}
                        id={gallery.id}
                        title={gallery.title}
                        image={gallery.thumb}
                        linkPrefix={`/${identifier}`}
                    />
                ))}
            </GalleryContainer>
        </Container>
    );
}

GalleryList.propTypes = {
    identifier: PropTypes.string.isRequired,
};
