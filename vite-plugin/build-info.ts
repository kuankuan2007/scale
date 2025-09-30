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

export default function VitePluginBuildInfo(): Plugin {
  return {
    name: 'vite-plugin-build-info',

    resolveId(id) {
      if (id === MODULE_ID) {
        return '\0' + id;
      }
    },
    async load(id) {
      if (id === '\0' + MODULE_ID) {
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
        const showRes = await Promise.all(
          (
            [
              {
                title: '构建时间',
                content: async () => new Date(res.buildTime).toLocaleString().replace(/ /g, '\n'),
              },
              {
                title: '环境',
                content: async () => res.mode.toUpperCase(),
              },
              {
                title: '分支',
                content: async () => res.git.branch,
              },
              {
                title: '上次提交',
                content: async () => res.git.lastCommit.id,
              },
              {
                title: 'Vite',
                content: async () => res.meta.viteVersion,
                url: 'https://vite.dev/',
              },
              {
                title: 'rolldownVersion' in res.meta ? 'Rolldown' : 'Rollup',
                content: async () =>
                  ((res.meta as { rolldownVersion?: string; rollupVersion?: string })
                    .rolldownVersion as string) || res.meta.rollupVersion,
                url:
                  'rolldownVersion' in res.meta ? 'https://rolldown.rs/' : 'https://rollupjs.org/',
              },
              {
                title: 'Node',
                content: async () => res.os.node,
                url: 'https://nodejs.org/',
              },
              {
                title: '操作系统',
                content: async () => `${res.os.platform}\n${res.os.arch}`,
              },
            ] as {
              title: string;
              content: Promise<string> | (() => Promise<string>);
              url?: string;
            }[]
          ).map((i) =>
            Promise.resolve(typeof i.content === 'function' ? i.content() : i.content)
              .then(void 0, () => 'unknown')
              .then((content) => ({
                title: i.title,
                url: i.url,
                content,
              }))
          )
        );
        return `export default ${JSON.stringify(res)};export const show = ${JSON.stringify(
          showRes
        )};`;
      }
    },
  };
}
