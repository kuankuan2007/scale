import fs from 'node:fs';
import compressing from 'compressing';
import os from 'node:os';
import path from 'node:path';

if (process.argv.length <= 2) {
  throw new Error('Please input fontello file path');
}
const zipPath = process.argv[2];
const uncompressDirPath = path.join(os.tmpdir(), 'fontello' + Math.random().toString());
const filePath = path.join(uncompressDirPath, path.basename(zipPath).replace('.zip', ''));

compressing.zip.uncompress(zipPath, uncompressDirPath).then(
  () => {
    console.log('load-fontello v0.2.0');
    console.log('uncompress success');
    const id = Math.floor(Date.now() / 1000); // 防止缓存

    const fonts = fs.readdirSync(path.join(filePath, 'font'));
    fonts.forEach((font) => {
      fs.copyFileSync(
        path.join(filePath, 'font', font),
        path.join(process.cwd(), 'src', 'assets', 'fontello', 'font', font)
      );
      console.log(`Copy ${font} success`);
    });
    const config = JSON.parse(fs.readFileSync(path.join(filePath, 'config.json'), 'utf-8'));
    config.glyphs = config.glyphs.filter((glyph) => glyph.selected);
    config['k-id'] = id;
    fs.writeFileSync(
      path.join(process.cwd(), 'src', 'assets', 'fontello', 'config.json'),
      JSON.stringify(config, null, 2)
    );

    console.log('Load config.json success');

    fs.writeFileSync(
      path.join(process.cwd(), 'src', 'assets', 'fontello', 'font-defines.scss'),
      `@font-face {
  font-family: fontello;
  src:
    url('./font/fontello.woff2?${id}') format('woff2'),
    url('./font/fontello.woff?${id}') format('woff'),
    url('./font/fontello.ttf?${id}') format('truetype'),
    url('./font/fontello.svg?${id}#fontello') format('svg');
  font-weight: normal;
  font-style: normal;
}
`
    );

    console.log('Write font-defines.scss success');

    fs.rmSync(uncompressDirPath, { recursive: true });
    console.log(`Delete ${uncompressDirPath} success`);
  },
  (e) => {
    throw e;
  }
);
