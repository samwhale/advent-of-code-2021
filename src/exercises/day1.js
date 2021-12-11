import { readFile } from '../utils/index.js';

const countSingleIncreases = (data) =>
  data.reduce(
    ({ prev, count }, current) => {
      if (!prev || current <= prev) {
        return { prev: current, count };
      }

      return { prev: current, count: count + 1 };
    },
    { prev: 0, count: 0 }
  ).count;

const countWindowIncreases = (data) =>
  data.reduce(
    ({ prevSum, count }, current, index) => {
      if (index + 2 > data.length - 1) {
        return { prevSum: prevSum, count };
      }

      const currentSum = current + data[index + 1] + data[index + 2];

      if (!prevSum || currentSum <= prevSum) {
        return { prevSum: currentSum, count };
      }

      return { prevSum: currentSum, count: count + 1 };
    },
    { prevSum: 0, count: 0 }
  ).count;

const day1 = () => {
  const day1Data = readFile('../data/day1.txt')
    .split('\n')
    .map((num) => parseInt(num, 10));
  const result1 = countSingleIncreases(day1Data);
  const result2 = countWindowIncreases(day1Data);

  console.log(`answer to part 1: ${result1}`);
  console.log(`answer to part 2: ${result2}`);
};

export default day1;
