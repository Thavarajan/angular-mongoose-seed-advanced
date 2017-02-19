import express = require('express');
import { Server } from 'http';

export class Apiserver {
  public static API_APP = express();
  public static server: Server;
}
