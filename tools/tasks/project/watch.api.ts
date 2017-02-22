import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join } from 'path';
import gulp = require('gulp');
import * as runSequence from 'run-sequence';

import Config from '../../config';

import { Apiserver } from './express-api';

const plugins = <any>gulpLoadPlugins();


/**
 * Watches the task with the given taskname.
 * @param {string} taskname - The name of the task.
 */
function watch(taskname: string, root: string = Config.APP_SRC) {
  return function () {
    let paths: string[] = [
      join(root, '**')
    ].concat(Config.TEMP_FILES.map((p) => { return '!' + p; }));

    // watches for user defined paths to trigger compilation
    if (Config.EXTRA_WATCH_PATHS) {
      paths = paths.concat(Config.EXTRA_WATCH_PATHS.map((p) => {
        return join(p, '**');
      }));
    }
    let tasks = taskname.split(' ');
    plugins.watch(paths, (e: any) => {
      setTimeout(() => {
        //plugins.series(tasks);
        //let tsk = gulp.task(tasks[1], [tasks[0]]);
        runSequence(tasks);
      }, 100);
    });
  };
}
/**
 * Executes the build process, watching for file changes and rebuilding the api development environment.
 */
export = watch('serve.api', Config.APP_API_SRC);
