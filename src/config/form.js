export const requiredFields = [
  'tower',
  'floor',
  'room',
  'date',
  'hours',
  'minutes',
  'time_end',
  'time_start',
];

export const defaultFormValue = {
  tower: '',
  floor: 0,
  room: 0,
  date: null,
  time_start: {
    hours: '',
    minutes: '',
  },
  time_end: {
    hours: '',
    minutes: '',
  },
  comment: '',
};

export const formStatusEnum = {
  DEFAULT: 'default',
  ERROR: 'error',
};

export const datePickerFieldName = 'date';
