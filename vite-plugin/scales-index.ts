import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';
import { build } from 'esbuild';

import type { Scale } from '../src/types/form';
import type { ScaleIndex } from '../src/types/scaleIndex';
import { pathToFileURL } from 'url';

const SCALES_PATH = path.resolve('./src/scales');
const MODULE_ID = 'visual:scales-index';
const TEMP_DIR = path.resolve('./temp/scale-index-temp');

console.log(__dirname);

export default function VitePluginScaleIndex(): Plugin {
  return {
    name: 'vite-plugin-scales-index',
    async buildStart() {
      for (const i of await fs.promises.readdir(SCALES_PATH)) {
        this.addWatchFile(path.join(SCALES_PATH, i));
      }
    },
    resolveId(id) {
      if (id === MODULE_ID) {
        return '\0' + id;
      }
    },
    async load(id) {
      if (id === '\0' + MODULE_ID) {
        if (fs.existsSync(TEMP_DIR)) {
          await fs.promises.rm(TEMP_DIR, { recursive: true });
        }
        fs.promises.mkdir(TEMP_DIR, {
          recursive: true,
        });
        const files = await fs.promises.readdir('./src/scales/');

        await Promise.all(
          files.map((i) =>
            build({
              entryPoints: [path.join(SCALES_PATH, i)],
              outfile: path.join(TEMP_DIR, i.replace(/\.ts$/i, '.mjs')),
              bundle: true,
              format: 'esm',
            })
          )
        );

        const promises = files.map((i) =>
          import(pathToFileURL(path.join(TEMP_DIR, i.replace(/\.ts$/i, '.mjs'))).href).then(
            (i) => i.default
          )
        );
        const results: Scale[] = await Promise.all(promises);
        const res: ScaleIndex = {};
        for (const i of results) {
          res[i.id] = {
            name: i.name,
            description: i.description,
            id: i.id,
            tags: i.tags,
          };
        }
        return `export default ${JSON.stringify(res)}`;
      }
    },
  };
}
