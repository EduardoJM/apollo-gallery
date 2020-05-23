import React from 'react';
import GalleryBaseComponent from '../../components/GalleryBaseComponent';

import { validMagazines } from '../../utils';

export default function Gallery() {
    return (
        <GalleryBaseComponent
            identifier="magazines"
            shortIdentifier="m"
            valids={validMagazines}
        />
    );
}
