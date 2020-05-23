import React from 'react';
import GalleryBaseComponent from '../../components/GalleryBaseComponent';

import { validGalleries } from '../../utils';

export default function Gallery() {
    return (
        <GalleryBaseComponent
            identifier="galleries"
            shortIdentifier="g"
            valids={validGalleries}
        />
    );
}
