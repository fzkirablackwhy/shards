const isNegativeNum = (num: number) => num < 0;

export const getRandomValue = (min: number, max: number) => min + Math.random() * (max + 1 - min);

export const preventNegativeNum = (num: number) => (isNegativeNum(num) ? 0 : num);

export const percentageOfNum = (num: number, per: number) => (num / 100) * per;
