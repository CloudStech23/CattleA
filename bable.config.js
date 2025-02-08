module.exports = function(api) {
    api.cache(true);
    return {
      presets: ['module:metro-react-native-babel-preset'],
      plugins: [
        'react-native-reanimated/plugin',
        // Add this plugin to disable strict mode logging
        ['react-native-reanimated', { debug: true }],
      ],
    };
  };
  