module.exports = {
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  plugins: [
    [
      'snowpack-plugin-raw-file-loader',
      {
        exts: ['.glsl'],
      },
    ],
  ],
  routes: [],
  optimize: {
    bundle: true,
  },
  packageOptions: {},
  devOptions: {
    port: 9009,
  },
  buildOptions: { out: 'docs' },
}
