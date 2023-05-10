import getNumberOptions from '@utils/getNumberOptions';

const towers = [
  {
    label: 'А',
    value: 'A',
  },
  {
    label: 'Б',
    value: 'Б',
  },
];

export const placeSelectData = [
  { name: 'tower', localeName: 'Башня', options: towers, searchable: false },
  { name: 'floor', localeName: 'Этаж', options: getNumberOptions(3, 27), searchable: true },
  {
    name: 'room',
    localeName: 'Переговорная',
    options: getNumberOptions(1, 10, (i) => `№ ${i}`),
    searchable: true,
  },
];

export const fieldNamesEnum = placeSelectData.map(({ name }) => name);

export const defaultValues = placeSelectData.reduce(
  (acc, { name, options }) => ({
    ...acc,
    [name]: typeof options[0].value === 'string' ? '' : 0,
  }),
  {}
);
