import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Container from './styles';

export default function Image({
    id,
    credits,
    description,
    date,
    uri,
    linkPrefix,
}) {
    return (
        <Container image={uri}>
            <h2>
                <Link to={`${linkPrefix}/${id}`}>{id}</Link>
            </h2>
            <div className="header">
                {credits && (<h3>{credits}</h3>)}
                {date && (<h3>{date}</h3>)}
            </div>
            <Link to={`${linkPrefix}/${id}`}>
                <div className="image-container" />
            </Link>
            {description && (<span>{description}</span>)}
        </Container>
    );
}

Image.propTypes = {
    id: PropTypes.string.isRequired,
    credits: PropTypes.string,
    description: PropTypes.string,
    date: PropTypes.string,
    uri: PropTypes.string.isRequired,
    linkPrefix: PropTypes.string.isRequired,
};

Image.defaultProps = {
    credits: '',
    description: '',
    date: '',
};
