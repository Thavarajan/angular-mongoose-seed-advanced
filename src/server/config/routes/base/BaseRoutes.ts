import express = require('express');
import HeroRoutes = require('./../HeroRoutes');
import SpartanRoutes = require('./../SpartanRoutes');
class BaseRoutes {
  api = 'api';
  get routes() {
    var app = express();
    app.use(`/${this.api}/`, new HeroRoutes().routes);
    app.use(`/${this.api}/`, new SpartanRoutes().routes);
    return app;
  }
}
export = BaseRoutes;
