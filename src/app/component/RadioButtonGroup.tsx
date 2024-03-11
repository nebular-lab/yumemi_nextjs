'use client';

import useSelectedPrefTypeIndex from '@/store/selectedPrefTypeIndex';

type Props = {
  name: string;
  options: string[];
};

const RadioButtonGroup = (props: Props) => {
  const { name, options } = props;
  const { selectedPrefType, setSelectedPrefType } = useSelectedPrefTypeIndex();
  return (
    <div>
      {options.map((option, index) => (
        <label key={option}>
          <input
            type='radio'
            name={name}
            value={option}
            checked={selectedPrefType === index}
            onChange={() => setSelectedPrefType(index)}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default RadioButtonGroup;
