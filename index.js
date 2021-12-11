import inquirer from 'inquirer';
import { day1 } from './src/exercises/index.js';

const askQuestions = async () => {
  const { exerciseNumber } = await inquirer.prompt([
    {
      name: 'exerciseNumber',
      type: 'number',
      message: 'Please choose the exercise number to run',
    },
  ]);

  return `day${exerciseNumber}`;
};

const run = async () => {
  const exerciseNumber = process.argv.length > 2 ? process.argv[2] : await askQuestions();

  console.log(`-- Day ${exerciseNumber} --`);

  switch (exerciseNumber) {
    case 'day1':
      day1();
      break;
    default:
      return console.log('That exercise does not exist.');
  }

  console.log('-- End --');
};

run();
