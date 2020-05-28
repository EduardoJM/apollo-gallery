import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const ScrollToTop = ({ children, location }) => {
    const [oldLocation, setOldLocation] = useState(location);
    useEffect(() => {
        if (location !== oldLocation) {
            window.scrollTo(0, 0);
            setOldLocation(location);
        }
    }, [location, oldLocation]);

    return (
        <>
            {children}
        </>
    );
};

ScrollToTop.propTypes = {
    children: PropTypes.array,
    location: PropTypes.object,
};

ScrollToTop.defaultProps = {
    children: null,
    location: null,
};

export default withRouter(ScrollToTop);
