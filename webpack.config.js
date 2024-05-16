const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
            plugins: ['@babel/plugin-proposal-private-property-in-object']
          }
        }
      },
      {
        test: /\.module\.css$/, // Regex to match CSS module files
        include: path.resolve(__dirname, 'src'), // Only process CSS modules in your src directory
        use: [
          'style-loader', // Injects CSS into the DOM via a <style> tag
          {
            loader: 'css-loader', // Translates CSS into CommonJS modules
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]' // Configure generated class names
              }
            }
          },
          // Uncomment the following lines if you installed postcss-loader
          // {
          //   loader: 'postcss-loader', // Process CSS with PostCSS
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         require('autoprefixer')(), // Add vendor prefixes to CSS rules
          //       ],
          //     },
          //   },
          // },
        ]
      },
      {
        test: /\.css$/, // Regex to match regular CSS files
        exclude: /\.module\.css$/, // Exclude CSS module files
        use: [
          'style-loader', // Injects CSS into the DOM via a <style> tag
          'css-loader' // Translates CSS into CommonJS modules
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'] // Resolve these extensions
  },
  entry: './src/index.js', // Entry point for the application
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory
    filename: 'bundle.js' // Output bundle file name
  }
};
