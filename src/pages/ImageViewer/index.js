import React, { useEffect, useState } from 'react';
import { Redirect, Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import Container from './style';

export default function ImageViewer({ identifier, shortIdentifier, validIds }) {
    const { id, page, photo } = useParams();
    const [data, setData] = useState({});
    const [invalidPage, setInvalidPage] = useState(false);
    const [invalidPhoto, setInvalidPhoto] = useState(false);

    useEffect(() => {
        async function loadContent() {
            if (page <= 0) {
                setInvalidPage(false);
                return;
            }
            const response = await fetch(`https://cdn.jsdelivr.net/gh/eduardojm/apollo-gallery-scrap@v1.0.3/storage/${identifier}/${id}/pagination.json`);
            const { count } = await response.json();
            if (page > count) {
                setInvalidPage(true);
                return;
            }
            const pageResponse = await fetch(`https://cdn.jsdelivr.net/gh/eduardojm/apollo-gallery-scrap@v1.0.3/storage/${identifier}/${id}/${page}.json`);
            const pageData = await pageResponse.json();
            const filtered1 = pageData.filter((gallery) => {
                const inner = gallery.images.filter((image) => image.id === photo);
                return inner.length > 0;
            });
            if (filtered1.length === 0) {
                setInvalidPhoto(true);
                return;
            }
            const filtered2 = filtered1[0].images.filter((image) => image.id === photo);
            if (filtered2.length === 0) {
                setInvalidPhoto(true);
                return;
            }
            setData(filtered2[0]);
        }
        loadContent();
    }, [identifier, id, page, photo]);

    if (!validIds.includes(id)) {
        return <Redirect to={`/${shortIdentifier}`} />;
    }
    if (invalidPage) {
        return <Redirect to={`/${shortIdentifier}/${id}/1`} />;
    }
    if (invalidPhoto) {
        return <Redirect to={`/${shortIdentifier}/${id}/${page}`} />;
    }
    return (
        <Container image={data.links ? data.links.standard : ''}>
            <div className="header">
                <Link to={`/${shortIdentifier}/${id}/${page}`}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" /></svg>
                </Link>
                {data.id && (
                    <span>
                        {data.id}
                    </span>
                )}
            </div>
            <div className="image-container" />
            <div className="credits-line">
                {data.credits && (
                    <span>{data.credits}</span>
                )}
                {data.date && (
                    <span>{data.date}</span>
                )}
                <span className="fit" />
                <a href={data.links ? data.links.standard : '#'} target="blank">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="external-link-square-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z" /></svg>
                </a>
            </div>
            {data.description && (
                <p>
                    {data.description}
                </p>
            )}
        </Container>
    );
}

ImageViewer.propTypes = {
    identifier: PropTypes.string.isRequired,
    shortIdentifier: PropTypes.string.isRequired,
    validIds: PropTypes.array.isRequired,
};
