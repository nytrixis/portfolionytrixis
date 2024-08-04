module.exports = {
    globDirectory: 'dist/',
    globPatterns: [
      '**/*.{html,js,css,png,jpg,gif,svg,eot,ttf,woff,gltf,bin}'
    ],
    swDest: 'dist/sw.js',
    maximumFileSizeToCacheInBytes: 20 * 1024 * 1024, // 20 MB
    runtimeCaching: [{
      urlPattern: /\.(?:png|jpg|jpeg|svg|gif|mp4|gltf|bin)$/,
      handler: 'CacheFirst',
      options: {
        cacheName: 'assets',
        expiration: {
          maxEntries: 50,
        },
      },
    }]
  };
  