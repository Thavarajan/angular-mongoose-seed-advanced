import express = require('express');
import HeroRoutes = require('./../HeroRoutes');
import SpartanRoutes = require('./../SpartanRoutes');
var app = express();
class BaseRoutes {
    api='api';
    get routes() {
        app.use(`/${this.api}/`, new HeroRoutes().routes);
        app.use(`/${this.api}/`, new SpartanRoutes().routes);
        return app;
    }
}
export = BaseRoutes;
