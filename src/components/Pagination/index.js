import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Container from './styles';

export default function Pagination({ current, count, prefix }) {
    const [pages, setPages] = useState([]);

    useEffect(() => {
        const data = [];
        for (let i = 1; i <= count; i += 1) {
            const obj = {
                page: i,
                url: `${prefix}${i}`,
                isCurrent: (current === i),
            };
            data.push(obj);
        }
        setPages(data);
    }, [current, count, prefix]);

    return (
        <Container>
            {pages.map((p) => (
                <div key={p.page}>
                    {!p.isCurrent && (
                        <Link to={p.url}>{p.page}</Link>
                    )}
                    {p.isCurrent && (
                        <span>{p.page}</span>
                    )}
                </div>
            ))}
        </Container>
    );
}

Pagination.propTypes = {
    current: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
    prefix: PropTypes.string.isRequired,
};
