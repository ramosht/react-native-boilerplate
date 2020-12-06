module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '@components': './src/components',
          '@pages': './src/pages',
          '@services': './src/services',
          '@styles': './src/styles',
          '@config': './src/config',
          '@routes': './src/routes',
        },
      },
    ],
  ],
};
