'use client';

import { InputHTMLAttributes } from 'react';

interface CheckBoxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'defaultValue'> {
  /**
   * 表示ラベル
   */
  label?: string;
}
const Checkbox = ({ label, ...props }: CheckBoxProps) => {
  return (
    <>
      <input type='checkbox' {...props} />
      <label>{label}</label>
    </>
  );
};

export default Checkbox;
