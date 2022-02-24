module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: [
    '@babel/plugin-transform-runtime', // 减少冗余代码
    [
      '@babel/plugin-transform-modules-commonjs',
      {
        allowTopLevelThis: true,
        loose: true,
        lazy: true,
      },
    ],
    [
      'babel-plugin-react-css-modules',
      {
        exclude: 'node_modules',
        webpackHotModuleReloading: true,
        generateScopedName: '[name]__[local]__[hash:base64:5]',
        autoResolveMultipleImports: true, // styleNames 如果在其中一个中,则允许多个匿名导入
        filetypes: {
          '.less': { syntax: 'postcss-less' },
        },
      },
    ],
  ],
};
