import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Container, GalleryContainer } from './styles';
import GalleryImage from '../GalleryImage';

export default function GalleryListBaseComponent({ titleText, identifier, shortIdentifier }) {
    const [galleries, setGalleries] = useState([]);

    useEffect(() => {
        async function loadPage() {
            const response = await fetch(`https://cdn.jsdelivr.net/gh/eduardojm/apollo-gallery-scrap@v1.0.3/storage/${identifier}.json`);
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

    return (
        <Container>
            <h1>{titleText}</h1>
            <GalleryContainer>
                {galleries.map((gallery) => (
                    <GalleryImage
                        key={gallery.id}
                        id={gallery.id}
                        title={gallery.title}
                        image={gallery.thumb}
                        linkPrefix={`/${shortIdentifier}`}
                    />
                ))}
            </GalleryContainer>
        </Container>
    );
}

GalleryListBaseComponent.propTypes = {
    titleText: PropTypes.string.isRequired,
    identifier: PropTypes.string.isRequired,
    shortIdentifier: PropTypes.string.isRequired,
};
