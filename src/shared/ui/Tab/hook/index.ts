import { useCallback, useState } from 'react';

interface Props {
  selected?: number;
  onChange?: (val: number) => void | Promise<void>;
}

export const useTab = ({ selected = 0, onChange }: Props) => {
  const [active, setActive] = useState(selected);

  const handleSetActive = useCallback(
    (val: number) => {
      setActive(val);
      if (onChange) {
        onChange(val);
      }
    },
    [onChange],
  );

  return {
    active,
    setActive: handleSetActive,
  };
};
