import React from 'react';
import cx from 'classnames';

type Props = {
  label: string;
  inverted?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

export default function Button({ label, inverted = false, onClick }: Props) {
  return (
    <button
      className={cx(
        'px-8 py-2 hover:bg-white hover:text-customred rounded-full border-2 transition duration-200 ease-in-out',
        {
          'bg-red-100 border-red-100 text-customred': inverted,
          'bg-customred border-customred text-white': !inverted,
        }
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
