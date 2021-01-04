// More: https://d.umijs.org/config
import { defineConfig } from 'dumi';

const name = 'react-component-template';
const shortName = 'temp';

export default defineConfig({
  title: shortName,
  favicon: 'https://avatars3.githubusercontent.com/u/75602446?s=200&v=4',
  logo: 'https://avatars3.githubusercontent.com/u/75602446?s=200&v=4',
  outputPath: 'docs-dist',
  exportStatic: {},
  base: `/${name}/`,
  publicPath: `/${name}/`,
  hash: true,
});
