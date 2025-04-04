const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);

  defaultConfig.resolver.blockList = [
    /node_modules\/.*\/node_modules\/react-native\/.*/,
  ];

  return defaultConfig;
})();
