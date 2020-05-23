import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Container from './styles';

export default function GalleryImage({
    id,
    title,
    image,
    linkPrefix,
}) {
    return (
        <Container image={image}>
            <h2>
                <Link to={`${linkPrefix}/${id}`}>{title}</Link>
            </h2>
            <h3>{id}</h3>
            <Link to={`${linkPrefix}/${id}`}>
                <div className="image-container" />
            </Link>
            <div className="bottom-marker" />
        </Container>
    );
}

GalleryImage.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    image: PropTypes.string.isRequired,
    linkPrefix: PropTypes.string.isRequired,
};

GalleryImage.defaultProps = {
    title: '',
};
