import { useCallback, useMemo, useState } from 'react';
import { Icon28CheckCircleOutline, Icon28ErrorCircleOutline } from '@vkontakte/icons';
import { Snackbar } from '@vkontakte/vkui';

import { snackbarStatuses } from '@config/ui';

const useSnackbar = (status = snackbarStatuses.SUCCESS) => {
  const [snackbar, setSnackbar] = useState(null);

  const icon = useMemo(
    () =>
      status === snackbarStatuses.SUCCESS ? (
        <Icon28CheckCircleOutline fill="var(--vkui--color_icon_positive)" />
      ) : (
        <Icon28ErrorCircleOutline fill="var(--vkui--color_icon_negative)" />
      ),
    [status]
  );

  const openSnackbar = useCallback(
    (text) => {
      if (snackbar) return;

      setSnackbar(
        <Snackbar onClose={() => setSnackbar(null)} before={icon}>
          {text}
        </Snackbar>
      );
    },
    [icon]
  );

  return { snackbar, openSnackbar };
};

export default useSnackbar;
