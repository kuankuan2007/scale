import data from './config.json';
const config: Record<string, number> = {};
data.glyphs.forEach((item) => {
  config[item.css] = item.code;
});
export default config;
