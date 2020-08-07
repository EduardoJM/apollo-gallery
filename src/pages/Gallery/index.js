import React, { useEffect, useState } from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useTransition } from 'react-spring';
import { MdClose, MdLink } from 'react-icons/md';

import { validGalleries, validMagazines } from '../../utils';
import Image from '../../components/Image';
import Pagination from '../../components/Pagination';
import { Container, ImageList, ModalOverlay } from './styles';

export default function Gallery({ identifier }) {
    const { id, page: initialPage, photo: photoId } = useParams();
    const [total, setTotal] = useState(0);
    const [invalidPage, setInvalidPage] = useState(false);
    const [images, setImages] = useState([]);
    const [photoData, setPhotoData] = useState(null);
    const photoTransitions = useTransition(photoData, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    });
    let page = initialPage;
    if (!page) {
        page = 1;
    }

    useEffect(() => {
        if (total <= 0) {
            return;
        }

        async function loadImages() {
            const completeIdentifier = identifier === 'm' ? 'magazines' : 'galleries';
            const response = await fetch(`https://cdn.jsdelivr.net/gh/eduardojm/apollo-gallery-scrap@v1.0.3/storage/${completeIdentifier}/${id}/${page}.json`);
            const data = await response.json();
            setImages(data);
        }

        loadImages();
    }, [total, id, page, identifier]);

    useEffect(() => {
        async function loadPagination() {
            const completeIdentifier = identifier === 'm' ? 'magazines' : 'galleries';
            const response = await fetch(`https://cdn.jsdelivr.net/gh/eduardojm/apollo-gallery-scrap@v1.0.3/storage/${completeIdentifier}/${id}/pagination.json`);
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
        const filtered1 = images.filter((gallery) => {
            const inner = gallery.images.filter((image) => image.id === photoId);
            return inner.length > 0;
        });
        if (filtered1.length === 0) {
            setPhotoData(null);
            return;
        }
        const filtered2 = filtered1[0].images.filter((image) => image.id === photoId);
        if (filtered2.length === 0) {
            setPhotoData(null);
            return;
        }
        setPhotoData(filtered2[0]);
    }, [photoId, images]);

    if (invalidPage) {
        return <Redirect to={`/${identifier}/${id}`} />;
    }
    if (identifier !== 'g' && identifier !== 'm') {
        return <Redirect to="/" />;
    }
    if (!id) {
        return <Redirect to={`/${identifier}`} />;
    }
    if (identifier === 'm') {
        if (!validMagazines.includes(id)) {
            return <Redirect to={`/${identifier}`} />;
        }
    } else if (!validGalleries.includes(id)) {
        return <Redirect to={`/${identifier}`} />;
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
                                linkPrefix={`/${identifier}/${id}/${page}`}
                            />
                        ))}
                    </ImageList>
                </Container>
            ))}
            <Pagination current={parseInt(page, 10)} count={total} prefix={`/${identifier}/${id}/`} />
            {photoTransitions.map(({ item, key, props }) => item && (
                <ModalOverlay key={key} style={props}>
                    <div className="content">
                        <div
                            className="image-container"
                            style={{
                                backgroundImage: `url(${item.links ? item.links.standard : ''})`,
                            }}
                        />
                        <div className="desc-container">
                            <div className="row">
                                <span>Id: </span>
                                { item.id }
                            </div>
                            {item.credits && (
                                <div className="row">
                                    <span>Créditos: </span>
                                    { item.credits }
                                </div>
                            )}
                            {item.date && (
                                <div className="row">
                                    <span>Data: </span>
                                    { item.date }
                                </div>
                            )}
                            {item.description && (
                                <div className="row">
                                    <span>Descrição: </span>
                                    { item.description }
                                </div>
                            )}
                            <div className="fit" />
                            <div className="row buttons">
                                {item.links && (
                                    <a href={item.links.standard} target="_blank" rel="noreferrer">
                                        <MdLink />
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                    <Link to={`/${identifier}/${id}/${page}`} className="close-button">
                        <MdClose />
                    </Link>
                </ModalOverlay>
            ))}
        </>
    );
}

Gallery.propTypes = {
    identifier: PropTypes.string.isRequired,
};
