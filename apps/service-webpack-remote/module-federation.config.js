module.exports = {
  name: 'service-webpack-remote',
  exposes: {
    './Module': './src/remote-entry.ts',
  },
};
