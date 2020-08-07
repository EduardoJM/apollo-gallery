import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import GalleriesList from './pages/GalleriesList';
import Gallery from './pages/Gallery';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/g" exact>
                <GalleriesList identifier="g" />
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
                <GalleriesList identifier="m" />
            </Route>
            <Route path="/m/:id" exact>
                <Gallery identifier="m" />
            </Route>
            <Route path="/m/:id/:page" exact>
                <Gallery identifier="m" />
            </Route>
            <Route path="/m/:id/:page/:photo" exact>
                <Gallery identifier="m" />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}
