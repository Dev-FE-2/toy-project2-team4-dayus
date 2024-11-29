import { forwardRef, useState, useRef, useEffect } from 'react';

import { ISelectProps } from '@/types/select';
import * as S from './Select.styles';

const Select = forwardRef<HTMLDivElement, ISelectProps>(
  ({ width, height, isCustom, options, value, onChange, ...props }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(
      options.find(option => option.value === value) || options[0],
    );
    const dropdownRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    // 드롭다운 외부 클릭 시 닫기
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        buttonRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    const handleSelect = (option: {
      value: string | number;
      label: string;
    }) => {
      setSelectedOption(option);
      setIsOpen(false);
      if (onChange) {
        const event = {
          target: { value: option.value },
        } as React.ChangeEvent<HTMLSelectElement>;
        onChange(event);
      }
    };

    return (
      <S.SelectWrapper width={width} height={height} ref={ref} {...props}>
        <S.SelectButton
          ref={buttonRef}
          $isOpen={isOpen}
          isCustom={isCustom}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{selectedOption?.label}</span>
          <S.StyledArrow $isOpen={isOpen} size={24} />
        </S.SelectButton>
        <S.OptionsWrapper $isOpen={isOpen} ref={dropdownRef}>
          {options.map(option => (
            <S.Option
              key={option.value}
              $isSelected={selectedOption.value === option.value}
              onClick={() => handleSelect(option)}
            >
              {option.label}
            </S.Option>
          ))}
        </S.OptionsWrapper>
      </S.SelectWrapper>
    );
  },
);

export default Select;
