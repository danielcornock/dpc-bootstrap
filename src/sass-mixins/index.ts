import { fileTransfer } from '../lib/fileTransfer';
import inquirer from 'inquirer';
import chalk from 'chalk';

export const sass = async (): Promise<void> => {
  const questions = [
    {
      name: 'project',
      type: 'list',
      message: 'Select the type of project you are using',
      choices: ['Default', 'Angular'],
      default: 'Default'
    }
  ];

  const answer: { project: string } = await inquirer.prompt(questions);

  let directory: string = '';

  try {
    if (answer.project === 'Default') {
      directory = await fileTransfer('/sass-mixins/files', './sass');
    } else if (answer.project === 'Angular') {
      directory = await fileTransfer(
        '/sass-mixins/files',
        './src/assets/styles'
      );
      console.log(
        `Don't forget to add ${chalk.cyan(
          "@import 'src/assets/styles/themes'"
        )} to each components .scss file!`
      );
    }
    console.log(chalk.green(`Files successfully created in ${directory}!`));
  } catch (e) {
    console.log(
      chalk.red(
        'You are probably receiving this error because the directory does not exist.'
      )
    );
  }
};
