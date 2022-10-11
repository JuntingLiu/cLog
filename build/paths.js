import path from 'path';
import fs from 'fs';

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);

export default {
  appPath: resolveApp("."),
  appBuild: resolveApp("dist"),
  appSrc: resolveApp("src"),
  appIndexJS: resolveApp("src/index"),
};