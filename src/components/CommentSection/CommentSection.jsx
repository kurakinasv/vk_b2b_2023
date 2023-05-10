import { useEffect, useState } from 'react';
import { FormItem, FormLayoutGroup, Textarea } from '@vkontakte/vkui';

import { useFormContext } from '@app/context';
import Subheading from '@components/Subheading';

const CommentSection = () => {
  const { setFormState, loading, formState } = useFormContext();

  const [comment, setComment] = useState('');

  const onTextAreaChange = (event) => {
    setComment(event.target.value);
  };

  const onTextAreaBlur = () => {
    setFormState((data) => ({ ...data, comment }));
  };

  useEffect(() => {
    if (!formState.comment) {
      setComment('');
    }
  }, [formState]);

  return (
    <FormLayoutGroup mode="vertical">
      <Subheading title="Комментарий" />
      <FormItem>
        <Textarea
          value={comment}
          onChange={onTextAreaChange}
          onBlur={onTextAreaBlur}
          disabled={loading}
        />
      </FormItem>
    </FormLayoutGroup>
  );
};

export default CommentSection;
