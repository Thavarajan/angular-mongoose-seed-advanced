//import { serveAPI } from '../../../src/server/index';
import { Task } from '../task';
import Config from '../../config';
import { spawn, SpawnOptions } from 'child_process';
import { realpathSync } from 'fs';
let node: any;
export =
  function start_dev_api_server() {
    let opt: SpawnOptions = {};
    opt.stdio = 'inherit';
    if (node)
      node.kill();
    node = spawn(`node`, [`${realpathSync(Config.APP_API_DEST)}\\index.js`], opt);
  };

