module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      [
        "babel-preset-expo",
        {
          targets: {
            chrome: "49",
            ios: "10",
          },
        },
      ],
    ],
  };
};
