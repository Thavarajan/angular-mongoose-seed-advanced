import express = require('express');
import { Server } from 'http';
import Middlewares = require('../../../src/server/config/middlewares/base/MiddlewaresBase');

export class Apiserver {
  public static ApIserver: NodeJS.Process;

  public static getApiconfig(): any {
    let API_APP = express();
    // uncomment the below line at the time of prod release
    // API_APP.use(Middlewares.configuration);
    return API_APP;
  }
}
