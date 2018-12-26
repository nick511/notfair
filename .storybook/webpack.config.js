module.exports = (storybookBaseConfig, configEnv) => {
  storybookBaseConfig.module.rules.push(
    {
      test: /\.(woff|woff2|eot|ttf|svg|gif|png)$/,
      use: 'url-loader'
    });

  return storybookBaseConfig;
}
