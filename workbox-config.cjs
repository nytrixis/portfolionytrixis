// workbox-config.cjs
module.exports = {
  globDirectory: 'dist/',
  globPatterns: [
    '**/*.{html,js,css,png,jpg,gif,svg,eot,ttf,woff,gltf,bin}'
  ],
  swDest: 'dist/sw.js',
  maximumFileSizeToCacheInBytes: 50 * 1024 * 1024, // 50 MB
  runtimeCaching: [{
    urlPattern: /\.(?:png|jpg|jpeg|svg|gif|mp4|gltf|bin)$/,
    handler: 'NetworkFirst',
    options: {
      cacheName: 'assets',
      expiration: {
        maxEntries: 50,
      },
    },
  }]
};
