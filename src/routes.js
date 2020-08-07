import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import GalleriesList from './pages/GalleriesList';
import Gallery from './pages/Gallery';
import MagazineList from './pages/MagazineList';
import Magazine from './pages/Magazine';
import ImageViewer from './pages/ImageViewer';

import { validMagazines, validGalleries } from './utils';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/g" exact>
                <GalleriesList />
            </Route>
            <Route path="/g/:id" exact>
                <Gallery identifier="g" />
            </Route>
            <Route path="/g/:id/:page" exact>
                <Gallery identifier="g" />
            </Route>
            <Route path="/g/:id/:page/:photo" exact>
                <Gallery identifier="g" />
            </Route>
            <Route path="/m" exact>
                <MagazineList />
            </Route>
            <Route path="/m/:id" exact>
                <Magazine />
            </Route>
            <Route path="/m/:id/:page" exact>
                <Magazine />
            </Route>
            <Route path="/m/:id/:page/:photo" exact>
                <ImageViewer identifier="magazines" shortIdentifier="m" validIds={validMagazines} />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}
