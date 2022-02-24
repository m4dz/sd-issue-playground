module.exports = {
    source: ['design-system/**/*.tokens.json'],
    platforms: {
      css: {
        transformGroup: 'css',
        buildPath: 'design-system/styles/',
        options: {
          outputReferences: true,
          outputReferenceFallbacks: true,
        },
        files: [
          {
            destination: 'design-tokens.css',
            format: 'css/variables',
          },
        ],
      },
    },
  };
  