import { useCallback, useMemo } from 'react';
import { CustomSelect, FormItem, FormLayoutGroup } from '@vkontakte/vkui';

import { useFormContext } from '@app/context';
import { placeSelectData, fieldNamesEnum } from '@config/placeSelect';
import { formStatusEnum } from '@config/form';
import useStatus from '@hooks/useStatus';
import { updateObjectProperty } from '@utils/updateObjectProperty';

import Subheading from '../Subheading';

const PlaceSelect = () => {
  const { setFormState, formState, loading } = useFormContext();

  const placeSelectProps = useMemo(() => {
    const foundProps = Object.entries(formState).filter(([key]) => fieldNamesEnum.includes(key));
    const foundPropsObj = foundProps.reduce((acc, [key, val]) => ({ ...acc, [key]: val }), {});

    return foundPropsObj;
  }, [formState]);

  const { status, setStatus, changeStatusByFieldValue } = useStatus(
    Object.values(fieldNamesEnum),
    placeSelectProps
  );

  const changeHandler = useCallback((event) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormState(updateObjectProperty(name, value));

    const currentStatus = value ? formStatusEnum.DEFAULT : formStatusEnum.ERROR;
    setStatus(updateObjectProperty(name, currentStatus));
  }, []);

  return (
    <FormLayoutGroup mode="vertical">
      <Subheading title="Место" />

      {placeSelectData.map(({ name, localeName, options, searchable }) => (
        <FormItem key={name} bottom={placeSelectProps[name] ? localeName : ''}>
          <CustomSelect
            name={name}
            placeholder={localeName}
            options={options}
            selectType="default"
            allowClearButton
            onChange={changeHandler}
            searchable={searchable}
            onClose={changeStatusByFieldValue(name)}
            status={status[name]}
            required
            value={placeSelectProps[name]}
            disabled={loading}
          />
        </FormItem>
      ))}
    </FormLayoutGroup>
  );
};

export default PlaceSelect;
