//import { serveAPI } from '../../../src/server/index';
import { Apiserver } from './express-api';
import { Task } from '../task';
export =
  function run() {
    let app = Apiserver.getApiconfig();
    var port = parseInt(process.env.PORT, 10) || 5000;
    console.log('port :' + port);
    app.set('port', port);
    app.listen(port, () => {
      console.log('Mongo Api server is running at localhost:' + port);
    });
  };

// export let serveApiTask = new ApiTask();

