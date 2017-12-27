import webpack from 'webpack';
import config from '../webpack.config.dev.visual';
import chalk from 'chalk';

console.log(chalk.blue('Building javascript files. This will take a moment...'));
webpack(config).run((err, stats) => {

  if (err) { // so a fatal error occurred. Stop here.
    console.log(chalk.red(err));
    return 1;
  }
  if (stats.compilation.errors && stats.compilation.errors.length)
  {
      console.log(chalk.red(stats.compilation.errors));
      process.exit(1);
  }
  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(chalk.red(error)));
  }

  if (jsonStats.hasWarnings) {
    console.log(chalk.yellow('Webpack generated the following warnings: '));
    jsonStats.warnings.map(warning => console.log(chalk.yellow(warning)));
  }


  console.log(stats.compilation.errors );
  // if we got this far, the build succeeded.
  console.log(chalk.green('Your app has been built for production and written to /dist!'));

  return 0;
});


