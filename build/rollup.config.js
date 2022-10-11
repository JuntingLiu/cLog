import paths from './paths';
import { esm, umd } from './modules';

export default function () {
  const options = {
    // 入口文件
    input: paths.appIndexJS,
    jsName: "clog"
  };

  return [
    esm(options),
    umd(options)
  ];
};
