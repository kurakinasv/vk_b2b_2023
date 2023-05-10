const getNumberOptions = (startId, endId, labelFormat) => {
  if (
    (typeof startId !== 'number' && typeof endId !== 'number') ||
    (typeof labelFormat !== 'undefined' && typeof labelFormat !== 'function')
  ) {
    console.error('getNumberOptionsArray: Incorrect argument type');
    return [];
  }

  const quantity = endId - startId + 1;

  return Array(quantity)
    .fill(null)
    .map((_, i) => {
      const currentId = i + startId;

      return {
        label: labelFormat ? labelFormat(currentId) : String(currentId),
        value: currentId,
      };
    });
};

export default getNumberOptions;
