import { useState } from 'react';
import { CustomSelect, FormItem, FormLayoutGroup } from '@vkontakte/vkui';

import Subheading from '../Subheading';

const towers = [
  {
    label: 'А',
    value: 'a',
  },
  {
    label: 'Б',
    value: 'b',
  },
];

const PlaceSelect = () => {
  const floors = Array(25)
    .fill(null)
    .map((_, i) => ({
      label: String(i + 3),
      value: i + 3,
    }));

  const rooms = Array(10)
    .fill(null)
    .map((_, i) => ({
      label: `№ ${i + 1}`,
      value: i + 1,
    }));

  // { tower: '', floor: 0, room: 0 }
  const [formData, setFormData] = useState({
    tower: '',
    floor: 0,
    room: 0,
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    console.log(name, value);

    setFormData((data) => ({ ...data, [name]: value }));
  };

  return (
    <FormLayoutGroup mode="vertical">
      <Subheading title="Место" />

      <FormItem style={{ flexGrow: 1, flexShrink: 1 }} bottom={formData.tower ? 'Башня' : ''}>
        <CustomSelect
          placeholder="Башня"
          options={towers}
          selectType="default"
          allowClearButton
          onChange={handleChange}
          name="tower"
        />
      </FormItem>

      <FormItem style={{ flexGrow: 1, flexShrink: 1 }} bottom={formData.floor ? 'Этаж' : ''}>
        <CustomSelect
          placeholder="Этаж"
          options={floors}
          selectType="default"
          allowClearButton
          searchable
          onChange={handleChange}
          name="floor"
        />
      </FormItem>

      <FormItem
        style={{ flexGrow: 1, flexShrink: 1 }}
        bottom={formData.room ? 'Переговорочная' : ''}
      >
        <CustomSelect
          placeholder="Переговорочная"
          options={rooms}
          selectType="default"
          allowClearButton
          searchable
          onChange={handleChange}
          name="room"
        />
      </FormItem>
    </FormLayoutGroup>
  );
};

export default PlaceSelect;
