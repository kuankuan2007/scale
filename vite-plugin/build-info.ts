import type { Plugin } from 'vite';
import child_process from 'child_process';
import os from 'os';

const MODULE_ID = 'visual:k-build-info';

function execSubProcess(command: string) {
  const { promise, resolve, reject } = Promise.withResolvers<string>();
  child_process.exec(command, (err, stdout) => {
    if (err) {
      reject(err);
    } else {
      resolve(stdout.trim());
    }
  });
  return promise;
}
async function getGitInfo() {
  return {
    branch: await execSubProcess('git rev-parse --abbrev-ref HEAD').then(void 0, () => 'unknown'),
    lastCommit: {
      time: await execSubProcess('git log -1 --format=%cd --date=iso')
        .then((d) => new Date(d).getTime())
        .then(void 0, () => NaN),
      message: await execSubProcess('git log -1 --format=%s').then(void 0, () => 'unknown'),
      author: await execSubProcess('git log -1 --format=%an').then(void 0, () => 'unknown'),
      id: await execSubProcess('git log -1 --format=%h').then(void 0, () => 'unknown'),
      fullId: await execSubProcess('git log -1 --format=%H').then(void 0, () => 'unknown'),
    },
  };
}

export default function VitePluginScaleIndex(): Plugin {
  return {
    name: 'vite-plugin-build-info',

    resolveId(id) {
      if (id === MODULE_ID) {
        return '\0' + id;
      }
    },
    async load(id) {
      if (id === '\0' + MODULE_ID) {
        console.log(this);
        const res = {
          buildTime: Date.now(),
          meta: this.meta,
          mode: this.environment.mode,
          git: await getGitInfo(),
          os: {
            platform: os.platform(),
            release: os.release(),
            arch: os.arch(),
            node: process.version,
          },
        };
        return `export default ${JSON.stringify(res)}`;
      }
    },
  };
}
