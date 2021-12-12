import { spawn } from 'child_process';
import fs from 'fs-extra';
import * as path from 'path';
import rimraf from 'rimraf';

const rootPath = path.resolve(__dirname, '..');
const distPath = path.resolve(rootPath, 'dist');

const cleanDistFolder = () => {
  return new Promise<void>((resolve) => {
    if (!fs.existsSync(distPath)) {
      fs.mkdirSync(distPath);
      resolve();
      return;
    }

    rimraf(distPath, (error) => {
      if (error) {
        console.error(error);
        process.exit(1);
      }

      fs.mkdirSync(distPath);
      console.log('Cleaned dist folder');
      resolve();
    });
  });
};

const compileFilesWithTSC = () => {
  return new Promise<void>((resolve, reject) => {
    const command = 'tsc';
    const tsc = spawn(command);

    tsc.stdout.on('data', (data) => {
      console.log(data.toString());
    });

    tsc.stderr.on('data', (data) => {
      console.error(data.toString());
    });

    tsc.on('exit', (code) => {
      if (typeof code === 'number' && code > 0) {
        console.log(`${command} exited with status code ${code}`);
        reject();
      } else {
        resolve();
      }
    });

    tsc.on('close', () => {
      console.log('Compiled TypeScript files');
      resolve();
    });
  });
};

const rewriteAndCopyPackageJson = () => {
  return new Promise<void | NodeJS.ErrnoException>((resolve, reject) => {
    const packageJsonPath = path.resolve(rootPath, 'package.json');

    fs.readFile(packageJsonPath, (readError, data) => {
      if (readError) {
        reject(readError);
        return;
      }

      const outputPackageJsonPath = path.resolve(distPath, 'package.json');
      const parsedPackageJson = JSON.parse(data.toString());

      delete parsedPackageJson.private;
      delete parsedPackageJson.scripts.prepare;

      fs.writeFile(outputPackageJsonPath, JSON.stringify(parsedPackageJson, null, 2), (writeError) => {
        if (writeError) {
          reject(writeError);
          return;
        }
      });

      console.log('Wrote package.json');
      resolve();
    });
  });
};

const rewriteAndCopyTSConfig = () => {
  return new Promise<void | NodeJS.ErrnoException>((resolve, reject) => {
    const tsconfigPath = path.resolve(rootPath, 'tsconfig.json');

    fs.readFile(tsconfigPath, (readError, data) => {
      if (readError) {
        reject(readError);
        return;
      }

      const parsedTSConfig = JSON.parse(data.toString());
      const outputPath = path.resolve(distPath, 'tsconfig.json');

      delete parsedTSConfig['ts-node'];
      delete parsedTSConfig['files'];

      fs.writeFile(outputPath, JSON.stringify(parsedTSConfig, null, 2), (writeError) => {
        if (writeError) {
          reject(writeError);
          return;
        }
      });

      console.log('Wrote tsconfig.json');
      resolve();
    });
  });
};

const copyFiles = () => {
  const filePaths = [
    { source: path.resolve(rootPath, 'docs', 'README.md'), destination: path.resolve(distPath, 'README.md') },
    {
      source: path.resolve(rootPath, 'typings', 'html.d.ts'),
      destination: path.resolve(distPath, 'typings', 'html', 'index.d.ts'),
    },
    {
      source: path.resolve(rootPath, 'typings', 'flexible.d.ts'),
      destination: path.resolve(distPath, 'typings', 'flexible', 'index.d.ts'),
    },
  ];

  return Promise.all(
    filePaths.map((filePath) => {
      return new Promise<void>((resolve, reject) => {
        fs.copy(filePath.source, filePath.destination, (error) => {
          if (error) {
            reject(error);
            return;
          }

          console.log('Copied ' + filePath.source + ' -> ' + filePath.destination);
          resolve();
        });
      });
    })
  );
};

const run = async () => {
  await cleanDistFolder();
  await compileFilesWithTSC();
  await rewriteAndCopyTSConfig();
  await rewriteAndCopyPackageJson();
  await copyFiles();
};

run();
