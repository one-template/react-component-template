// https://github.com/umijs/father

export default {
  esm: {
    type: 'rollup',
    importLibToEs: true,
  },
  cjs: 'rollup',
  runtimeHelpers: true,
};
