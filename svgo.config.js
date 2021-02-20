/**
 * @file Svgo config
 */

module.exports = {
  plugins: [
    'cleanupAttrs',
    'cleanupEnableBackground',
    'cleanupIDs',
    'cleanupListOfValues',
    'cleanupNumericValues',
    'collapseGroups',
    'convertColors',
    'convertPathData',
    'convertShapeToPath',
    'convertStyleToAttrs',
    'convertTransform',
    'mergePaths',
    'removeComments',
    'removeDesc',
    'removeDimensions',
    'removeDoctype',
    'removeEditorsNSData',
    'removeEmptyAttrs',
    'removeEmptyContainers',
    'removeEmptyText',
    'removeHiddenElems',
    'removeMetadata',
    'removeNonInheritableGroupAttrs',
    'removeRasterImages',
    'removeTitle',
    'removeUnknownsAndDefaults',
    'removeUselessDefs',
    'removeUnusedNS',
    'removeUselessStrokeAndFill',
    'removeXMLProcInst',
    'removeStyleElement',
    'removeUnknownsAndDefaults',
    'sortAttrs',
    {
      name: 'removeAttrs',
      params: {
        attrs: ['fill', 'fill-rule', 'stroke', 'class'],
      },
    },
  ],
}
