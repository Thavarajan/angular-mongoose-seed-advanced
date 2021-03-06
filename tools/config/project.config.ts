import { join } from 'path';
import { ServerConfig } from './seed-api.Config';
import { ExtendPackages } from './seed.config.interfaces';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends ServerConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');


  FONTS_DEST = `${this.APP_DEST}/fonts`;
  FONTS_SRC = [
    'node_modules/bootstrap/dist/fonts/**',
    'node_modules/font-awesome/fonts/**'
  ];


  constructor() {
    super();
    // this.APP_TITLE = 'Put name of your app here';
    // this.GOOGLE_ANALYTICS_ID = 'Your site's ID';

    /* Enable typeless compiler runs (faster) between typed compiler runs. */
    // this.TYPED_COMPILE_INTERVAL = 5;

    // Add `NPM` third-party libraries to be injected/bundled.
    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      { src: 'jquery/dist/jquery.min.js', inject: 'libs', vendor: false },
      { src: 'tether/dist/js/tether.min.js', inject: 'libs', vendor: false },
      { src: `bootstrap/dist/js/bootstrap.min.js`, inject: 'libs', vendor: false },
      { src: `bootstrap/dist/css/bootstrap.min.css`, inject: true, vendor: false },
      { src: 'primeng/resources/primeng.min.css', inject: true },
      { src: 'primeng/resources/themes/start/theme.css', inject: true },
      { src: 'swiper/dist/css/swiper.min.css', inject: true },
      { src: 'swiper/dist/js/swiper.min.js', inject: true },
      //{ src: 'ionic-angular/umd/index.js', inject: true },
      { src: 'ionic-angular/css/ionic.min.css', inject: true },
      { src: `font-awesome/css/font-awesome.min.css`, inject: true, vendor: false },
    ];

    //this.SYSTEM_BUILDER_CONFIG.paths['ionic-angular'] ='node_modules/ionic-angular/bundles/ionic.umd.js';

    // Add `local` third-party libraries to be injected/bundled.
    this.APP_ASSETS = [
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
    ];

    this.ROLLUP_INCLUDE_DIR = [
      ...this.ROLLUP_INCLUDE_DIR,
      //'node_modules/moment/**'
    ];

    this.ROLLUP_NAMED_EXPORTS = [
      ...this.ROLLUP_NAMED_EXPORTS,
      //{'node_modules/immutable/dist/immutable.js': [ 'Map' ]},
    ];

    // Add packages (e.g. ng2-translate)
    // ng2-translate is already added with the advanced seed - here for example only
    // let additionalPackages: ExtendPackages[] = [{
    //   name: 'ng2-translate',
    //   // Path to the package's bundle
    //   path: 'node_modules/ng2-translate/bundles/ng2-translate.umd.js'
    // }];
    //

    // @ng-bootstrap Componentts added
    let additionalPackages: ExtendPackages[] = [{
      name: '@ng-bootstrap/ng-bootstrap',
      // Path to the package's bundle
      path: 'node_modules/@ng-bootstrap/ng-bootstrap/bundles/ng-bootstrap.js'
    }, {
        name: 'ionic-angular',
        path: 'node_modules/ionic-angular/umd/index.js',

      }
    ];
    this.addPackagesBundles(additionalPackages);

    this.DESKTOP_PACKAGES = [
      ...this.DESKTOP_PACKAGES,
      ...additionalPackages
    ];

    /* Add proxy middleware */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')('/api', { ws: false, target: 'http://localhost:3003' })
    // ];

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
  }

}
