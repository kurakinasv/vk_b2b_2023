import getNumberOptions from '@utils/getNumberOptions';

export const timePickerSelectData = [
  { name: 'hours', localeName: 'Часы', options: getNumberOptions(7, 23) },
  {
    name: 'minutes',
    localeName: 'Минуты',
    options: getNumberOptions(0, 59, (i) => (i < 10 ? `0${i}` : String(i))),
  },
];

export const fieldNames = timePickerSelectData.map(({ name }) => name);
