import React, { useState, useEffect } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Container, ImageList } from './styles';
import Image from '../Image';
import Pagination from '../Pagination';

export default function GalleryBaseComponent({ identifier, shortIdentifier, valids }) {
    const { id, page } = useParams();
    const [total, setTotal] = useState(0);
    const [invalidPage, setInvalidPage] = useState(false);
    const [images, setImages] = useState([]);

    useEffect(() => {
        async function loadPagination() {
            const response = await fetch(`https://cdn.jsdelivr.net/gh/eduardojm/apollo-gallery-scrap@v1.0.3/storage/${identifier}/${id}/pagination.json`);
            const { count } = await response.json();
            if (page > count) {
                setInvalidPage(true);
                return;
            }
            setTotal(count);
        }

        loadPagination();
    }, [id, page, identifier]);

    useEffect(() => {
        if (total <= 0) {
            return;
        }

        async function loadImages() {
            const response = await fetch(`https://cdn.jsdelivr.net/gh/eduardojm/apollo-gallery-scrap@v1.0.3/storage/${identifier}/${id}/${page}.json`);
            const data = await response.json();
            setImages(data);
        }

        loadImages();
    }, [total, id, page, identifier]);

    if (page == null || page === undefined || page <= 0 || invalidPage) {
        return <Redirect to={`/${shortIdentifier}/${id}/1`} />;
    }
    if (!valids.includes(id)) {
        return <Redirect to={`/${shortIdentifier}`} />;
    }
    return (
        <>
            {images.map((gallery) => (
                <Container key={gallery.title}>
                    <h2>{gallery.title}</h2>
                    <ImageList>
                        {gallery.images.map((img) => (
                            <Image
                                key={img.id}
                                id={img.id}
                                credits={img.credits}
                                description={img.description}
                                date={img.date}
                                uri={img.links.standard}
                                linkPrefix={`/${shortIdentifier}/${id}/${page}`}
                            />
                        ))}
                    </ImageList>
                    <Pagination current={parseInt(page, 10)} count={total} prefix={`/${shortIdentifier}/${id}/`} />
                </Container>
            ))}
        </>
    );
}

GalleryBaseComponent.propTypes = {
    identifier: PropTypes.string.isRequired,
    shortIdentifier: PropTypes.string.isRequired,
    valids: PropTypes.array.isRequired,
};
