export const createLinerArray = ({ width }) => {
  const length = Math.ceil(width / 21);
  const half = Math.floor(length / 2);

  // Создаем массив с числами
  const negativeNumbers = Array.from(
    { length: half },
    (_, index) => -1 * (half - index)
  );
  const positiveNumbers = Array.from(
    { length: length % 2 === 0 ? half : half + 1 },
    (_, index) => index + 1
  );

  // Объединяем массивы
  return [...negativeNumbers, 0, ...positiveNumbers];
};
