//import { serveAPI } from '../../../src/server/index';
import { API_APP } from './express-api';
import { Task } from '../task';
import Middlewares = require('../../../src/server/config/middlewares/base/MiddlewaresBase');
export =
  function run() {
    let app = API_APP;
    var port = parseInt(process.env.PORT, 10) || 5000;
    console.log('port :' + port);
    app.set('port', port);
    app.use(Middlewares.configuration);
    app.listen(port, () => {
      console.log('Mongo Api server is running at localhost:' + port);
    });
  };

// export let serveApiTask = new ApiTask();

