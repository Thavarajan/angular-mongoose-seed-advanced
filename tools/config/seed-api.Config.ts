import { argv } from 'yargs';
import { SeedAdvancedConfig } from './seed-advanced.config';
import { BUILD_TYPES } from './seed.config';

export class ServerConfig extends SeedAdvancedConfig {

  /**
   * The directory where the server files are located.
   * The default directory is `server`.
   * @type {string}
   */
  APP_API = argv['server'] || 'server';

  /**
   * The base folder of the server source files.
   * @type {string}
   */
  APP_API_SRC = `src/${this.APP_API}`;

  /**
   * The folder for built server files in the `dev` environment.
   * @type {string}
   */
  DEV_API_DEST = `${this.DIST_DIR}/dev/${this.APP_API}`;

  /**
   * The folder for the built server files in the `prod` environment.
   * @type {string}
   */
  PROD_API_DEST = `${this.DIST_DIR}/prod/${this.APP_API}`;


  /**
   * The folder for the built files in the `prod` environment.
   * @type {string}
   */
  TMP_API_DIR = `${this.DIST_DIR}/tmp/${this.APP_API}`;

  /**
   * The folder for the built files, corresponding to the current environment.
   * @type {string}
   */
  APP_API_DEST = this.BUILD_TYPE === BUILD_TYPES.DEVELOPMENT ? this.DEV_API_DEST : this.PROD_API_DEST;

  APP_API_BASE = argv['serverurl'] || '/api/';

  constructor() {
    super();
    // this.APP_DEST = this.APP_DEST + '/' + this.APP_CLIENT;
    // this.JS_DEST = `${this.APP_DEST}/js`;
    // this.CSS_DEST = `${this.APP_DEST}/css`;
    // this.TMP_DIR = this.TMP_DIR + '/' + this.APP_CLIENT;
    // this.SYSTEM_BUILDER_CONFIG.paths[`${this.TMP_DIR}/*`]= `${this.TMP_DIR}/*`;
    // this.setDefaultPluginConfig();
  }


}
