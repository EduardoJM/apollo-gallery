import React, { useEffect, useState } from 'react';
import { Redirect, Link, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaExternalLinkAlt, FaAngleLeft } from 'react-icons/fa';

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
                    <FaAngleLeft />
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
                    <FaExternalLinkAlt />
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
