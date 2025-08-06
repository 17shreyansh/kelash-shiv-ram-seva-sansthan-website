const path = require('path');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // Image optimization
      const imageRule = webpackConfig.module.rules.find(rule => 
        rule.test && rule.test.toString().includes('png|svg|jpg|jpeg|gif')
      );
      
      if (imageRule) {
        imageRule.use = [
          {
            loader: 'file-loader',
            options: {
              name: 'static/media/[name].[hash:8].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 75,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ];
      }

      // Enable gzip compression
      webpackConfig.optimization = {
        ...webpackConfig.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            images: {
              test: /\.(png|jpe?g|gif|svg)$/,
              name: 'images',
              chunks: 'all',
              enforce: true,
            },
          },
        },
      };

      return webpackConfig;
    },
  },
};